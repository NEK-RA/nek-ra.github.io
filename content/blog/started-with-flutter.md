---
title: I got started with Flutter
description: Small description of a project, using which I'm going to learn Flutter itself and few other packages around it
author: NEK-RA
posted: 1634741888000
updated: 1636377756000
tags: 
  - News
  - Blog
  - Flutter
keywords:
  - flutter
  - dart
  - colors
  - palette
  - open-source
---

Yet another post in this strange blog :)

## I started learnign Flutter

I still don't have any GUI apps written. The only thing that has something similar to GUI is this website 😂 But somewhere in dreams I still want to be able to write apps which I can launch both on my phone and on my laptop. Today there are too many languages, frameworks and libraries and sometimes it's hard to choose what you want to try. Trying everything will take too much time and, what's more important, today it's very popular to have app working on few platforms. Examples are browser, social networks, some filemanagers and etc. Some of them works on mobile and web, some on mobile and PC. Some are fully cross-platform and works on each device.

Just for one minute imagine situation when you have an Android app (traditional apps are written in Java), but it's simple enough so you wish to bring it for iOS, or may be your Windows or Linux device. In this case even if you'll decide to still use java, you'll need to learn another UI libraries. This also brings some nuances as required runtime and it's size, supported architectures and etc.

In case of a "better way" you'll need to learn not only other UI libraries but also other languages, which are more usual for target OS - C or C++ for PC, also .NET for Windows is more similar to Java but still differs and use another UI libraries of course. For building iOS apps you'll need Swift and more over a MacOS device.

For now, my choice is to try Flutter. For me it looks more similar to web, while it still gives a native result. Firstly my target was to get into Android development, but thanks to my friend, I got known that Flutter some time ago introduced support for PC.

## Nuances

Yes, there is also exists some nuances (as I mentioned before). They are:

- Windows 32-bit not supported. For Windows 64-bit hello-world weights about 20MB. Yes, that's not so small as C++ or .NET which hello-world will be less than 1MB in case of usage windows built-in libraries. But these 20MB also not the Electron case, which size is at least the chromium size + the project itself may rise up to 100+ MB. Also while comparing Flutter with Electron - Electron apps are for PC only, while Flutter apps can be built for both PC and mobile while used dependencies supports for these platforms.
- Universal Android "Hello-World" **apk** weights also about 20MB, but this includes support for Arm, Arm64 and x86_64 architecture of android devices. When building apk which supports only one architecture it weights about 6MB which is not so big today.
- Android app can be built from any 64-bit PC (Windows, Linux, Mac), but desktop app for windows can be built only on windows, linux build requires linux machine. MacOS and iOS requires Mac device. But thanks to automatic build services in global network, in theory I can create Mac and iOS build even without buying Mac device. The problem is that I won't able to test such builds 🤣🤣🤣

But c'mon, one language, one UI library, not so big build size and reaching most platforms... this sounds veeery good, at least enough to try🤔

## Starting point

In most guides for most UI libraries example app is something like ToDo app, where you can add task, remove it, or mark as "done". I don't want to go through "todo" again, so my desicion is to make a color palette app with few different options. Demo GIF is below:

<centered-image-md source="https://raw.githubusercontent.com/NEK-RA/flutter_material_palette/main/media/demos/material_palette-base_colors.gif" description="demo 1"></centered-image-md>

<br>

<centered-image-md source="https://raw.githubusercontent.com/NEK-RA/flutter_material_palette/main/media/demos/material_palette-color_shades.gif" description="demo 2"></centered-image-md>

For now this project shows only predefined in Flutter colors with their shades. All of them (excluding brown, grey and blueGrey) also has 4 shades of accent colors. It's also possible to switch view (display colors in list or in grid) in main screen where all base colors shown and on color's page where shown shades. Also there is dark and light theme. These 3 settings are stored on device and app read them at launch 🤔

Plans for next steps are in the repo [https://github.com/NEK-RA/flutter_color_palette/#next-steps](https://github.com/NEK-RA/flutter_color_palette/#next-steps), because at least for now flutter looks very interesting for me :)

P.S.: This color palette not added yet to the "Projects" section of this site. I need to finish 4 more steps from list above and create an icon for the app.
