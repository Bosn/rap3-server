import { defineConfig } from "dumi";

export default defineConfig({
  outputPath: "docs-dist",
  base: "rap-client",
  publicPath: "/rap-client/",
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
    // sidebar: {
    //   "/": [
    //     {
    //       title: "Home",
    //       link: "index",
    //       children: [],
    //     },
    //   ],
    //   "/zh-CN": [
    //     {
    //       title: "首页",
    //       link: "index",
    //       children: [],
    //     },
    //   ],
    //   "/guide": [
    //     {
    //       title: "First View",
    //       link: "/guide",
    //       children: [],
    //     },
    //     {
    //       title: "Getting started",
    //       link: "/guide/start",
    //       children: [],
    //     },
    //     {
    //       title: "Project",
    //       link: '',
    //       children: [
    //         {
    //           title: "Organization",
    //           link: "/guide/project/organization",
    //         },
    //         {
    //           title: "Repository",
    //           link: "/guide/project/repository",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Interface",
    //       link: '',
    //       children: [
    //         {
    //           title: "Module",
    //           link: "/guide/interface/module",
    //         },
    //         {
    //           title: "Basic settings",
    //           link: "/guide/interface/basic",
    //         },
    //         {
    //           title: "Validation",
    //           link: "/guide/interface/validation",
    //         },
    //         {
    //           title: "History",
    //           link: "/guide/interface/history",
    //         },
    //         {
    //           title: "Generate Code",
    //           link: "/guide/interface/code",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Mock",
    //       link: '',
    //       children: [
    //         {
    //           title: "Basic settings",
    //           link: "/guide/mock/basic",
    //         },
    //         {
    //           title: "Scene setting",
    //           link: "/guide/mock/scene",
    //         },
    //         {
    //           title: "Rules",
    //           link: "/guide/mock/rule",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Import",
    //       link: '',
    //       children: [
    //         {
    //           title: "Rap import",
    //           link: "/guide/import/rap",
    //         },
    //         {
    //           title: "Swagger/OpenApi import",
    //           link: "/guide/import/swagger",
    //         },
    //         {
    //           title: "Yapi import",
    //           link: "/guide/import/yapi",
    //         },
    //         {
    //           title: "Protobuf import",
    //           link: "/guide/import/protobuf",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Export",
    //       link: "/guide/export",
    //       children: [],
    //     },
    //     {
    //       title: "FAQ",
    //       link: "/guide/qa",
    //       children: [],
    //     },
    //   ],
    //   "/code": [
    //     {
    //       title: "Rapper v3",
    //       link: "/code",
    //       children: [],
    //     },
    //     {
    //       title: "Pure TS Models",
    //       link: "/code/ts",
    //       children: [],
    //     },
    //     {
    //       title: "Http Request",
    //       link: "/code/http",
    //       children: [],
    //     },

    //     {
    //       title: "For React",
    //       link: "/code/react",
    //       children: [
    //         {
    //           title: "React Hooks",
    //           link: "/code/react",
    //         },
    //         {
    //           title: "@rapper3/react-query",
    //           link: "/code/react/react-query",
    //         },
    //         {
    //           title: "@rapper3/react-query3",
    //           link: "/code/react/react-query3",
    //         },
    //         {
    //           title: "@rapper3/react-swr",
    //           link: "/code/react/react-swr",
    //         },
    //         {
    //           title: "@rapper3/react-redux",
    //           link: "/code/react/redux",
    //         },
    //         {
    //           title: "@rapper3/react-redux-toolkit",
    //           link: "/code/react/redux-toolkit",
    //         },
    //       ],
    //     },
    //     {
    //       title: "For Vue",
    //       link: "/code/vue",
    //       children: [
    //         {
    //           title: "@rapper3/vue-query",
    //           link: "/code/vue/vue-query",
    //         },
    //         {
    //           title: "@rapper3/vue-swr",
    //           link: "/code/vue/vue-swr",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Nest DTO",
    //       link: "/code/dto",
    //       children: [],
    //     },
    //     {
    //       title: "Migration v2 -> v3",
    //       link: "/code/migration",
    //       children: [],
    //     },
    //   ],
    //   "/open": [
    //     {
    //       title: "Rap OpenAPI",
    //       link: '',
    //       children: [
    //         {
    //           title: "Update interfaces data",
    //           link: "/open/upload",
    //         },
    //         {
    //           title: "Search repository lists",
    //           link: "/open/repos",
    //         },
    //         {
    //           title: "Search organization lists",
    //           link: "/open/organizations",
    //         },
    //         {
    //           title: "Search repository details",
    //           link: "/open/detail",
    //         },
    //         {
    //           title: "Search interface details",
    //           link: "/open/interface",
    //         },
    //         {
    //           title: "Search repository format data",
    //           link: "/open/data",
    //         },
    //       ],
    //     },
    //   ],
    //   "/zh-CN/guide": [
    //     {
    //       title: "初识RAP",
    //       link: "/zh-CN/guide",
    //       children: [],
    //     },
    //     {
    //       title: "快速上手",
    //       link: "/zh-CN/guide/start",
    //       children: [],
    //     },
    //     {
    //       title: "项目管理",
    //       link: '',
    //       children: [
    //         {
    //           title: "团队操作",
    //           link: "/zh-CN/guide/project/organization",
    //         },
    //         {
    //           title: "仓库操作",
    //           link: "/zh-CN/guide/project/repository",
    //         },
    //       ],
    //     },
    //     {
    //       title: "接口管理",
    //       link: '',
    //       children: [
    //         {
    //           title: "模块管理",
    //           link: "/zh-CN/guide/interface/module",
    //         },
    //         {
    //           title: "基本设置",
    //           link: "/zh-CN/guide/interface/basic",
    //         },
    //         {
    //           title: "信息校验",
    //           link: "/zh-CN/guide/interface/validation",
    //         },
    //         {
    //           title: "查看历史",
    //           link: "/zh-CN/guide/interface/history",
    //         },
    //         {
    //           title: "生成代码",
    //           link: "/zh-CN/guide/interface/code",
    //         },
    //       ],
    //     },
    //     {
    //       title: "数据Mock",
    //       link: '',
    //       children: [
    //         {
    //           title: "基础设置",
    //           link: "/zh-CN/guide/mock/basic",
    //         },
    //         {
    //           title: "场景设置",
    //           link: "/zh-CN/guide/mock/scene",
    //         },
    //         {
    //           title: "匹配规则",
    //           link: "/zh-CN/guide/mock/rule",
    //         },
    //       ],
    //     },
    //     {
    //       title: "数据导入",
    //       link: '',
    //       children: [
    //         {
    //           title: "Rap导入",
    //           link: "/zh-CN/guide/import/rap",
    //         },
    //         {
    //           title: "Swagger/OpenApi导入",
    //           link: "/zh-CN/guide/import/swagger",
    //         },
    //         {
    //           title: "Yapi导入",
    //           link: "/zh-CN/guide/import/yapi",
    //         },
    //         {
    //           title: "Protobuf导入",
    //           link: "/zh-CN/guide/import/protobuf",
    //         },
    //       ],
    //     },
    //     {
    //       title: "数据导出",
    //       link: "/zh-CN/guide/export",
    //       children: [],
    //     },
    //     {
    //       title: "常见问题解答",
    //       link: "/zh-CN/guide/qa",
    //       children: [],
    //     },
    //   ],
    //   "/zh-CN/open": [
    //     {
    //       title: "Rap开放API",
    //       link: '',
    //       children: [
    //         {
    //           title: "更新仓库接口信息",
    //           link: "/zh-CN/open/upload",
    //         },
    //         {
    //           title: "查询仓库列表",
    //           link: "/zh-CN/open/repos",
    //         },
    //         {
    //           title: "查询团队列表",
    //           link: "/zh-CN/open/organizations",
    //         },
    //         {
    //           title: "查询仓库详细信息",
    //           link: "/zh-CN/open/detail",
    //         },
    //         {
    //           title: "查询接口信息",
    //           link: "/zh-CN/open/interface",
    //         },
    //         {
    //           title: "查询仓库指定格式数据",
    //           link: "/zh-CN/open/data",
    //         },
    //       ],
    //     },
    //   ],
    // },
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
