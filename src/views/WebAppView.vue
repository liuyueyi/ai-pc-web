<template>
  <div class="webapp-view">
    <h1 class="title">Web 应用列表</h1>
    <div class="webapp-list">
      <div v-for="app in webapps" :key="app.id" class="webapp-card">
        <img :src="app.logo && app.logo.startsWith('http') ? app.logo : baseUrl + app.logo" :alt="app.name" class="webapp-logo" />
        <div class="webapp-info">
          <h2 class="webapp-name">{{ app.name }}</h2>
          <p class="webapp-desc">{{ app.description }}</p>
          <div class="webapp-links">
            <a v-if="app.previewUrl" :href="app.previewUrl" target="_blank" class="webapp-link">在线体验</a>
            <a v-if="app.googlePlayUrl" :href="app.googlePlayUrl" target="_blank" class="webapp-link">Google Play</a>
            <!-- <span v-else class="webapp-link-disabled">暂无链接</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { apps } from '../data/webApp.js'
import { computed } from 'vue'
// 定义基础URL变量
const baseUrl = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL ;

// 只展示有 logo、name、description 的 app
const webapps = computed(() =>
  apps.filter(app => app.logo && app.name && app.description)
)
</script>

<style scoped>
.webapp-view {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
}
.title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.webapp-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.webapp-card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  transition: box-shadow 0.2s;
}
.webapp-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
.webapp-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background: #f5f5f5;
}
.webapp-info {
  width: 100%;
  text-align: center;
}
.webapp-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.webapp-desc {
  color: #666;
  font-size: 1rem;
  margin-bottom: 1rem;
  min-height: 48px;
}
.webapp-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.webapp-link {
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid #1976d2;
  border-radius: 0.5rem;
  padding: 0.3rem 1rem;
  transition: background 0.2s, color 0.2s;
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