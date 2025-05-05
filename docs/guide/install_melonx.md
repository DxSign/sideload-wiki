---
title: "Play Switch Games with MeloNX!"
description: "MeloNX is a switch emulator for iOS that allows you to play most Switch 1 games on modern iOS devices."
---

# Play Switch Games with MeloNX!

MeloNX is a Nintendo Switch emulator for iOS that allows you to play most Switch games on modern iOS devices. This guide will walk you through the installation and setup process.

## Requirements

- An iOS device with an A16 chip or higher (recommended for optimal performance)
- A signing certificate (like DxSign)
- A signing app (Feather, ESign, etc.)
- Nintendo Switch firmware and keys (not provided in this guide)

> **Note**: This guide is also available as a YouTube video!
> https://youtu.be/z4fA8fdHZqA

> **Note**: You should already have a signing app installed. Please go to our other guides and install one if you haven't already.

> **Warning**: It is highly recommended you have a device with an A16 chip or higher. If you don't know what chip your device has, refer to appleDB.
>
> It is crucial to have a processor fast enough to handle intensive emulation like Nintendo Switch, as otherwise you may experience jarring slowdowns.
>
> As of right now MeloNX has multiple bugs associated with importing Firmware, Keys, and Games. A solution is shown at the end of this guide.

## Download the MeloNX .ipa

Download the latest release of MeloNX from the releases page on their Git below:

```
https://git.743378673.xyz/MeloNX/MeloNX/releases/
```

## Install using Feather

> **Warning**: You must have your Debug Certificate imported into Feather! If not, you will be unable to enable JIT.
> Please import your JIT certificate if you haven't already, you can download it from https://dxsign.cc/manage

Import that app in the library section by tapping import, and then tapping on the file in your recent files.

![Import](/images/melonx/import.gif)

After importing it should appear in your library as normal.

Tap on the app, tap sign, and then after it completes signing, tap on it again, and tap install.

After installing you should see MeloNX on your home screen!

BUT WAIT. You still need a method of enabling JIT! For this guide we will be setting up StikJIT.

## Setting up StikDebug

StikJIT is an app that allows you to enable JIT without even needing a separate server or PC to connect to first.

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

1. Open MeloNX in the background
2. Open StikDebug, and import the pairing file we got from JitterBug Pair earlier (If you sent it to yourself in a Zip, Unzip it in the files app)
3. Tap Connect, and tap MeloNX.

## Get around the bugs

To get around the current bugs with MeloNX, first you'll need to do the following:

1. Find your prod.keys and title.keys file, then move them to the "System" folder in the MeloNX folder on your device. The MeloNX folder should be in your On My iPhone/iPad folder.
2. Download [this](https://drive.google.com/file/d/1eF_OMuHxMBdqf5X5lMVyc24ds9YbOo3D/view?usp=sharing) file from Google Drive.
3. Extract it, and then in your files app move the extracted folder to the MeloNX folder as well, and tap replace when it asks you to.
4. Finally, if you are going to import any games, simply just move them into the ROMs folder within the MeloNX folder instead of importing them through the app. There is no say at the moment when these bugs will be fixed, but when they are, you will be able to import games through the app directly.

### You've now got JIT activated, and can play any Switch games you want once you import the ROMs!

> **Note**: We will NOT give you websites or links to obtain Nintendo Switch rom files. You are on your own in obtaining them.
