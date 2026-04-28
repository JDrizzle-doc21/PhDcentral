import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Research Notes — J. Driscoll",
    pageTitleSuffix: " | PhD Knowledge Base",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-AU",
    baseUrl: "jdrizzle-doc21.github.io/PhDcentral/notes",
    ignorePatterns: [
      "private",
      "templates",
      "_templates",
      ".obsidian",
      "03-Progress-Logs",
      "**/*.excalidraw.md"
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f9fa",
          lightgray: "#e8edf2",
          gray: "#7a8b9a",
          darkgray: "#2c3e50",
          dark: "#1a2332",
          secondary: "#0f7c6e",
          tertiary: "#1a9e8a",
          highlight: "rgba(15, 124, 110, 0.08)",
          textHighlight: "rgba(26, 158, 138, 0.15)",
        },
        darkMode: {
          light: "#0d1117",
          lightgray: "#161b22",
          gray: "#6e7681",
          darkgray: "#c9d1d9",
          dark: "#f0f6fc",
          secondary: "#1a9e8a",
          tertiary: "#0f7c6e",
          highlight: "rgba(26, 158, 138, 0.1)",
          textHighlight: "rgba(26, 158, 138, 0.2)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.ExplicitPublish()],  // Only publishes notes with publish: true
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      // // Plugin.FolderPage(),
      // // Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      // Plugin.NotFoundPage(),
    ],
  },
}

export default config
