---
title: Material Palette
description: Small palette app with predefined (by Flutter) material colors and ther shades
icon: {'url':'/project/material_palette/icon.png','type':'asset'}
status: ACTIVE
version: 1.0.0
lang: MULTILANGUAGE
platform: CROSSPLATFORM
require:
  - Windows - Win 7+ (64-bit)
  - Linux - any actual linux distro (64-bit)
  - Android - Android 4.1+ (SDK 16), CPU - ARMv7, ARMv8a, x86_64
  - Web browser - Chrome 84, Firefox 72.0, Safari/Catalina, MS Edge 1.2.0
keywords:
  - flutter
  - dart
  - learning
  - colors
  - material
  - hex
  - rgb
links:
  - {
    label: Run in browser,
    url: https://nek-ra.github.io/flutter_material_palette/
  }
  - {
    label: Google Play,
    url: https://play.google.com/store/apps/details?id=io.github.nek_ra.material_palette
  }
  - {
    label: Github Releases,
    url: https://github.com/NEK-RA/flutter_material_palette/releases
  }
---

## Description

A color palette from Flutter's predefined material colors. Yes, yet another color palette.

**Currently (v1.0.0):**

1. app contain list of predefined material colors
2. there is list of predefined shades for all colors
3. almost for each there is also accent shades (excluding brown, grey and blueGrey)
4. by tapping on concrete shade you'll copy HEX value of color
5. by default app shown with dark theme, but the light one also exists
6. app has multiple language support, for now it's Russian and English only

<br>

**Soon (v1.1.0):**

- copying of HEX value will be replaced with dialog where also will be RGB value(format for CSS usage) and how it's named in Flutter framework
- built in check for updates
- add support of Ukrainian language

<br>

Few demo gifs are here: [media/demos](https://github.com/NEK-RA/flutter_material_palette/blob/main/media/demos)

Also there is available web version: [https://nek-ra.github.io/flutter_material_palette/](https://nek-ra.github.io/flutter_material_palette/)

P.S.: It's available because Flutter can provide web output while all project dependecies have web support.

<v-alert-info-slot>

I'm using this project to learn [Flutter](https://flutter.dev) and few related packages(will be listed below). That's why something may be wrong or anything else. If you found anything like that - welcome to issues :)

To checkout all supported platforms by Flutter, visit [Flutter supported platforms page](https://flutter.dev/docs/development/tools/sdk/release-notes/supported-platforms)

</v-alert-info-slot>

## Used packages (libraries)

- [shared_preferences](https://pub.dev/packages/shared_preferences) to store settings
- [auto_route](https://pub.dev/packages/auto_route) to simplify usage of flutter's navigator 2.0 mechanism
- [flutter_bloc](https://pub.dev/packages/flutter_bloc) to manage current app state with [Cubits](https://bloclibrary.dev/#/coreconcepts?id=cubit)
- [flutter_localizations](https://flutter.dev/docs/development/accessibility-and-localization/internationalization) and [intl_utils](https://pub.dev/packages/intl_utils) for supporting multiple languages
- [url_launcher](https://pub.dev/packages/url_launcher) to be able to forward user to browser with app's homepage (Github repository)

In near future (v.1.1.0):

- [http](https://pub.dev/packages/http) package to be able to manually check updates (from Github Releases section)
- [url_launcher](https://pub.dev/packages/url_launcher) also will be used to forward user to latest update page, when updates will be found


