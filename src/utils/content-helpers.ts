import { getCollection } from 'astro:content';

// 获取所有唯一的分类
export async function getCategories() {
  const posts = await getCollection('article');
  const categories = [...new Set(posts.map(post => post.data.category))];
  return categories.sort();
}

// 获取所有唯一的标签
export async function getTags() {
  const posts = await getCollection('article');
  const tags = [...new Set(posts.flatMap(post => post.data.tags || []))];
  return tags.sort();
}

// 按分类过滤
export async function getPostsByCategory(category: string) {
  const posts = await getCollection('article', ({ data }) => {
    return data.category?.includes(category) && data.draft !== true;
  });
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// 按标签过滤
export async function getPostsByTag(tag: string) {
  const posts = await getCollection('article', ({ data }) => {
    return data.tags?.includes(tag) && data.draft !== true;
  });
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}