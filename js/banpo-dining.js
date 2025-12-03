// js/banpo-dining.js
(function() {
    // ==========================================
    // 1. 数据定义 (内容增强版)
    // ==========================================
    const wisdomData = [
        { 
            id: 'folk', 
            title: '民间溯源', 
            tag: 'Tradition', 
            icon: 'fa-scroll', 
            desc: '半坡饮食文化源远流长，我们深入挖掘当地民间食谱，还原了"老席面"的制作工艺，让您在味蕾中感受历史的厚重。', 
            img: 'https://images.unsplash.com/photo-1542354256-4b68e1a1401f?w=600' 
        },
        { 
            id: 'huangdi', 
            title: '黄帝内经', 
            tag: 'TCM Health', 
            icon: 'fa-mortar-pestle', 
            desc: '遵循《黄帝内经》"饮食有节"的养生智慧，结合二十四节气，精选当季食材，烹制出顺应天时的养生佳肴。', 
            img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600' 
        },
        { 
            id: 'qimin', 
            title: '齐民要术', 
            tag: 'Agriculture', 
            icon: 'fa-seedling', 
            desc: '参考中国最早的农书《齐民要术》，复原古法酱制、腌制技艺，每一道工序都恪守古训，只为保留最纯粹的自然风味。', 
            img: 'https://images.unsplash.com/photo-1627483297886-49710ae1fc28?w=600' 
        }
    ];

    const dishes = [
        { id: 1, name: '清蒸鲈鱼', desc:'精选半坡水库生态鲈鱼，现杀现蒸，佐以秘制蒸鱼豉油，肉质如蒜瓣般滑嫩，鲜美无比。', image: 'https://images.unsplash.com/photo-1580959375944-0b7b9e7d6b3f?w=400&h=400&fit=crop' },
        { id: 2, name: '红烧肉', desc:'选用农家散养黑猪五花肉，秉承"少着水，慢着火"的古法，焖制三小时，色泽红亮，肥而不腻。', image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=400&fit=crop' },
        { id: 3, name: '时令蔬菜', desc:'所有蔬菜均采自自家生态农场，清晨带露采摘，中午上桌，保留了蔬菜最原始的清甜与脆嫩。', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop' },
        { id: 4, name: '手工豆腐', desc:'坚持使用传统石磨磨浆，盐卤点制，豆香浓郁，口感扎实，是儿时记忆中的味道。', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop' },
        { id: 5, name: '养生汤', desc:'依照季节变化，配以党参、枸杞、红枣等药食同源食材，文火慢煲四小时，汤色如奶，滋补养颜。', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop' },
        { id: 6, name: '农家小炒', desc:'大火爆炒，镬气十足。农家自制的干豆角、萝卜干与鲜肉的完美碰撞，开胃下饭一绝。', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop' }
    ];

    const videos = [
        { id: 1, title: '如何制作手工豆腐', duration: '15 分钟', thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop', desc: '走进后厨，看老师傅如何从一颗黄豆开始，演绎点卤成金的传统魔法。' },
        { id: 2, title: '传统红烧肉的秘诀', duration: '20 分钟', thumbnail: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=300&h=200&fit=crop', desc: '大厨亲自示范，炒糖色的火候、焖煮的时间，教会你做出一碗完美的红烧肉。' },
        { id: 3, title: '养生汤的熬制方法', duration: '12 分钟', thumbnail: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop', desc: '揭秘汤底浓白的秘诀，以及不同体质人群如何选择适合自己的养生汤品。' }
    ];

    const environments = [
        { id: 1, title: '雅致包间', desc:'以二十四节气命名的私密包间，新中式装修风格，配备专业茶艺服务，是商务宴请的首选。', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop' },
        { id: 2, title: '大厅景观', desc:'宽敞明亮，木质桌椅散发着自然气息，窗外便是连绵的青山，让您在风景中享用美食。', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop' },
        { id: 3, title: '窗外风景', desc:'春有百花秋有月，夏有凉风冬有雪。四季流转的半坡风光，是您用餐时最美的佐料。', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop' }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================
    
    // 渲染文化根源卡片
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

    // 渲染名菜画廊
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

    // 渲染烹饪学堂
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

    // 渲染环境展示
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
    
    // 打开通用弹窗 (核心逻辑)
    function openBanpoDiningModal(title, desc, imgUrl) {
        const modal = document.getElementById('banpo-dining-modal');
        
        // 容错：如果找不到弹窗，降级使用 alert
        if (!modal) {
            alert(`${title}\n\n${desc}`); 
            return;
        }

        const titleEl = document.getElementById('bd-modal-title');
        const descEl = document.getElementById('bd-modal-desc');
        const imgEl = document.getElementById('bd-modal-img');

        // 填充内容
        if(titleEl) titleEl.innerText = title;
        if(descEl) descEl.innerText = desc || '暂无详细描述...';
        
        // 图片处理：有图则显示，无图则隐藏图片容器
        if(imgEl) {
            if(imgUrl) {
                imgEl.src = imgUrl;
                imgEl.parentElement.style.display = 'block';
            } else {
                imgEl.parentElement.style.display = 'none';
            }
        }

        // 显示弹窗
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    // 关闭弹窗
    window.closeBanpoDiningModal = function() {
        const modal = document.getElementById('banpo-dining-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // 业务调用封装
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
        if(item) openBanpoDiningModal(item.title, `▶ (正在播放视频...)\n\n${item.desc}`, item.thumbnail);
    };

    // 点赞动效
    window.likeDish = function(id, btnElement) {
        const icon = btnElement.querySelector('i');
        if (icon.classList.contains('far')) {
            // 点赞动作
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#ff4757'; // 变成红色实心
            btnElement.classList.add('liked');
            
            // 可以在这里添加震动反馈 navigator.vibrate(50)
        } else {
            // 取消点赞
            icon.classList.remove('fas');
            icon.classList.add('far');
            icon.style.color = ''; // 恢复默认
            btnElement.classList.remove('liked');
        }
    };

    // 预订功能
    window.makeReservation = function() {
        const btn = document.querySelector('.bd-reserve-btn'); 
        if(btn) {
            const originalText = btn.innerHTML;
            // 按钮状态变化
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> 正在连接...';
            btn.classList.add('opacity-80');
            
            setTimeout(() => {
                alert('📞 已为您转接预订热线：0371-1234567\n\n请直接与客服沟通用餐人数和时间。');
                // 恢复按钮
                btn.innerHTML = originalText;
                btn.classList.remove('opacity-80');
            }, 800);
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

    // 自动检测并初始化 (确保 SPA 路由跳转后脚本能执行)
    setTimeout(() => {
        if(document.getElementById('banpo-dining')) {
            window.initBanpoDiningPage();
        }
    }, 100);

})();