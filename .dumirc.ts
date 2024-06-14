import { defineConfig } from "dumi";

export default defineConfig({
  outputPath: "docs-dist",
  base: "rap-doc",
  publicPath: "/rap-doc/",
  exportStatic: {},
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
    logo: "http://rap2.taobao.org/favicon.png",
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
