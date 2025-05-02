---
title: Sign Apps with Feather
description: Feather is a modern open-source alternative for signing apps, allowing you to add repositories of many .ipa files at once and install with ease.
---

# Sign Apps with Feather

##

Feather is a modern open-source alternative for signing apps, allowing you to add repositories of many .ipa files at once and install with ease.

> **Note**: For iOS 17.7+, you need to enable "Online Signing Mode" which we will explain in the final section.

> **Note**: For DxSign certificate holders, we've streamlined the installation process with a one-click solution. Simply navigate to https://dxsign.cc/manage, select "Install," then choose "Feather" to begin the installation. Please note that you will still need to enable the online signing mode as detailed in the final section of this guide.
>
> If you are NOT using a dxsign certificate, you may continue with the tutorial.

## Download the Feather .ipa

Download the latest release of feather from the releases page on their GitHub below.

```
https://github.com/khcrysalis/feather/releases/
```

> **Warning**: Please insure to get the .ipa version and NOT the .tipa version, as that is for TrollStore and will NOT work with this guide.

## Installing Feather

To install Feather on your iOS/iPadOS device you can use KravaSigner, a website that allows you to import your certificate for the purpose of installing .ipa files. Please note dxsign is NOT affiliated with KravaSign in any way.

To start go to this link:

```
https://sign.kravasign.com/
```

Then click choose file in the ipa section and select the Feather .ipa you downloaded before.

![Choose File](/images/feather/choosefile.png)

After that, import your mobile provision and .p12 file you obtained from dxsign.cc, and type in the password given within the file "password" in the folder you downloaded from dxsign. Common passwords are 1234 and abcdefg, but to be sure open your files and tap on the file, where it will then show you your password.

After importing that, click upload and sign.

![Upload and Sign](/images/feather/uploadandsign.png)

Then when prompted click sign ipa, and then click Install IPA.

![Install](/images/feather/install.png)

After that click install when prompted again, and move on to the next step after it completes installing and appears on your home screen.

## Import your certificate

When you enter Feather, you'll be greeted by this screen, click continue.

![Feather Home Screen](/images/feather/home_screen.jpeg)

Go to **Settings**, select **Add Certificate** under signing, and upload both your certificate (.p12), the .mobileprovision file and enter the password, which can be downloaded from our dashboard or any other signing provider you use.

![Feather Settings Screen](/images/feather/settings_screen.jpeg)

![Import Certificate](/images/feather/import_certificate.jpeg)
![Actually Import Certificate](/images/feather/actually_import_certificate.jpeg)

That's it! You can now return to the main Settings tab and see the status of your certificate under **Signing**.

![Feather Settings Screen](/images/feather/settings_screen_with_cert.jpeg)

## Sign your IPA

Go to the Library tab, then select **Import**. Upload all the IPA files you want to sign from either local files or from a URL.

![Import IPAs](/images/feather/import.jpeg)

You should now see your app under Downloaded Apps. Click on the App you want to sign, then select **Sign "App Name"**.

![Select Signature](/images/feather/select_signature.jpeg)

![Actually Signature](/images/feather/signature.jpeg)

The signing progress may take some time depending on the size of your IPA files, so please wait for it to complete.

And you're all set! If your device is running iOS 17.6 or below, simply select **Install "App Name"** confirm the installation, and the app should appear on your home screen. If not, please follow the steps below.

## Online Signing Mode

> **Warning**: This step is NOT required for those running iOS 17.6 or lower. However, it is required for those running iOS 17 and ABOVE.

Return to the Settings tab, under Signing Server you should see a toggle for **Online Install Method**. Turn it on and try sign / install your IPA

![Online Signing Mode](/images/feather/online-signing.jpeg)
