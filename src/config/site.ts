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
  /** 站点图标地址，默认 /favicon.svg */
  favicon?: string;
  /** 顶部导航栏中间展示的站点 logo 图片地址（可选） */
  logo?: string;
  /** 首页每页文章数 */
  perPage?: number;
  /** ICP 备案号（显示为链接，指向工信部备案系统） */
  beianIcp?: string;
  /** 公安备案号（显示为链接，指向公安备案系统） */
  beianPolice?: string;
  /** 友链页「申请友链」说明文字 */
  linksIntro?: string;
  /** 全站评论开关 */
  commentsEnabled?: boolean;
  /** 文章目录开关 */
  tocEnabled?: boolean;
}

export default data as SiteConfig;
