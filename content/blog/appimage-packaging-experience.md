---
title: Packaging linux apps into AppImage
description: As always - the long boring story of first experience, now about AppImage packaging format
author: NEK-RA
posted: 1636801351000
tags: 
  - Blog
  - Project update
  - Packaging
  - Linux
keywords:
  - linux
  - appimage
  - packaging
  - flutter
---
## Intro

Some time ago I started with Flutter and it still interesting enough for me :) But after first release you have to decide how to distribute your app to users. On first release of [Material Palette](https://nek-ra.github.io/projects/material_palette) I forgot about everything and as result - I just built android and web versions. Android was published to [Google Play](https://play.google.com/store/apps/details?id=io.github.nek_ra.material_palette) and web version was published to [Github Pages](https://nek-ra.github.io/flutter_material_palette/). I understood that I forgot to create a windows build and moreover I didn't run project on linux yet.

On second release I published all versions (android, windows, linux and web) and understand that I missed one important thing - packaging apps for desktop. Yes, for windows it's common thing to download any portable software, just extract is somewhere and start using. But this is not common case for Linux - in most cases software is distributed through repositories. Of course there exists "portable" apps, but in most cases they are single-file binaries which are easy to place into any folder added to PATH, and then use it by single command. And know, that it's also easy enough to remove app by removing this single portable binary.

## Why AppImage?

To package my app for Linux I decided to try the [AppImage](https://appimage.org/) format. I used apps packaged in such format for long time and found it comfort enough. It gives almost independent single executable file, that needs only to allow it's execution (by running `chmod +x` or from file permission properties) and it's ready to use. It also doesn't require for setuping any repositories and etc.

As I got known few days ago (before starting experiments) - AppImage format doesn't just create single executable file, but also bring all dependencies with app. And that's how the independency from linux distribution reached. So no matter if required library exists on target machine, because it always exists inside AppImage package and packaged app will see the required library. Yes, this increases the package size, but AppImage also compress the result, so finally it's not so fat.

## My expirience

The built Material Palette project for linux weights about 22MB (`du -sh .` in output directory). My host OS is Linux Mint (Cinnamon).

There are few ways to package app into AppImage format, but I guess that one of the most popular tools for that is [appimage-builder](https://appimage-builder.readthedocs.io/en/latest/examples/flutter.html). It add into result some metadata like package, name, version, icon, and (what's most important) launch the entrypoint of your app to detect runtime dependencies - which libraries from host OS are used. As result it generates config (called as "recipe"), which can be then edited.

According to Flutter's docs - [https://flutter.dev/desktop#linux](https://flutter.dev/desktop#linux) dependecies that are required to exist in target OS for the linux desktop app are:

- libgtk-3-0
- libblkid1
- liblzma5

First time I run `appimage-builder --generate` it generated me the "recipe" with 17 packages to be installed by `apt` and bunch of libraries to be copied from `/lib/x86_64-linux-gnu/`. When I generated AppImage from this recipe, result was about 105MB, which are extremely large in my opinion for so small app (just don't forget that AppImage is also compressed).

My first experiments was to cleanup "included files" section, as I guess "all necessary" libraries should be installed from apt. I reffered few configs from network where were marked only few libraries for include and was `exclude` section, which contains some DE related files (themes, fonts, icons and etc.)
Using that I got result about 50MB (which are still large enough).

Next experiments were reffered from this issue - https://github.com/AppImageCrafters/appimage-builder/issues/130#issuecomment-843288012
Shortly - after generating an AppImage file, there appeared file `.bundle.yml` file inside `AppDir` folder, which contains deployed libraries. Advice is to try exclude something from that. May be it's a good enough advice, but it takes too long time to check for each package/library if it breaks resulted AppImage file at least with official tests of `appimage-builder` (docker containers). I faced more broken results than any sane size reduction.

My next experiment was to reduce dependecies which should be installed from package manager and use files from host system. I deleted `AppDir` and `appimage-builder-cache` folders and regenerated the recipe. At next step I commented all packages which should be installed from package manager and leaved only included files. Result was fail, because of needing one package, but after adding it I got AppImage result in 36MB. That sounds much better than starting 105MB or even previous result of 50MB.

Here I got small "boost" - Flutter project built into AOT binaries, so they doesn't need for interpreter or runtime, only some system libraries. So I checked output of `ldd` for my app, and then mapped list of required libraries to list of library files which were detected by `appimage-builder`. Finally some of them was correct, some not found in `ldd` output and some was in `ldd` output, but were not detected by appimage-builder. I added all undetected, removed all unused. My final result is 26MB and it passed all appimage-builder tests (running in docker images of fedora, cent, debian, ubuntu and arch) :)

## Conclusion

I understand that it's bad enough for continious building, because it will require to always check for used libraries and adapt config if something changed, but for rare enough builds I guess it's has some kind of balance between good and bad. My `AppImageBuilder.yml` available in repo - [https://github.com/NEK-RA/flutter_material_palette/blob/main/AppImageBuilder.yml](https://github.com/NEK-RA/flutter_material_palette/blob/main/AppImageBuilder.yml). It will be wonderfull if this config (or even post) will be usefull for somebody, but if you know AppImage format well and can suggest how to improve my config for flutter - welcome here into comments, or into [Material Palette issues](https://github.com/NEK-RA/flutter_material_palette/issues) 🤔
