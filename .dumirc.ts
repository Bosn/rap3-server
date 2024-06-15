import { defineConfig } from "dumi";

export default defineConfig({
  outputPath: "docs-dist",
  base: "/",
  publicPath: "/",
  exportStatic: {},
  headScripts: [`
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?fb5d240c17f2d907f8b5184843370757";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
  `],
  extraBabelPlugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
    ],
  ],
  themeConfig: {
    name: "RAP",
    logo: "/favicon.png",
    navs: {
      "zh-CN": [
        { title: "指南", link: "/zh-CN/guide" },
        { title: "Open API", link: "/zh-CN/open" },
        { title: "GitHub", link: "https://github.com/infra-fe/rap-client" },
        {
          title: "视频教程",
          link: "https://www.bilibili.com/video/BV1s3411H7fr/",
        },
      ],
      "en-US": [
        { title: "Guide", link: "/guide" },
        { title: "Generate Code", link: "/code" },
        { title: "Open API", link: "/open" },
        { title: "GitHub", link: "https://github.com/infra-fe/rap-client" },
        {
          title: "Tutorial",
          link: "https://www.bilibili.com/video/BV1s3411H7fr/",
        },
      ],
    },
    socialLinks: {
      github: "https://github.com/bosn/rap3-server",
    },
  },
  locales: [
    { id: "en-US", name: "English" },
    { id: "zh-CN", name: "中文" },
  ],
  manifest: {},
  hash: true,
  resolve: {
    docDirs: ["docs"],
    atomDirs: [{ type: "component", dir: "src" }],
    codeBlockMode: "passive",
  },
  links: [
    {
      rel: "stylesheet",
      href:
        "https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css",
    },
    { rel: "stylesheet", href: "/style.css" },
  ],
  scripts: [],
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
});
