// 文艺创作 - 数字书房
// Literary Creation - Digital Study

// ========== 数据 ==========
const classicBooks = [
    { id: 1, title: '论语', author: '孔子', category: '儒家经典', pages: 120 },
    { id: 2, title: '道德经', author: '老子', category: '道家经典', pages: 81 },
    { id: 3, title: '诗经', author: '佚名', category: '诗歌总集', pages: 305 },
    { id: 4, title: '唐诗三百首', author: '蘅塘退士', category: '诗歌选集', pages: 300 },
    { id: 5, title: '宋词三百首', author: '朱孝臧', category: '词集', pages: 300 }
];

const modernCreations = [
    { id: 1, author: '张老师', title: '秋日感怀', content: '落叶知秋意，霜降染枫林。半坡耕读乐，晚年亦芳心。', likes: 45, time: '2小时前' },
    { id: 2, author: '李教授', title: '核桃树下', content: '核桃树下话桑麻，半坡风光胜似画。退休生活多惬意，耕读传家代代夸。', likes: 67, time: '5小时前' },
    { id: 3, author: '王医师', title: '晨练偶得', content: '晨起太行云雾间，半坡景色入诗篇。养生有道身心健，耕读有伴乐无边。', likes: 38, time: '1天前' },
    { id: 4, author: '赵校长', title: '重阳登高', content: '重阳佳节登高处，太行秋色入眼来。', likes: 52, time: '2天前' }
];

const galleryArtworks = [
    { id: 1, title: '兰亭序临摹', artist: '王羲之', type: '书法', image: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=400' },
    { id: 2, title: '山水小品', artist: '张大千', type: '国画', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400' },
    { id: 3, title: '梅兰竹菊', artist: '齐白石', type: '国画', image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400' },
    { id: 4, title: '行书习作', artist: '颜真卿', type: '书法', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400' },
    { id: 5, title: '荷塘月色', artist: '徐悲鸿', type: '国画', image: 'https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?w=400' }
];

const audioTracks = [
    { id: 1, title: '诗经·关雎', reader: '张老师', duration: '3:45', plays: 1234 },
    { id: 2, title: '唐诗朗诵·春江花月夜', reader: '李教授', duration: '5:20', plays: 892 },
    { id: 3, title: '古琴曲·高山流水', artist: '王老师', duration: '8:15', plays: 756 }
];

// ========== 初始化日期 ==========
function initDate() {
    const today = new Date();
    const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    const dateEl = document.getElementById('lc-daily-date');
    if (dateEl) {
        dateEl.textContent = `${months[today.getMonth()]}月${today.getDate()}日`;
    }
}

// ========== 渲染经典名篇 ==========
function renderClassicBooks() {
    const container = document.getElementById('classic-books');
    if (!container) return;

    container.innerHTML = classicBooks.map(book => `
        <article class="lc-book-item" onclick="readBook(${book.id})">
            <div class="lc-book-item__spine"></div>
            <div class="lc-book-item__content">
                <h3 class="lc-book-item__title">${book.title}</h3>
                <p class="lc-book-item__author">${book.author}</p>
                <div class="lc-book-item__meta">
                    <span class="lc-book-item__category">${book.category}</span>
                    <span class="lc-book-item__pages">${book.pages}篇</span>
                </div>
            </div>
        </article>
    `).join('');
}

// ========== 渲染文学创作 ==========
function renderModernCreations() {
    const container = document.getElementById('modern-creations');
    if (!container) return;

    container.innerHTML = modernCreations.map(creation => `
        <article class="lc-creation-card" onclick="viewCreation(${creation.id})">
            <div class="lc-creation-card__header">
                <span class="lc-creation-card__author">${creation.author}</span>
                <span class="lc-creation-card__time">${creation.time}</span>
            </div>
            <h3 class="lc-creation-card__title">${creation.title}</h3>
            <p class="lc-creation-card__content">${creation.content}</p>
            <div class="lc-creation-card__footer">
                <button class="lc-creation-card__like">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span>${creation.likes}</span>
                </button>
            </div>
        </article>
    `).join('');
}

// ========== 渲染书画展览 ==========
function renderGallery() {
    const container = document.getElementById('gallery-scroll');
    if (!container) return;

    container.innerHTML = galleryArtworks.map(artwork => `
        <article class="lc-gallery-card" onclick="viewArtwork(${artwork.id})">
            <div class="lc-gallery-card__frame">
                <img src="${artwork.image}" alt="${artwork.title}"
                     onerror="this.src='https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=400'">
            </div>
            <div class="lc-gallery-card__info">
                <span class="lc-gallery-card__type">${artwork.type}</span>
                <h3 class="lc-gallery-card__title">${artwork.title}</h3>
                <p class="lc-gallery-card__artist">${artwork.artist}</p>
            </div>
        </article>
    `).join('');
}

// ========== 渲染音频播放器 ==========
function renderAudioPlayer() {
    const container = document.getElementById('audio-player');
    if (!container) return;

    container.innerHTML = audioTracks.map(track => `
        <article class="lc-audio-card" onclick="playAudio(${track.id})">
            <div class="lc-audio-card__vinyl">
                <svg viewBox="0 0 100 100" class="lc-vinyl">
                    <circle cx="50" cy="50" r="45" fill="#2D3436"/>
                    <circle cx="50" cy="50" r="35" fill="#1A1A1A"/>
                    <circle cx="50" cy="50" r="8" fill="#C04851"/>
                </svg>
            </div>
            <div class="lc-audio-card__content">
                <h3 class="lc-audio-card__title">${track.title}</h3>
                <p class="lc-audio-card__meta">
                    <span>${track.reader || track.artist}</span>
                    <span>·</span>
                    <span>${track.duration}</span>
                    <span>·</span>
                    <span>${track.plays} 次播放</span>
                </p>
            </div>
            <button class="lc-audio-card__play">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </button>
        </article>
    `).join('');
}

// ========== 切换阅读标签 ==========
function switchReadingTab(tab) {
    const classicContent = document.getElementById('classic-content');
    const modernContent = document.getElementById('modern-content');
    const tabs = document.querySelectorAll('.lc-tab');

    tabs.forEach(t => t.classList.remove('lc-tab--active'));

    if (tab === 'classic') {
        classicContent.classList.remove('lc-reading-content--hidden');
        modernContent.classList.add('lc-reading-content--hidden');
        tabs[0].classList.add('lc-tab--active');
    } else {
        classicContent.classList.add('lc-reading-content--hidden');
        modernContent.classList.remove('lc-reading-content--hidden');
        tabs[1].classList.add('lc-tab--active');
    }
}

// ========== 显示/隐藏创作菜单 ==========
function showCreateMenu() {
    const menu = document.getElementById('create-menu');
    if (menu) {
        menu.classList.remove('lc-create-menu--hidden');
    }
}

function hideCreateMenu() {
    const menu = document.getElementById('create-menu');
    if (menu) {
        menu.classList.add('lc-create-menu--hidden');
    }
}

// ========== 交互函数 ==========
function readBook(id) {
    console.log('阅读书籍:', id);
    alert(`阅读书籍 ${id}（功能开发中）`);
}

function viewCreation(id) {
    console.log('查看创作:', id);
    alert(`查看创作 ${id}（功能开发中）`);
}

function viewArtwork(id) {
    console.log('查看作品:', id);
    alert(`查看作品 ${id}（功能开发中）`);
}

function playAudio(id) {
    console.log('播放音频:', id);
    alert(`播放音频 ${id}（功能开发中）`);
}

function showAllGallery() {
    alert('查看全部书画作品（功能开发中）');
}

function createArticle() {
    hideCreateMenu();
    alert('写文章（功能开发中）');
}

function uploadImage() {
    hideCreateMenu();
    alert('发图片（功能开发中）');
}

function uploadAudio() {
    hideCreateMenu();
    alert('录音频（功能开发中）');
}

function goBack() {
    window.history.back();
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('📚 文艺创作 - 数字书房初始化');

    initDate();
    renderClassicBooks();
    renderModernCreations();
    renderGallery();
    renderAudioPlayer();

    console.log('✅ 所有模块加载完成');
});

