# nex1-instructions

NEX 1.0 页面扩展开发手册，基于 VitePress 构建的文档站。

覆盖 NEX 1.0 页面扩展开发的全流程说明：概述、前提条件、环境准备、配置及管理扩展代码
（熟悉工具界面、创建扩展代码、管理扩展代码），以及常见问题；同时保留「原 RPA 部分」
（RPA 页面扩展开发手册）作为历史参考。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
npm run docs:preview
```

## 目录结构

```
docs/
├── index.md                        # 首页
├── .vitepress/
│   └── config.mts                  # 站点配置（导航、侧边栏）
└── v1/                             # NEX 1.0 页面扩展开发手册内容
    ├── newNex10Dev_overview.md     # 概述
    ├── newNex10Dev_preconditions.md # 前提条件
    ├── newNex10Dev_environmentPreparation.md # 环境准备
    ├── newNex10Dev_configAndManagementExtensionCode.md # 配置及管理扩展代码
    ├── newNex10Dev_familiarizeToolInterface.md # 熟悉工具界面
    ├── newNex10Dev_createExtensionCode*.md # 创建扩展代码（网页端/移动端）
    ├── newNex10Dev_manageExtensionCode*.md # 管理扩展代码
    ├── newNex10Dev_faq.md          # 常见问题
    ├── images/                     # 主手册图片
    └── RPA页面扩展开发手册/          # 原 RPA 部分
        ├── *.md                    # RPA 扩展开发手册章节
        └── graphics/               # RPA 手册图片
```

## 内容来源

文档内容由 DITA 源文档《新版NEX1.0页面扩展开发手册》转换而来：

- `newNex10pageExtensionDevelopmentManual.ditamap`（主手册目录结构）
- `concepts/*.dita`、`tasks/*.dita`（主手册主题内容）
- `images/*.png`、`graphics/*.png`（主手册插图）
- `RPA页面扩展开发手册/销售易CRM_PaaS 平台_NEX页面扩展开发手册_V2108.01.ditamap`（RPA 手册目录结构）
- `RPA页面扩展开发手册/concepts/*.dita`、`tasks/*.dita`（RPA 手册主题内容）
- `RPA页面扩展开发手册/graphics/*.png`（RPA 手册插图）

重新生成文档：

```bash
python3 convert_dita.py
```
