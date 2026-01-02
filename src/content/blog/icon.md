---
title: ICON
description: "如何自定义图标"
pubDate: 2025-12-30
lastModDate: ''
ogImage: true
toc: true
share: true
giscus: true
search: true
---


https://icones.js.org/

## 注意更新后需要重启程序以获得新图标

---

这是一个空白模板，用来测试用的在 `astro-antfustyle-theme` 模板（以及它继承的 Antfu 风格）中，图标系统通常是基于 **Iconify** 引擎的。这意味着你拥有**几乎无限**的图标选择，而不需要手动下载任何图片。

这个模板通常集成了一个非常强大的插件：**[UnoCSS](https://unocss.dev/)**，配合其图标预设（Preset Icons）。

### 1. 你可以使用哪些图标集？

你可以使用 [Icones.js.org](https://icones.js.org/) 网站上列出的**所有图标库**（总计超过 20 万个图标）。

最常用的几个库包括：

* **Carbon**: `i-carbon-*` (Antfu 本人最喜欢的风格，极简线条)
* **Lucide**: `i-lucide-*` (圆润、现代)
* **Material Design Icons**: `i-mdi-*` (谷歌设计风格)
* **Logos**: `i-logos-*` (各大科技公司的彩色 Logo)
* **Ri (Remix Icon)**: `i-ri-*`

---

### 2. 如何在代码中使用？

在 UnoCSS 的支持下，你只需要按照 `i-<图标库名>-<图标名>` 的类名格式书写，它就会自动按需加载。

#### 在 `.astro` 或 `.vue` 组件中使用：

```html
<div class="i-carbon-notebook" />

<button class="i-lucide-sun" />

<span class="i-logos-astro text-2xl" />

```

---

### 3. 如何查找图标？

1. 访问 **[Icônes](https://icones.js.org/)**。
2. 在搜索框输入关键词（比如 `github`, `mail`, `folder`）。
3. 点击你喜欢的图标，在右侧选择 **UnoCSS** 选项卡。
4. 直接复制那个类名（例如 `i-ri:github-line`）用到你的代码里。

---

### 4. 关键配置文件

如果你发现图标不显示，或者想全局调整图标大小，可以查看项目根目录下的 `uno.config.ts`（或 `unocss.config.ts`）。

里面通常有这样一段配置：

```typescript
// uno.config.ts
presetIcons({
  scale: 1.2, // 全局缩放
  warn: true,  // 如果图标名写错了，控制台会报错
})

```

### 5. 关于你之前的 `test` 分类建议

既然你想要做一个特殊的 `test` 路径视图，你可以给这个路径配一个专属图标：

* **路径**：`/test`
* **推荐图标**：`i-carbon-test-tool` 或 `i-ri-test-tube-line`

**特别注意**：因为 UnoCSS 是静态扫描类名的，如果你要在代码里**动态**生成图标名（例如从数据里读取图标名），你需要把这些可能的图标名写在 `uno.config.ts` 的 `safelist` 属性里，否则它们不会被打包。

你要不要试着在你新创建的 `test` 页面里加一个图标看看效果？