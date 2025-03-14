<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="tagline"> 开发 ・ 收集 ・ 分享 </div>
        <h1 class="title">人人都是程序员<br/><h2>用AI实现生成APP，让你的想法不再悬空</h2></h1>
        <!-- <div class="tagline">Discover. Collect. Experience.</div>
        <h1 class="title">Develop Amazing Applications By AI</h1> -->

        <div class="rating">
          <span class="stars">★ 4.5</span>
          <span class="user-rating">Satisfied users</span>
        </div>
        <p class="description">
          Explore exclusive mobile applications and support the developers you love.
        </p>
      </div>
    </section>

    <section class="app-showcase">
      <div class="carousel-container">
        <div class="carousel" ref="carousel">
          <div v-for="(app, index) in apps" :key="index" class="app-card" @mouseenter="showInfo(index)"
            @mouseleave="hideInfo(index)" @click="goToDetail(app.id)">
            <img :src="app.image" :alt="app.name" class="app-image" />
            <div class="app-name" v-show="!app.showInfo">{{ app.name }}</div>
            <div class="app-info" :class="{ 'show': app.showInfo }">
              <div class="app-price">{{ app.price }}</div>
              <div class="app-desc">{{ app.description }}</div>
              <div class="app-auction" v-if="app.auction">
                <div class="auction-text">Auction ends in:</div>
                <div class="auction-timer">
                  <div class="timer-item">
                    <div class="timer-value">{{ app.auction.hours }}</div>
                    <div class="timer-label">Hours</div>
                  </div>
                  <div class="timer-separator">:</div>
                  <div class="timer-item">
                    <div class="timer-value">{{ app.auction.minutes }}</div>
                    <div class="timer-label">Minutes</div>
                  </div>
                  <div class="timer-separator">:</div>
                  <div class="timer-item">
                    <div class="timer-value">{{ app.auction.seconds }}</div>
                    <div class="timer-label">Seconds</div>
                  </div>
                </div>
              </div>
              <div class="app-creator">
                <img :src="app.creator.avatar" alt="Creator" class="creator-avatar" />
                <div class="creator-info">
                  <div class="creator-name">{{ app.creator.name }}</div>
                  <div class="creator-handle">{{ app.creator.handle }}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- <section class="categories">
      <div class="category-tabs">
        <div class="category-tab active">Discover</div>
        <div class="category-tab">Collect</div>
        <div class="category-tab">Trade</div>
        <div class="category-tab">Explore</div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { apps as appList } from '../data/appData';

const router = useRouter();
const carousel = ref(null);
let carouselInterval = null;

const apps = ref(appList);


const showInfo = (index) => {
  apps.value[index].showInfo = true;
};

const hideInfo = (index) => {
  apps.value[index].showInfo = false;
};

const goToDetail = (id) => {
  router.push(`/detail/${id}`);
};

const startCarousel = () => {
  carouselInterval = setInterval(() => {
    if (carousel.value) {
      carousel.value.scrollLeft += 1;

      // Reset when reaching the end
      const maxScroll = carousel.value.scrollWidth - carousel.value.clientWidth;
      if (carousel.value.scrollLeft >= maxScroll) {
        carousel.value.scrollLeft = 0;
      }
    }
  }, 30);
};

onMounted(() => {
  startCarousel();
});

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
});
</script>

<style scoped>
.home {
  width: 100%;
}

.hero {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.tagline {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 2rem;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.stars {
  color: #333;
  font-weight: 600;
}

.user-rating {
  color: #888;
  font-size: 0.9rem;
}

.description {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.app-showcase {
  width: 100%;
  padding: 2rem 0;
  background-color: #fffdf5;
  overflow: hidden;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
}

.carousel {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */
}

.carousel::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}

.app-card {
  flex: 0 0 300px;
  height: 400px;
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;
}

.app-card:hover {
  transform: translateY(-10px);
}

.app-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.app-name {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
}

.app-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.app-info.show {
  transform: translateY(0);
}

.app-price {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.app-desc {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.auction-text {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.auction-timer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.timer-item {
  text-align: center;
}

.timer-value {
  font-weight: 700;
  font-size: 1.2rem;
}

.timer-label {
  font-size: 0.7rem;
  color: #666;
}

.timer-separator {
  font-weight: 700;
}

.app-creator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.creator-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.creator-name {
  font-size: 0.9rem;
  font-weight: 600;
}

.creator-handle {
  font-size: 0.8rem;
  color: #666;
}

.categories {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

.category-tab {
  font-size: 1.2rem;
  font-weight: 500;
  color: #888;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 0;
}

.category-tab.active {
  color: #333;
}

.category-tab.active::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #333;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .app-card {
    flex: 0 0 250px;
    height: 350px;
  }
}
</style>