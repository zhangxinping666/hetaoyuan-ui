// js/banpo-dining.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    const wisdomData = [
        { id: 'folk', title: '民间溯源', tag: 'Tradition', icon: 'fa-scroll', desc: '探索半坡地区流传千年的民间饮食习俗，从节日庆典到日常餐桌。', img: 'https://images.unsplash.com/photo-1542354256-4b68e1a1401f?w=600' },
        { id: 'huangdi', title: '黄帝内经', tag: 'TCM Health', icon: 'fa-mortar-pestle', desc: '依据《黄帝内经》"五谷为养，五果为助"的理念，定制节气养生食谱。', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600' },
        { id: 'qimin', title: '齐民要术', tag: 'Agriculture', icon: 'fa-seedling', desc: '复刻《齐民要术》中的古法烹饪技艺，传承农耕文明的味觉记忆。', img: 'https://images.unsplash.com/photo-1627483297886-49710ae1fc28?w=600' }
    ];

    const dishes = [
        { id: 1, name: '清蒸鲈鱼', desc:'选用鲜活鲈鱼，古法清蒸，肉质细嫩，保留原汁原味。', image: 'https://images.unsplash.com/photo-1580959375944-0b7b9e7d6b3f?w=400&h=400&fit=crop' },
        { id: 2, name: '红烧肉', desc:'精选五花肉，慢火炖煮三小时，肥而不腻，入口即化。', image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=400&fit=crop' },
        { id: 3, name: '时令蔬菜', desc:'采摘自半坡生态农场，清晨采摘，中午上桌，鲜脆爽口。', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop' },
        { id: 4, name: '手工豆腐', desc:'传统石磨工艺，豆香浓郁，口感嫩滑，回味甘甜。', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop' },
        { id: 5, name: '养生汤', desc:'融合多种药食同源食材，文火慢煲，滋补养生。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop' },
        { id: 6, name: '农家小炒', desc:'地道农家风味，火候十足，香辣开胃，下饭神器。', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop' }
    ];

    const videos = [
        { id: 1, title: '如何制作手工豆腐', duration: '15 分钟', thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop', desc: '跟随老师傅的镜头，一步步学习选豆、泡豆、磨浆、点卤的传统工艺。' },
        { id: 2, title: '传统红烧肉的秘诀', duration: '20 分钟', thumbnail: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=300&h=200&fit=crop', desc: '大厨揭秘：只需掌握这三点，你在家也能做出色泽红亮、肥而不腻的红烧肉。' },
        { id: 3, title: '养生汤的熬制方法', duration: '12 分钟', thumbnail: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop', desc: '根据季节变化调整食材，教你煲出一锅既好喝又健康的养生靓汤。' }
    ];

    const environments = [
        { id: 1, title: '雅致包间', desc:'私密安静，适合商务宴请或家庭聚会，尽享尊贵体验。', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop' },
        { id: 2, title: '大厅景观', desc:'宽敞明亮，新中式装修风格，营造温馨舒适的用餐氛围。', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop' },
        { id: 3, title: '窗外风景', desc:'临窗而坐，一边品尝美食，一边欣赏半坡四季变换的田园风光。', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop' }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================
    function renderWisdomCards() {
        const container = document.getElementById('wisdom-scroll');
        if (!container) return;
        container.innerHTML = wisdomData.map(item => `
            <div class="bd-wisdom-card" onclick="window.showWisdomDetail('${item.id}')">
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
            <div class="bd-dish-card" onclick="window.showDishDetail(${dish.id})">
                <img src="${dish.image}" alt="${dish.name}" class="bd-dish-card__img" 
                     onerror="this.src='https://via.placeholder.com/400x400/D84315/FFFFFF?text=${dish.name}'">
                <div class="bd-dish-card__overlay">
                    <span class="bd-dish-card__name">${dish.name}</span>
                    <button type="button" class="bd-dish-card__like" onclick="event.stopPropagation(); window.likeDish(${dish.id}, this)" aria-label="喜欢">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    function renderCookingSchool() {
        const container = document.getElementById('school-list');
        if (!container) return;
        container.innerHTML = videos.map(video => `
            <div class="bd-video-card" onclick="window.playDiningVideo(${video.id})">
                <div class="bd-video-card__thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}" 
                         onerror="this.src='https://via.placeholder.com/300x200/D84315/FFFFFF?text=视频'">
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
            <div class="bd-env-card" onclick="window.showEnvironmentDetail(${env.id})">
                <img src="${env.image}" alt="${env.title}" class="bd-env-card__img" 
                     onerror="this.src='https://via.placeholder.com/600x400/D84315/FFFFFF?text=${env.title}'">
                <div class="bd-env-card__caption"><h3 class="bd-env-card__title">${env.title}</h3></div>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================
    
    // 打开通用弹窗
    function openBanpoDiningModal(title, desc, imgUrl) {
        const modal = document.getElementById('banpo-dining-modal');
        if (!modal) {
            alert(`${title}\n${desc}`); // 降级
            return;
        }

        const titleEl = document.getElementById('bd-modal-title');
        const descEl = document.getElementById('bd-modal-desc');
        const imgEl = document.getElementById('bd-modal-img');

        if(titleEl) titleEl.innerText = title;
        if(descEl) descEl.innerText = desc || '暂无描述';
        
        if(imgEl) {
            if(imgUrl) {
                imgEl.src = imgUrl;
                imgEl.parentElement.style.display = 'block';
            } else {
                imgEl.parentElement.style.display = 'none';
            }
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    window.closeBanpoDiningModal = function() {
        const modal = document.getElementById('banpo-dining-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // 具体的业务调用
    window.showWisdomDetail = function(id) {
        const item = wisdomData.find(i => i.id === id);
        if(item) openBanpoDiningModal(item.title, item.desc, item.img);
    };

    window.showDishDetail = function(id) {
        const item = dishes.find(i => i.id === id);
        if(item) openBanpoDiningModal(item.name, item.desc, item.image);
    };
    
    window.showEnvironmentDetail = function(id) {
        const item = environments.find(i => i.id === id);
        if(item) openBanpoDiningModal(item.title, item.desc, item.image);
    };

    window.playDiningVideo = function(id) {
        const item = videos.find(i => i.id === id);
        if(item) openBanpoDiningModal(item.title, `(正在播放视频)\n${item.desc}`, item.thumbnail);
    };

    // 点赞动效：切换心形图标
    window.likeDish = function(id, btnElement) {
        const icon = btnElement.querySelector('i');
        if (icon.classList.contains('far')) {
            // 点赞
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#ff4757';
            btnElement.classList.add('liked'); // 也可以加个动画类
        } else {
            // 取消点赞
            icon.classList.remove('fas');
            icon.classList.add('far');
            icon.style.color = '';
            btnElement.classList.remove('liked');
        }
    };

    window.makeReservation = function() {
        const btn = document.querySelector('.bd-reserve-btn'); // 假设 HTML 里按钮有这个类
        if(btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> 拨号中...';
            setTimeout(() => {
                alert('已为您转接预订热线：0371-1234567');
                btn.innerHTML = originalText;
            }, 500);
        } else {
            alert('请拨打预订热线：0371-1234567');
        }
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

    // 自动尝试初始化
    setTimeout(() => {
        if(document.getElementById('banpo-dining')) {
            window.initBanpoDiningPage();
        }
    }, 100);

})();