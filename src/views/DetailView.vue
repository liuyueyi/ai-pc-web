<template>
    <div class="detail-view">
        <!-- First Screen -->
        <section class="app-hero" ref="appHero">
            <div class="app-hero-content">
                <div class="hero-layout">
                    <div class="hero-left">
                        <div class="app-preview">
                            <div class="carousel">
                                <div class="carousel-inner"
                                    :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                                    <img v-for="(image, index) in app.previewImages" :key="index" :src="image && image.startsWith('http') ? image : baseUrl + image"
                                        :alt="`App Preview ${index + 1}`" class="preview-image" />
                                </div>
                                <button class="carousel-btn prev" @click="prevSlide"
                                    aria-label="Previous slide">&lt;</button>
                                <button class="carousel-btn next" @click="nextSlide"
                                    aria-label="Next slide">&gt;</button>
                                <div class="carousel-indicators">
                                    <button v-for="(_, index) in app.previewImages" :key="index"
                                        :class="['indicator-dot', { active: currentSlide === index }]"
                                        @click="goToSlide(index)" :aria-label="`Go to slide ${index + 1}`"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hero-right">
                        <div class="app-header">
                            <div class="app-logo">
                                <img :src="app.logo && app.logo.startsWith('http') ? app.logo : baseUrl + app.logo" alt="App Logo" class="logo-image" />
                            </div>
                            <div class="app-tag">
                                <h1 class="app-name">{{ app.name }}</h1>
                                <p class="app-tagline">{{ app.description }}</p>
                            </div>
                        </div>

                        <div class="app-actions">
                            <a :href="app.googlePlayUrl" class="download-btn" target="_blank" rel="noopener noreferrer">
                                <img src="/static/google-play.png" alt="应用市场" class="google-play-badge" />
                            </a>

                            <a :href="app.androidUrl" class="download-btn" target="_blank" rel="noopener noreferrer">
                                <img src="/static/android-apk.png" alt="下载APK" class="google-play-badge" />
                            </a>

                            <div class="qr-code" v-if="app.qrCode">
                                <img :src="app.qrCode" alt="Mini Program QR Code" class="qr-image" />
                                <span class="qr-label">Mini Program</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="scroll-indicator">
                    <span>Scroll for more(下拉查看更多)</span>
                    <div class="scroll-arrow">↓</div>
                </div>
            </div>
        </section>

        <!-- Second Screen -->
        <section class="app-details">
            <div class="details-container">
                <div class="details-content">
                    <h2 class="details-title">关于 {{ app.name }}</h2>
                    <div class="details-description" v-html="app.description"></div>

                    <div class="app-features">
                        <h3 class="features-title">特性</h3>
                        <ul class="features-list">
                            <li v-for="(feature, index) in app.features" :key="index" class="feature-item">
                                {{ feature }}
                            </li>
                        </ul>
                    </div>

                    <div class="app-testimonials" v-if="app.testimonials && app.testimonials.length">
                        <h3 class="testimonials-title">What Users Say</h3>
                        <div class="testimonials-list">
                            <div v-for="(testimonial, index) in app.testimonials" :key="index" class="testimonial-item">
                                <div class="testimonial-rating">★★★★★</div>
                                <p class="testimonial-text">"{{ testimonial.text }}"</p>
                                <div class="testimonial-author">- {{ testimonial.author }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="preview-container" v-if="app.previewUrl">
                    <h3 class="preview-title">
                        <a :href="app.previewUrl" target="_blank" class="preview-link">
                            WAP预览
                            <div class="qr-hover" v-if="app.qrCode">
                                <img :src="baseUrl + app.qrCode" alt="QR Code" class="qr-hover-image" />
                            </div>
                        </a>
                    </h3>
                    <div class="preview-frame">
                        <iframe :src="app.previewUrl" frameborder="0" class="preview-iframe"></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section class="app-media">
            <div class="media-container">
                <h2 class="media-title">Featured In</h2>
                <div class="media-logos">
                    <img :src="baseUrl + '/placeholder.svg?height=50&width=150'" alt="TechCrunch" class="media-logo" />
                    <img :src="baseUrl + '/placeholder.svg?height=50&width=150'" alt="Business Insider" class="media-logo" />
                    <img :src="baseUrl + '/placeholder.svg?height=50&width=150'" alt="Fitt Insider" class="media-logo" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { apps as appList } from '../data/appData';
// 定义基础URL变量
const baseUrl = import.meta.env.BASE_URL;

const route = useRoute();
const appHero = ref(null);
const appId = computed(() => parseInt(route.params.id) || 1);


const currentSlide = ref(0);
const autoPlayInterval = ref(null);

const app = ref({});

const handleScroll = () => {
    if (appHero.value) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - Math.min(scrollPosition / 500, 1);
        const translateY = scrollPosition * 0.4;

        appHero.value.style.opacity = opacity;
        appHero.value.style.transform = `translateY(${translateY}px)`;
    }
};


const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % app.value.previewImages.length;
};

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + app.value.previewImages.length) % app.value.previewImages.length;
};

const goToSlide = (index) => {
    currentSlide.value = index;
};

const startAutoPlay = () => {
    autoPlayInterval.value = setInterval(nextSlide, 5000);
};

const stopAutoPlay = () => {
    if (autoPlayInterval.value) {
        clearInterval(autoPlayInterval.value);
        autoPlayInterval.value = null;
    }
};

onMounted(() => {
    // 使用find方法从数组中查找对应id的应用信息
    app.value = appList.find(item => item.id === appId.value);

    // Add scroll event listener for parallax effect
    window.addEventListener('scroll', handleScroll);
    startAutoPlay();
});

</script>

<style scoped>
.detail-view {
    width: 100%;
}

.hero-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
}

.hero-left {
    display: flex;
    justify-content: center;
}

.hero-right {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
}

.app-preview {
    max-width: 400px;
    width: 100%;
    margin: 0;
}

.app-header {
    width: 100%;
}

.app-actions {
    width: 100%;
    margin: 0;
}

.app-hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #f9f9f9;
    overflow: hidden;
    transition: opacity 0.3s, transform 0.3s;
}

.app-hero-content {
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
    text-align: center;
    z-index: 1;
}

.app-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    position: relative;
    z-index: 2;
}

.app-logo {
    width: 180px;
    height: 180px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
}

.app-tag {
    text-align: left;
}

.logo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.app-name {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
}

.app-tagline {
    font-size: 1.3rem;
    color: #666;
    margin-bottom: 2rem;
}

.app-preview {
    margin: 0 auto 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    overflow: hidden;
}

.preview-image {
    width: 100%;
    display: block;
}

.app-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
}

.download-btn {
    display: block;
    max-width: 200px;
}

.google-play-badge {
    width: 100%;
}

.qr-code {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.qr-image {
    width: 100px;
    height: 100px;
    margin-bottom: 0.5rem;
}

.qr-label {
    font-size: 0.9rem;
    color: #666;
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0) translateX(-50%);
    }

    40% {
        transform: translateY(-20px) translateX(-50%);
    }

    60% {
        transform: translateY(-10px) translateX(-50%);
    }
}

.scroll-arrow {
    font-size: 1.5rem;
    margin-top: 0.5rem;
}

.app-details {
    padding: 4rem 2rem;
    background-color: #fff;
}

.details-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.details-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.details-description {
    margin-bottom: 2rem;
    line-height: 1.6;
    color: #444;
}

.details-description p {
    margin-bottom: 1rem;
}

.app-features {
    margin-bottom: 2rem;
}

.features-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.features-list {
    list-style-type: none;
}

.feature-item {
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
}

.feature-item::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #4CAF50;
    font-weight: bold;
}

.app-testimonials {
    margin-bottom: 2rem;
}

.testimonials-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.testimonials-list {
    display: grid;
    gap: 1rem;
}

.testimonial-item {
    background-color: #f9f9f9;
    padding: 1.5rem;
    border-radius: 0.5rem;
}

.testimonial-rating {
    color: #FFD700;
    margin-bottom: 0.5rem;
}

.testimonial-text {
    font-style: italic;
    margin-bottom: 0.5rem;
}

.testimonial-author {
    font-weight: 600;
    text-align: right;
}

.preview-container {
    height: 100%;
}

.preview-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.preview-title a {
    color: #2563eb;
    text-decoration: none;
    position: relative;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
}

.preview-title a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #2563eb;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
}

.preview-title a:hover {
    background-color: rgba(37, 99, 235, 0.1);
}

.preview-title a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
.preview-frame {
    width: 100%;
    height: 90%;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.preview-iframe {
    width: 100%;
    height: 100%;
}

.app-media {
    padding: 4rem 2rem;
    background-color: #f9f9f9;
}

.media-container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.media-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
}

.media-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
}

.media-logo {
    height: 50px;
    opacity: 0.7;
    transition: opacity 0.3s;
}

.media-logo:hover {
    opacity: 1;
}

@media (max-width: 992px) {
    .details-container {
        grid-template-columns: 1fr;
    }

    .preview-frame {
        height: 400px;
    }
}

@media (max-width: 768px) {
    .app-name {
        font-size: 2.5rem;
    }

    .app-tagline {
        font-size: 1.2rem;
    }

    .app-actions {
        flex-direction: column;
        gap: 1rem;
    }
}


.carousel {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    z-index: 2;
    transition: background-color 0.3s;
}

.carousel-btn:hover {
    background: rgba(0, 0, 0, 0.7);
}

.carousel-btn.prev {
    left: 1rem;
}

.carousel-btn.next {
    right: 1rem;
}

.carousel-indicators {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.5rem;
    z-index: 2;
}

.indicator-dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background-color 0.3s;
}

.indicator-dot.active {
    background: white;
}

.preview-image {
    width: 100%;
    flex-shrink: 0;
    object-fit: cover;
}

.qr-hover {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
    display: none;
    z-index: 10;
}

.preview-link:hover .qr-hover {
    display: block;
}

.qr-hover-image {
    width: 150px;
    height: 150px;
    display: block;
}
</style>