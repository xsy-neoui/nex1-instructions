---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: NEX 1.0 页面扩展开发手册
  tagline: 基于 Neo Extension DevTools 开发插件，以低代码方式扩展销售易系统中的标准页面
  actions:
    - theme: brand
      text: 开始阅读
      link: /v1/入门/概述
    - theme: alt
      text: 环境准备
      link: /v1/入门/环境准备
features:
  - title: 概述
    details: 页面扩展是什么、支持的操作系统与页面类型
    link: /v1/入门/概述
  - title: 前提条件
    details: 开发前的环境要求、License 与功能权限、Neo 表单开通说明
    link: /v1/入门/前提条件
  - title: 环境准备
    details: 下载、安装新版 NEX 开发插件（Neo Extension DevTools）
    link: /v1/入门/环境准备
  - title: 配置及管理扩展代码
    details: 熟悉工具界面、创建网页端/移动端扩展代码、编辑/版本/禁用/删除等管理操作
    link: /v1/扩展代码管理/配置及管理扩展代码
  - title: 常见问题
    details: 发布不生效、子表批量新增等常见问题与原因
    link: /v1/常见问题/常见问题
  - title: RPA 页面扩展开发手册
    details: 原 RPA 部分（旧版）扩展开发说明，作为历史参考
    link: /v1/RPA页面扩展开发手册/第一章_RPA扩展开发简介/第一章_nex_扩展开发简介
---

## NEX 1.0 是什么

NEX 1.0 是销售易提供的前端页面扩展（二次开发）机制。通过新版 NEX 开发插件
（Neo Extension DevTools），开发者以低代码的方式扩展销售易系统中的标准页面，
在不改动产品代码的前提下，通过额外代码修改现有页面的展示样式、交互方式或页面行为。

例如，将新建数据页面的某个字段更改为只读状态：

```javascript
(function() {
  return {
    utilScope: function(ctx) {
      return {}
    },
    entityScope: [{
      "name": "suppliers__c.form",
      "view": function(ctx, props) {
        return {
          view: {
            "type": "EntityForm",
            "controls": [{
              "apiKey": "level__c",
              "disabled": true
            }]
          }
        }
      }
    }],
    layoutScope: []
  }
})()
```

要点：扩展代码本质是一个 **返回配置对象的函数**。运行时执行它，把返回的对象合并进页面 Schema。
所以 NEX 1.0 的能力边界 =「哪些属性允许被扩展」+「utilScope / entityScope / layoutScope 提供了哪些 API」。

## 阅读顺序

| # | 文档 | 内容 |
|---|------|------|
| 1 | [概述](/v1/入门/概述) | 页面扩展是什么、支持的操作系统与页面类型 |
| 2 | [前提条件](/v1/入门/前提条件) | 开发前的环境要求、功能权限 |
| 3 | [环境准备](/v1/入门/环境准备) | 下载、安装新版 NEX 开发插件 |
| 4 | [配置及管理扩展代码](/v1/扩展代码管理/配置及管理扩展代码) | 熟悉工具界面、创建与管理扩展代码 |
| 5 | [常见问题](/v1/常见问题/常见问题) | FAQ |

> 关于扩展代码的编写方法（代码结构、扩展工具函数、扩展示例）的详细介绍，请参考
> [Neo 扩展开发文档](https://ui.neocrm.com/web/#/extension)。

> 目前已不建议使用 RPA 进行页面扩展开发。原 RPA 部分（旧版）说明见
> [RPA 页面扩展开发手册](/v1/RPA页面扩展开发手册/第一章_RPA扩展开发简介/第一章_nex_扩展开发简介)。
