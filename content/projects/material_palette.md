---
title: Material Palette
description: Small palette app with predefined (by Flutter) material colors and ther shades
icon: {'url':'/project/material_palette/icon.png','type':'asset'}
status: ACTIVE
version: 1.1.0+2
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
    url: https://nek-ra.github.io/flutter_material_palette
  }
  - {
    label: Github Repository,
    url: https://github.com/NEK-RA/flutter_material_palette
  }
  - {
    label: Github Releases,
    url: https://github.com/NEK-RA/flutter_material_palette/releases
  }
  - {
    label: Google Play,
    url: https://play.google.com/store/apps/details?id=io.github.nek_ra.material_palette
  }
---

## Description

A color palette from Flutter's predefined material colors. Yes, yet another color palette.

**Currently (v1.1.0):**

1. App contain list of predefined material colors
2. There is list of predefined shades for all colors
3. Almost for each there is also accent shades (excluding brown, grey and blueGrey)
4. By tapping on concrete shade you'll get a dialog, where you'll find HEX, RGB and Flutter's variable representations of color
5. By default app shown with dark theme, but the light one also exists
6. You can check for updates right from the app*
7. App has multiple language support, currently there are:
    - Russian (developer's native)
    - English
    - Ukrainian language added by [@SN4S](https://github.com/SN4S)

<br>

Few demo gifs are here: [media/demos](https://github.com/NEK-RA/flutter_material_palette/blob/main/media/demos)

<v-alert-info-slot>

I'm using this project to learn [Flutter](https://flutter.dev) and few related packages(will be listed below). That's why something may be wrong or anything else. If you found anything like that - welcome to issues :)

To checkout all supported platforms by Flutter, visit [Flutter supported platforms page](https://flutter.dev/docs/development/tools/sdk/release-notes/supported-platforms)

</v-alert-info-slot>

## Used packages (libraries)

- [shared_preferences](https://pub.dev/packages/shared_preferences) to store settings
- [auto_route](https://pub.dev/packages/auto_route) to simplify usage of flutter's navigator 2.0 mechanism
- [flutter_bloc](https://pub.dev/packages/flutter_bloc) to manage current app state with [Cubits](https://bloclibrary.dev/#/coreconcepts?id=cubit)
- [flutter_localizations](https://flutter.dev/docs/development/accessibility-and-localization/internationalization) and [intl_utils](https://pub.dev/packages/intl_utils) for supporting multiple languages
- [url_launcher](https://pub.dev/packages/url_launcher) to be able to forward user to browser with app's homepage (Github repository) and to latest update page, when updates will be found (in Github Releases)
- [http](https://pub.dev/packages/http) package to be able to manually check updates (from Github Releases section)
