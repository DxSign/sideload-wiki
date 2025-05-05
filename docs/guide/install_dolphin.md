
---
title: "Play GameCube & Wii Games with DolphiniOS!"
description: "DolphiniOS is a GameCube and Wii emulator for iOS that allows you to play most games on modern iOS devices."
---

# Play GameCube & Wii Games with DolphiniOS!

DolphiniOS is a GameCube and Wii emulator for iOS that allows you to play most games on modern iOS devices. This guide will walk you through the installation and setup process.

## Requirements

- An iOS device with an A9 chip or higher (iPhone 6s and newer, iPad 5th generation and newer)
- iOS version 14.0 or higher
- A signing certificate (like DxSign)
- A signing app (Feather, ESign, etc.)
- GameCube or Wii game files in supported formats (not provided in this guide)

> **Note**: Devices with at least 4GB of RAM (such as the iPhone 11) are recommended for optimal performance.

> **Note**: You should already have a signing app installed. Please go to our other guides and install one if you haven't already.

> **Warning**: Devices with an A8 or A8X chip and older cannot run DolphiniOS due to missing GPU features.

## Download the DolphiniOS .ipa

Download the latest release of DolphiniOS from the releases page on their Git below:

```
https://github.com/oatmealdome/DolphiniOS/releases
```

## Install using Feather

> **Warning**: You must have your Debug Certificate imported into Feather! If not, you will be unable to enable JIT.
> Please import your JIT certificate if you haven't already, you can download it from https://dxsign.cc/manage

Import the app in the library section by tapping import, and then tapping on the file in your recent files.

![Import](/images/dolphinios/import.gif)

After importing it should appear in your library as normal.

Tap on the app, tap sign, and then after it completes signing, tap on it again, and tap install.

After installing you should see DolphiniOS on your home screen!

BUT WAIT. You still need a method of enabling JIT! For this guide we will be setting up StikDebug.

## Setting up StikDebug

StikDebug is an app that allows you to enable JIT without even needing a separate server or PC to connect to first.

### To use StikDebug you will need the following:

- Access to a Windows PC or Mac (This is only needed for SETUP, and will not be needed after)
- On said PC you will need to download Jitterbug Pair, available [here](https://github.com/osy/Jitterbug/releases/)
- Download StikDebug from the App Store: [here](https://apps.apple.com/us/app/stikdebug/id6744045754)

### Setup

#### For Windows

1. Extract Jitterbugpair-win64.zip.
2. Set a passcode for your device if you haven't already. Ensure the device is connected via cable and unlocked.
3. Open your device to the homescreen.
4. In File Explorer, locate jitterbugpair.exe and run it by double-clicking or right-clicking and selecting "Open".
5. JitterbugPair will generate a pairing file in the same folder. This file will have the extension .mobiledevicepairing.
6. Transfer the pairing file to your iOS device using iCloud Drive, email, or any other method.

#### For macOS

1. Extract Jitterbugpair-macos.zip.
2. Set a passcode for your device if you haven't already. Ensure the device is connected via cable and unlocked.
3. Open your device to the homescreen.
4. Execute JitterBugPair by double-clicking or right-clicking and selecting "Open".
5. JitterBugPair will generate a pairing file with the extension .mobiledevicepairing.
6. Transfer the pairing file to your iOS device using iCloud Drive, email, or any other method.

> **Warning**: Please do NOT transfer the file using Google Drive! Google Drive does something mysterious to the properties file, that makes it unable to be used! (This goes for gmail as well)
>
> If you update your device, this file will become invalid, and you will need to redo these steps.

### Installing StikDebug

Just download it from the App Store, link is above.

### Enabling JIT with StikDebug

Once you've completed all the steps above, all you need to do is the following:

1. Open DolphiniOS in the background
2. Open StikDebug, and import the pairing file we got from JitterBug Pair earlier (If you sent it to yourself in a Zip, Unzip it in the files app)
3. Tap Connect, and tap DolphiniOS

## Importing Games

1. Place your game files in a folder you can access via the Files app.
2. Open DolphiniOS and use the import feature or point the emulator to the folder containing your games.

> **Note**: We will NOT give you websites or links to obtain GameCube or Wii rom files. You are on your own in obtaining them.

### You've now got JIT activated, and can play any GameCube or Wii games you want once you import the ROMs!

