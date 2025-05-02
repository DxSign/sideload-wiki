import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "sideload.wiki",
  description: "Welcome to sideload.wiki!",

  host: "https://sideload.wiki",

  theme: defaultTheme({
    hostname: "https://sideload.wiki",
    logo: "/logo.webp",
    colorMode: "dark",
    colorModeSwitch: false,
    navbar: ["/", "/guide/", "/faq/"],
    repo: "https://github.com/DxSign/sideload-wiki",
    sidebar: {
      "/guide/": [
        {
          text: "Guides",
          // prefix will be prepended to relative paths
          children: [
            "feather.md",
            "esign.md",
            "websign.md",
            "enable-developer-mode.md",
            "install_melonx.md",
          ],
        },
      ],
      "/faq/": [
        {
          text: "Frequently Asked Questions",
          children: ["dxsign.md", "general.md"],
        },
      ],
    },
  }),

  bundler: viteBundler(),
});
