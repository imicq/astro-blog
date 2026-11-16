import rss from '@astrojs/rss';
import { getSortedPosts, slugOf } from '../utils/posts';
import site from '../config/site';

export async function GET(context) {
  const posts = await getSortedPosts();
  return rss({
    title: site.title,
    description: site.subtitle,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/${slugOf(post.id)}.html`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
