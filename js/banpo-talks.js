// 半坡讲谈 - 掌上书院
// 数字雅集交互逻辑

// ========== 每日一签 ==========
function initDailyWisdom() {
    const wisdoms = [
        { text: '学而时习之，不亦说乎', source: '《论语·学而》' },
        { text: '温故而知新，可以为师矣', source: '《论语·为政》' },
        { text: '三人行，必有我师焉', source: '《论语·述而》' },
        { text: '知之者不如好之者，好之者不如乐之者', source: '《论语·雍也》' },
        { text: '食不厌精，脍不厌细', source: '《论语·乡党》' },
        { text: '饮食有节，起居有常', source: '《黄帝内经》' },
        { text: '春生夏长，秋收冬藏', source: '《黄帝内经》' },
        { text: '恬淡虚无，真气从之', source: '《黄帝内经》' }
    ];

    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const wisdom = wisdoms[dayOfYear % wisdoms.length];

    // 更新日期
    const dateEl = document.getElementById('daily-date');
    if (dateEl) {
        const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
        dateEl.textContent = `${months[today.getMonth()]}月${today.getDate()}日`;
    }

    // 更新签文（带动画）
    const wisdomEl = document.getElementById('daily-wisdom');
    const sourceEl = document.querySelector('.bt-wisdom__source');
    
    if (wisdomEl && sourceEl) {
        setTimeout(() => {
            wisdomEl.textContent = wisdom.text;
            sourceEl.textContent = `—— ${wisdom.source}`;
            wisdomEl.classList.add('bt-wisdom--reveal');
        }, 300);
    }
}

// ========== 杏林馆 - 医学讲座 ==========
const medicalVideos = [
    {
        id: 1,
        title: '心血管健康养护指南',
        lecturer: '张教授',
        duration: '45分钟',
        tag: '专家号',
        thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
        views: 1234
    },
    {
        id: 2,
        title: '中医养生：四季调理',
        lecturer: '李医师',
        duration: '38分钟',
        tag: '养生',
        thumbnail: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400',
        views: 892
    },
    {
        id: 3,
        title: '老年营养学基础',
        lecturer: '王营养师',
        duration: '52分钟',
        tag: '营养',
        thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400',
        views: 756
    }
];

function renderVideoList() {
    const container = document.getElementById('video-list');
    if (!container) return;

    container.innerHTML = medicalVideos.map(video => `
        <article class="bt-video-card" onclick="playVideo(${video.id})">
            <div class="bt-video-card__thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}" 
                     onerror="this.src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400'">
                <div class="bt-video-card__play">
                    <svg viewBox="0 0 48 48" fill="white">
                        <circle cx="24" cy="24" r="20" fill="rgba(0,0,0,0.6)"/>
                        <path d="M18 14L34 24L18 34Z" fill="white"/>
                    </svg>
                </div>
                <span class="bt-video-card__duration">${video.duration}</span>
            </div>
            <div class="bt-video-card__content">
                <h3 class="bt-video-card__title">${video.title}</h3>
                <div class="bt-video-card__meta">
                    <span class="bt-video-card__tag">${video.tag}</span>
                    <span class="bt-video-card__lecturer">${video.lecturer}</span>
                    <span class="bt-video-card__views">${video.views} 次观看</span>
                </div>
            </div>
        </article>
    `).join('');
}

// ========== 墨香阁 - 书画课堂 ==========
const artworks = [
    {
        id: 1,
        title: '兰亭序临摹',
        author: '王羲之',
        type: '书法',
        image: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=300'
    },
    {
        id: 2,
        title: '山水小品',
        author: '张大千',
        type: '国画',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300'
    },
    {
        id: 3,
        title: '梅兰竹菊',
        author: '齐白石',
        type: '国画',
        image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=300'
    },
    {
        id: 4,
        title: '行书习作',
        author: '颜真卿',
        type: '书法',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300'
    }
];

function renderArtworkScroll() {
    const container = document.getElementById('artwork-scroll');
    if (!container) return;

    container.innerHTML = artworks.map(art => `
        <article class="bt-artwork-card" onclick="viewArtwork(${art.id})">
            <div class="bt-artwork-card__image">
                <img src="${art.image}" alt="${art.title}"
                     onerror="this.src='https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=300'">
            </div>
            <div class="bt-artwork-card__info">
                <span class="bt-artwork-card__type">${art.type}</span>
                <h3 class="bt-artwork-card__title">${art.title}</h3>
                <p class="bt-artwork-card__author">${art.author}</p>
            </div>
        </article>
    `).join('');
}

// ========== 百草园 - 种植栽培 ==========
const plants = [
    {
        id: 1,
        name: '核桃树',
        category: '果树',
        difficulty: '简单',
        icon: '🌰',
        color: '#8B7355'
    },
    {
        id: 2,
        name: '阳台蔬菜',
        category: '蔬菜',
        difficulty: '简单',
        icon: '🥬',
        color: '#7CB342'
    },
    {
        id: 3,
        name: '中草药',
        category: '药材',
        difficulty: '中等',
        icon: '🌿',
        color: '#66BB6A'
    },
    {
        id: 4,
        name: '花卉盆栽',
        category: '观赏',
        difficulty: '简单',
        icon: '🌸',
        color: '#EC407A'
    },
    {
        id: 5,
        name: '茶树种植',
        category: '经济作物',
        difficulty: '中等',
        icon: '🍵',
        color: '#689F38'
    },
    {
        id: 6,
        name: '香草园艺',
        category: '香料',
        difficulty: '简单',
        icon: '🌱',
        color: '#9CCC65'
    }
];

function renderGardenGrid() {
    const container = document.getElementById('garden-grid');
    if (!container) return;

    container.innerHTML = plants.map(plant => `
        <article class="bt-plant-card" onclick="viewPlantDetail(${plant.id})"
                 style="--plant-color: ${plant.color}">
            <div class="bt-plant-card__icon">${plant.icon}</div>
            <h3 class="bt-plant-card__name">${plant.name}</h3>
            <div class="bt-plant-card__meta">
                <span class="bt-plant-card__category">${plant.category}</span>
                <span class="bt-plant-card__difficulty">${plant.difficulty}</span>
            </div>
        </article>
    `).join('');
}

// ========== 茶话会 - 畅谈互动 ==========
const topics = [
    {
        id: 1,
        author: '张老师',
        avatar: 'https://i.pravatar.cc/150?img=1',
        title: '今天在半坡种的核桃树发芽了！',
        content: '分享一下我的种植心得，选择合适的土壤很重要...',
        time: '2小时前',
        likes: 23,
        comments: 8
    },
    {
        id: 2,
        author: '李教授',
        avatar: 'https://i.pravatar.cc/150?img=2',
        title: '关于书法临摹的几点体会',
        content: '最近在练习王羲之的兰亭序，有一些心得想和大家交流...',
        time: '5小时前',
        likes: 45,
        comments: 12
    },
    {
        id: 3,
        author: '王医师',
        avatar: 'https://i.pravatar.cc/150?img=3',
        title: '秋季养生小贴士',
        content: '秋天到了，给大家分享一些养生的小知识...',
        time: '1天前',
        likes: 67,
        comments: 20
    }
];

function renderTopicList() {
    const container = document.getElementById('topic-list');
    if (!container) return;

    container.innerHTML = topics.map(topic => `
        <article class="bt-topic-card" onclick="viewTopic(${topic.id})">
            <img class="bt-topic-card__avatar" src="${topic.avatar}" alt="${topic.author}">
            <div class="bt-topic-card__content">
                <div class="bt-topic-card__header">
                    <span class="bt-topic-card__author">${topic.author}</span>
                    <span class="bt-topic-card__time">${topic.time}</span>
                </div>
                <h3 class="bt-topic-card__title">${topic.title}</h3>
                <p class="bt-topic-card__excerpt">${topic.content}</p>
                <div class="bt-topic-card__footer">
                    <button class="bt-topic-card__action bt-topic-card__action--like">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        <span>${topic.likes}</span>
                    </button>
                    <button class="bt-topic-card__action bt-topic-card__action--comment">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                        <span>${topic.comments}</span>
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

// ========== 交互函数 ==========
function playVideo(id) {
    console.log('播放视频:', id);
    alert(`播放视频 ${id}（功能开发中）`);
}

function viewArtwork(id) {
    console.log('查看作品:', id);
    alert(`查看作品 ${id}（功能开发中）`);
}

function viewPlantDetail(id) {
    console.log('查看植物详情:', id);
    alert(`查看植物 ${id} 详情（功能开发中）`);
}

function viewTopic(id) {
    console.log('查看话题:', id);
    alert(`查看话题 ${id}（功能开发中）`);
}

function createNewTopic() {
    console.log('发起新话题');
    alert('发起新话题（功能开发中）');
}

function showAllVideos() {
    alert('查看全部医学讲座（功能开发中）');
}

function showAllArtworks() {
    alert('查看全部书画作品（功能开发中）');
}

function showAllPlants() {
    alert('查看全部种植指南（功能开发中）');
}

function showAllTopics() {
    alert('查看全部话题（功能开发中）');
}

function goBack() {
    window.history.back();
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏛️ 半坡讲谈 - 掌上书院初始化');

    // 初始化各个模块
    initDailyWisdom();
    renderVideoList();
    renderArtworkScroll();
    renderGardenGrid();
    renderTopicList();

    console.log('✅ 所有模块加载完成');
});

