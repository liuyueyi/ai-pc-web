<template>
  <div class="app">
    <header class="header">
      <nav class="nav">
        <div class="logo">APP SHOWCASE</div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">主页</router-link>
          <router-link to="/about" class="nav-link">关于我</router-link>
        </div>
        <div class="nav-right">
          <button class="search-btn">
            <i class="search-icon"></i>
          </button>
          <div class="avatar">
            <img src="https://hhui.top/tutorial/logo.svg" alt="User" class="avatar-img" />
          </div>
        </div>
      </nav>
    </header>
    
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} APP Showcase. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No additional setup needed for App.vue
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

body {
  background-color: #f5f5f5;
  color: #333;
}

.app {
  width: 98vw;
  padding-left: 1vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 2rem;
  margin-left: -40rem;
}

.nav-link {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover, .router-link-active {
  color: #333;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-content {
  flex: 1;
}

.footer {
  background-color: #f8f8f8;
  padding: 1.5rem;
  text-align: center;
  color: #666;
  margin-top: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>