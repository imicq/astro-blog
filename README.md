# astro-blog

静态博客（Astro 5），主题风格仿 [hxy.cc](https://hxy.cc/) 的中文个人博客卡片风，部署在腾讯云 EdgeOne **Makers**。

## 功能

- 首页文章卡片列表（摘要 / 作者头像 / 日期 / Twikoo 评论数）、分页
- 文章页：目录（TOC）、分类 / 标签、Twikoo 评论
- 归档（按年份时间线）、分类、标签页
- 碎碎念（说说）时间线页
- 友链页（数据来自 `src/data/links.json`）
- 留言板、关于页（来自 `src/content/pages/about.md`）
- 暗色模式（跟随系统 + 手动切换）、公告栏、RSS、Sitemap
- 全站配置集中在 `src/data/site.json`

## 目录结构

```
src/
├── config/site.ts        # 读取配置（不要直接改，改 site.json）
├── data/site.json        # ★ 站点/主题配置（后台「站点设置」编辑的就是它）
├── data/links.json       # ★ 友链数据（后台「友链管理」编辑）
├── content/posts/        # ★ 文章（Markdown）
├── content/moments/      # ★ 碎碎念（Markdown）
├── content/pages/        # ★ 独立页面（Markdown，文件名即 URL）
├── layouts/components/pages/  # 主题模板
```

## 构建部署（腾讯云 Makers）

- 构建命令：`npm run build`
- 输出目录：`dist`
- 安装命令：`npm install`
- 每次推送到 GitHub 主分支会自动触发构建

部署后记得把 `src/data/site.json` 里的 `siteUrl` 和 `twikooEnvId` 改成实际地址（可在后台「站点设置」中改）。

## 本地开发

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # 产物在 dist/
```

配合后台管理（astro-admin）可全程在线发文，无需本地环境。
