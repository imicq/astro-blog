// ============================================================
// 站点全局配置
// 实际配置内容在 src/data/site.json，后台管理系统的「站点设置」
// 就是编辑该 JSON 文件。这里仅做类型定义与导出。
// ============================================================

import data from '../data/site.json';

export interface SiteConfig {
  siteUrl: string;
  title: string;
  subtitle: string;
  titleSuffix: string;
  author: string;
  avatar: string;
  announcement: string;
  footerText: string;
  accentColor: string;
  colorMode: 'auto' | 'light' | 'dark';
  nav: { text: string; url: string }[];
  twikooEnvId: string;
  social: { text: string; url: string }[];
}

export default data as SiteConfig;
