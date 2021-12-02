### 1.1.2+4

- [fix] Added missing internet permission for android (which caused endless update check)
- [fix] Updated validation logic for response from github (it was a slightly incorrect, and caused problems in web-version)
- Small UI changes

<br>

### 1.1.0+2

- Added support of Ukrainian language (`uk_UA`) by [@SN4S](https://github.com/NEK-RA/flutter_material_palette/commit/ac48e474b4c423a78859feb3ce290a69dc48946a)
- Instead of copy HEX-value now the dialog with few representations shown. It's include HEX (i.e. `#123456`), RGB (i.e. `rgb(50,150,250)`) and Flutter's variables (i.e. `Colors.indigo[600]` , `Colors.indigoAccent.shade700`)
- Check for updates implemented (manually, from the settings screen).

<br>

### 1.0.0+1

First release was built for android only and published to google play.

- App has list/grid of predefined colors and their shades
- Pressing on color card will copy it's HEX-value to clipboard
- App supports english and russian languages
- Language can be switched from settings
