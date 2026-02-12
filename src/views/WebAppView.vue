<template>
  <div class="webapp-view">
    <h1 class="title">应用列表</h1>

    <!-- 分类筛选器 -->
    <div class="filter-container">
      <div class="filter-label">按分类筛选：</div>
      <div class="filter-buttons">
        <button :class="['filter-btn', { active: selectedCategory === 'all' }]" @click="selectedCategory = 'all'">
          全部
        </button>
        <button v-for="category in categories" :key="category"
          :class="['filter-btn', { active: selectedCategory === category }]" @click="selectedCategory = category">
          {{ category }}
        </button>
      </div>
    </div>

    <div class="webapp-list">
      <div v-for="app in webapps" :key="app.id" class="webapp-card">
        <!-- 顶部区域：图标和分类标签同行 -->
        <div class="webapp-header">
          <!-- 左侧图标 -->
          <img :src="app.logo && app.logo.startsWith('http')
            ? app.logo
            : baseUrl + app.logo
            " :alt="app.name" class="webapp-logo" />

          <!-- 右侧分类标签 -->
          <div class="category-tag">{{ getAppCategory(app) }}</div>
        </div>

        <!-- 应用信息区域 -->
        <div class="webapp-info">
          <h2 class="webapp-name">{{ app.name }}</h2>
          <p class="webapp-desc">{{ app.description }}</p>

          <!-- 标签区域 -->
          <div class="webapp-tags">
            <span class="tag">{{ getAppTag(app) }}</span>
          </div>

          <!-- 分隔线 -->
          <div class="divider"></div>

          <!-- 链接区域 -->
          <div class="webapp-links">
            <a v-if="app.previewUrl" :href="app.previewUrl" target="_blank" class="webapp-link">在线体验</a>
            <a v-if="app.googlePlayUrl" :href="app.googlePlayUrl" target="_blank" class="webapp-link">Google Play</a>
            <a v-if="app.chromeUrl" :href="app.chromeUrl" target="_blank" class="webapp-link">Chrome Store</a>
            <!-- <span v-else class="webapp-link-disabled">暂无链接</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { apps } from '../data/webApp.js';
import { computed, ref } from 'vue';
// 定义基础URL变量
const baseUrl =
  import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL;

// 筛选状态
const selectedCategory = ref('all');

// 只展示有 logo、name、description 的 app
const allWebapps = computed(() =>
  apps.filter(app => app.logo && app.name && app.description)
);

// 获取所有分类
const categories = computed(() => {
  const categorySet = new Set();
  allWebapps.value.forEach(app => {
    categorySet.add(getAppCategory(app));
  });
  return Array.from(categorySet).sort();
});

// 筛选后的应用列表
const webapps = computed(() => {
  if (selectedCategory.value === 'all') {
    return allWebapps.value;
  }
  return allWebapps.value.filter(app => getAppCategory(app) === selectedCategory.value);
});

// 获取应用分类
const getAppCategory = (app) => {
  if (app.category) {
    return app.category;
  }

  if (app.name.includes('Color') || app.name.includes('拾色')) return '工具类';
  if (app.name.includes('Printo') || app.name.includes('打印')) return '设计类';
  if (app.name.includes('Sound') || app.name.includes('白噪音')) return '生活类';
  if (app.name.includes('线稿') || app.name.includes('像素')) return '创意类';
  if (app.name.includes('MyBatis')) return '开发类';
  return '其他';
};

// 获取应用标签
const getAppTag = (app) => {
  if (app.googlePlayUrl) return '移动端';
  if (app.chromeUrl) return '浏览器扩展';
  if (app.previewUrl) return '在线应用';
  return '网页应用';
};
</script>

<style scoped>
.webapp-view {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem 2rem;
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

/* 分类筛选器样式 */
.filter-container {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
}

.filter-label {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #ddd;
  background: white;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  color: #666;
}

.filter-btn:hover {
  border-color: #1976d2;
  color: #1976d2;
}

.filter-btn.active {
  background: #1976d2;
  border-color: #1976d2;
  color: white;
}

.webapp-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
}

.webapp-card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 350px;
  padding: 1.5rem;
  transition: box-shadow 0.2s;
}

.webapp-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

/* 顶部区域：图标和分类标签同行 */
.webapp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

/* 左侧图标 */
.webapp-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 0.5rem;
  background: #f5f5f5;
}

/* 右侧分类标签 */
.category-tag {
  background: #1976d2;
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-weight: 500;
  flex-shrink: 0;
  margin-left: 1rem;
}

/* 应用信息区域 */
.webapp-info {
  display: flex;
  flex-direction: column;
}

.webapp-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: left;
}

.webapp-desc {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  min-height: 2.3rem;
}

/* 标签区域 */
.webapp-tags {
  margin-bottom: 1rem;
}

.tag {
  display: inline-block;
  background: #e3f2fd;
  color: #1976d2;
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-weight: 500;
}

/* 分隔线 */
.divider {
  height: 1px;
  background: #eee;
  margin: 1rem 0;
}

.webapp-links {
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.webapp-link {
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid #1976d2;
  border-radius: 0.5rem;
  padding: 0.3rem 1rem;
  transition:
    background 0.2s,
    color 0.2s;
  font-size: 0.9rem;
}

.webapp-link:hover {
  background: #1976d2;
  color: #fff;
}

.webapp-link-disabled {
  color: #aaa;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  padding: 0.3rem 1rem;
}
</style>
