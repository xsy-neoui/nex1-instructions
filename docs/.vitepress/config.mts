import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
const base = '/'

export default defineConfig({
  base,
  outDir: '../html',
  assetsDir: './assets',
  title: 'NEX 1.0 页面扩展开发手册',
  description: 'NEX 1.0 页面扩展开发手册：基于 Neo Extension DevTools 的页面扩展开发指南',
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      {
      text: '首页',
      link: '/'
    },
    {
      text: '概述',
      link: '/v1/入门/概述'
    },
    {
      text: '前提条件',
      link: '/v1/入门/前提条件'
    },
    {
      text: '环境准备',
      link: '/v1/入门/环境准备'
    },
    {
      text: '配置及管理扩展代码',
      items: [
        {
      text: '熟悉工具界面',
      link: '/v1/扩展代码管理/熟悉工具界面'
    },
        {
      text: '创建扩展代码',
      link: '/v1/扩展代码管理/创建扩展代码'
    },
        {
      text: '管理扩展代码',
      link: '/v1/扩展代码管理/管理扩展代码'
    },
      ]
    },
    {
      text: '常见问题',
      link: '/v1/常见问题/常见问题'
    },
    {
      text: 'RPA 页面扩展开发手册',
      items: [
        {
      text: 'RPA 扩展开发简介',
      items: [
        {
      text: '概述',
      link: '/v1/RPA页面扩展开发手册/第一章_RPA扩展开发简介/概述'
    },
        {
      text: '快速了解 RPA 扩展开发',
      link: '/v1/RPA页面扩展开发手册/第一章_RPA扩展开发简介/快速了解_nex_扩展开发'
    },
      ]
    },
        {
      text: 'RPA 扩展开发方法说明',
      items: [
        {
      text: '前提条件',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/前提条件'
    },
        {
      text: '开发插件说明',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/开发插件说明'
    },
        {
      text: '开发步骤说明',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/开发步骤说明'
    },
      ]
    },
        {
      text: 'RPA 代码编写说明',
      items: [
        {
      text: 'SDK 接口说明',
      link: '/v1/RPA页面扩展开发手册/第三章_RPA代码编写说明/sdk_接口说明'
    },
        {
      text: 'JS 代码编写时的建议',
      link: '/v1/RPA页面扩展开发手册/第三章_RPA代码编写说明/js_代码编写时的建议'
    },
      ]
    },
        {
      text: 'RPA 扩展开发相关支持说明',
      items: [
        {
      text: '支持扩展的页面类型',
      link: '/v1/RPA页面扩展开发手册/第四章_RPA扩展开发相关支持说明/支持扩展的页面类型'
    },
        {
      text: 'JS 开发支持',
      link: '/v1/RPA页面扩展开发手册/第四章_RPA扩展开发相关支持说明/js_开发支持'
    },
      ]
    },
        {
      text: 'RPA 扩展开发示例',
      link: '/v1/RPA页面扩展开发手册/RPA扩展开发示例'
    },
      ]
    },
    ],
    sidebar: [
      {
      text: 'NEX 1.0 页面扩展开发手册',
      items: [
        {
      text: '概述',
      link: '/v1/入门/概述'
    },
        {
      text: '前提条件',
      link: '/v1/入门/前提条件'
    },
        {
      text: '环境准备',
      link: '/v1/入门/环境准备'
    },
        {
      text: '配置及管理扩展代码',
      link: '/v1/扩展代码管理/配置及管理扩展代码',
      collapsed: false,
      items: [
        {
      text: '熟悉工具界面',
      link: '/v1/扩展代码管理/熟悉工具界面'
    },
        {
      text: '创建扩展代码',
      link: '/v1/扩展代码管理/创建扩展代码',
      collapsed: true,
      items: [
        {
      text: '网页端创建步骤',
      link: '/v1/扩展代码管理/网页端/网页端创建步骤'
    },
        {
      text: '移动端创建步骤',
      link: '/v1/扩展代码管理/移动端/移动端创建步骤'
    },
      ]
    },
        {
      text: '管理扩展代码',
      link: '/v1/扩展代码管理/管理扩展代码',
      collapsed: true,
      items: [
        {
      text: '查看扩展代码列表',
      link: '/v1/扩展代码管理/查看扩展代码列表'
    },
        {
      text: '编辑扩展代码',
      link: '/v1/扩展代码管理/编辑扩展代码'
    },
        {
      text: '创建新版本',
      link: '/v1/扩展代码管理/创建新版本'
    },
        {
      text: '禁用扩展代码',
      link: '/v1/扩展代码管理/禁用扩展代码'
    },
        {
      text: '删除扩展代码',
      link: '/v1/扩展代码管理/删除扩展代码'
    },
      ]
    },
      ]
    },
        {
      text: '常见问题',
      link: '/v1/常见问题/常见问题'
    },
      ]
    },
      {
      text: 'RPA 页面扩展开发手册（原 RPA 部分）',
      items: [
        {
      text: 'RPA 扩展开发简介',
      link: '/v1/RPA页面扩展开发手册/第一章_RPA扩展开发简介/第一章_nex_扩展开发简介',
      collapsed: false,
      items: [
        {
      text: '概述',
      link: '/v1/RPA页面扩展开发手册/第一章_RPA扩展开发简介/概述'
    },
        {
      text: '快速了解 RPA 扩展开发',
      link: '/v1/RPA页面扩展开发手册/第一章_RPA扩展开发简介/快速了解_nex_扩展开发',
      collapsed: true,
      items: [
        {
      text: '场景描述',
      link: '/v1/RPA页面扩展开发手册/第一章_RPA扩展开发简介/场景描述'
    },
        {
      text: '扩展开发',
      link: '/v1/RPA页面扩展开发手册/第一章_RPA扩展开发简介/扩展开发'
    },
        {
      text: '效果展示',
      link: '/v1/RPA页面扩展开发手册/第一章_RPA扩展开发简介/效果展示'
    },
      ]
    },
      ]
    },
        {
      text: 'RPA 扩展开发方法说明',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/第二章_nex_扩展开发方法说明',
      collapsed: false,
      items: [
        {
      text: '前提条件',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/前提条件'
    },
        {
      text: '开发插件说明',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/开发插件说明',
      collapsed: true,
      items: [
        {
      text: '在 Chrome 浏览器中安装 DevTools',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/在_chrome_浏览器中安装_devtools'
    },
        {
      text: '在 VS Code 中安装 DevTools',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/在_vs_code_中安装_devtools'
    },
      ]
    },
        {
      text: '开发步骤说明',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/开发步骤说明',
      collapsed: true,
      items: [
        {
      text: '网页端、企业微信端扩展开发步骤',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/网页端/网页端_企业微信端扩展开发步骤'
    },
        {
      text: '移动端扩展开发步骤',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/移动端/移动端扩展开发步骤'
    },
        {
      text: '自定义页面开发步骤',
      link: '/v1/RPA页面扩展开发手册/第二章_RPA扩展开发方法说明/自定义页面/自定义页面开发步骤'
    },
      ]
    },
      ]
    },
        {
      text: 'RPA 代码编写说明',
      link: '/v1/RPA页面扩展开发手册/第三章_RPA代码编写说明/第三章_nex_代码编写说明',
      collapsed: false,
      items: [
        {
      text: 'SDK 接口说明',
      link: '/v1/RPA页面扩展开发手册/第三章_RPA代码编写说明/sdk_接口说明'
    },
        {
      text: 'JS 代码编写时的建议',
      link: '/v1/RPA页面扩展开发手册/第三章_RPA代码编写说明/js_代码编写时的建议',
      collapsed: true,
      items: [
        {
      text: '复制扩展点代码片段',
      link: '/v1/RPA页面扩展开发手册/第三章_RPA代码编写说明/复制扩展点代码片段'
    },
      ]
    },
      ]
    },
        {
      text: 'RPA 扩展开发相关支持说明',
      link: '/v1/RPA页面扩展开发手册/第四章_RPA扩展开发相关支持说明/第四章_nex_扩展开发相关支持说明',
      collapsed: false,
      items: [
        {
      text: '支持扩展的页面类型',
      link: '/v1/RPA页面扩展开发手册/第四章_RPA扩展开发相关支持说明/支持扩展的页面类型'
    },
        {
      text: 'JS 开发支持',
      link: '/v1/RPA页面扩展开发手册/第四章_RPA扩展开发相关支持说明/js_开发支持'
    },
      ]
    },
        {
      text: 'RPA 扩展开发示例',
      link: '/v1/RPA页面扩展开发手册/RPA扩展开发示例'
    },
      ]
    },
    ],
    outline: {
      label: '快速导航',
      level: [2, 3],
    },
  },
})
