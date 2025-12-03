// js/banpo-dining.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    const wisdomData = [
        { id: 'folk', title: '民间溯源', tag: 'Tradition', icon: 'fa-scroll', desc: '追溯民间饮食文化的起源' },
        { id: 'huangdi', title: '黄帝内经', tag: 'TCM Health', icon: 'fa-mortar-pestle', desc: '中医养生的饮食智慧' },
        { id: 'qimin', title: '齐民要术', tag: 'Agriculture', icon: 'fa-seedling', desc: '古代农业与烹饪技艺' }
    ];

    const dishes = [
        { id: 1, name: '清蒸鲈鱼', image: 'https://images.unsplash.com/photo-1580959375944-0b7b9e7d6b3f?w=400&h=400&fit=crop' },
        { id: 2, name: '红烧肉', image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=400&fit=crop' },
        { id: 3, name: '时令蔬菜', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop' },
        { id: 4, name: '手工豆腐', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop' },
        { id: 5, name: '养生汤', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop' },
        { id: 6, name: '农家小炒', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop' }
    ];

    const videos = [
        { id: 1, title: '如何制作手工豆腐', duration: '15 分钟', thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop' },
        { id: 2, title: '传统红烧肉的秘诀', duration: '20 分钟', thumbnail: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=300&h=200&fit=crop' },
        { id: 3, title: '养生汤的熬制方法', duration: '12 分钟', thumbnail: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop' }
    ];

    const environments = [
        { id: 1, title: '雅致包间', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop' },
        { id: 2, title: '大厅景观', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop' },
        { id: 3, title: '窗外风景', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop' }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================
    function renderWisdomCards() {
        const container = document.getElementById('wisdom-scroll');
        if (!container) return;
        container.innerHTML = wisdomData.map(item => `
            <div class="bd-wisdom-card" onclick="showWisdomDetail('${item.id}')">
                <div class="bd-wisdom-card__icon"><i class="fas ${item.icon}"></i></div>
                <h3 class="bd-wisdom-card__title">${item.title}</h3>
                <span class="bd-wisdom-card__tag">${item.tag}</span>
            </div>
        `).join('');
    }

    function renderDishGallery() {
        const container = document.getElementById('gallery-grid');
        if (!container) return;
        container.innerHTML = dishes.map(dish => `
            <div class="bd-dish-card" onclick="showDishDetail(${dish.id})">
                <img src="${dish.image}" alt="${dish.name}" class="bd-dish-card__img" onerror="this.src='https://via.placeholder.com/400x400/D84315/FFFFFF?text=${dish.name}'">
                <div class="bd-dish-card__overlay">
                    <span class="bd-dish-card__name">${dish.name}</span>
                    <button type="button" class="bd-dish-card__like" onclick="event.stopPropagation(); likeDish(${dish.id})" aria-label="喜欢">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    function renderCookingSchool() {
        const container = document.getElementById('school-list');
        if (!container) return;
        // 注意：这里 onclick 调用的是 playDiningVideo，避免和其他页面的 playVideo 冲突
        container.innerHTML = videos.map(video => `
            <div class="bd-video-card" onclick="playDiningVideo(${video.id})">
                <div class="bd-video-card__thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='https://via.placeholder.com/300x200/D84315/FFFFFF?text=视频'">
                    <div class="bd-video-card__play">
                        <div class="bd-video-card__play-icon"><i class="fas fa-play"></i></div>
                    </div>
                </div>
                <div class="bd-video-card__content">
                    <h3 class="bd-video-card__title">${video.title}</h3>
                    <p class="bd-video-card__duration">${video.duration}</p>
                </div>
            </div>
        `).join('');
    }

    function renderEnvironment() {
        const container = document.getElementById('environment-carousel');
        if (!container) return;
        container.innerHTML = environments.map(env => `
            <div class="bd-env-card">
                <img src="${env.image}" alt="${env.title}" class="bd-env-card__img" onerror="this.src='https://via.placeholder.com/600x400/D84315/FFFFFF?text=${env.title}'">
                <div class="bd-env-card__caption"><h3 class="bd-env-card__title">${env.title}</h3></div>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================
    window.showWisdomDetail = function(id) {
        console.log('显示文化详情:', id);
        alert('文化详情页面开发中: ' + id);
    };

    window.showDishDetail = function(id) {
        console.log('显示菜品详情:', id);
        alert('菜品详情页面开发中: ' + id);
    };

    window.likeDish = function(id) {
        console.log('喜欢菜品:', id);
        alert('已添加到收藏！');
    };

    // 专属的视频播放函数名
    window.playDiningVideo = function(id) {
        console.log('播放烹饪视频:', id);
        alert('视频播放功能开发中: ' + id);
    };

    window.makeReservation = function() {
        console.log('预订餐位');
        alert('预订功能开发中，敬请期待！\n请拨打电话：0371-1234567');
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initBanpoDiningPage = function() {
        console.log('🍽️ 半坡餐饮页面初始化');
        renderWisdomCards();
        renderDishGallery();
        renderCookingSchool();
        renderEnvironment();
    };

})();