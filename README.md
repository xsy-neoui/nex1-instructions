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
    ├── 入门/                        # 功能模块：概述、前提条件、环境准备
    │   ├── 概述.md
    │   ├── 前提条件.md
    │   └── 环境准备.md
    ├── 扩展代码管理/                 # 功能模块：扩展代码的创建与管理
    │   ├── 配置及管理扩展代码.md
    │   ├── 熟悉工具界面.md
    │   ├── 创建扩展代码.md
    │   ├── 网页端/                  # 网页端
    │   │   └── 网页端创建步骤.md
    │   ├── 移动端/                  # 移动端
    │   │   └── 移动端创建步骤.md
    │   ├── 管理扩展代码.md
    │   ├── 查看扩展代码列表.md
    │   ├── 编辑扩展代码.md
    │   ├── 创建新版本.md
    │   ├── 禁用扩展代码.md
    │   └── 删除扩展代码.md
    ├── 常见问题/
    │   └── 常见问题.md
    ├── images/                     # 主手册图片
    └── RPA页面扩展开发手册/          # 原 RPA 部分（按章节分目录）
        ├── 第一章_RPA扩展开发简介/
        ├── 第二章_RPA扩展开发方法说明/  # 含 网页端/移动端/自定义页面 子目录
        ├── 第三章_RPA代码编写说明/
        ├── 第四章_RPA扩展开发相关支持说明/
        ├── RPA扩展开发示例.md
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
