// js/kangzhan.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    const relics = [
        { id: 'uniform', name: '八路军军装', icon: 'fa-user-tie', desc: '抗战时期我军穿着的粗布军服，见证了艰苦卓绝的岁月。', img: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=400' },
        { id: 'rifle', name: '抗战步枪', icon: 'fa-crosshairs', desc: '缴获日军的三八式步枪，是战士们英勇杀敌的有力武器。', img: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400' },
        { id: 'document', name: '革命文书', icon: 'fa-file-alt', desc: '记录着作战计划与革命思想的珍贵历史文献。', img: '' }, // 测试无图情况
        { id: 'medal', name: '抗战勋章', icon: 'fa-medal', desc: '授予战斗英雄的荣誉勋章，每一枚都凝结着鲜血与荣光。', img: 'https://images.unsplash.com/photo-1614713568397-b3027e7432f8?w=400' },
        { id: 'photo', name: '历史照片', icon: 'fa-image', desc: '战地记者拍摄的珍贵影像资料，定格了历史的瞬间。', img: 'https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?w=400' },
        { id: 'letter', name: '家书', icon: 'fa-envelope', desc: '前线战士写给家人的最后一封信，读来令人潸然泪下。', img: '' }
    ];

    const mediaItems = [
        { id: 'story', title: '抗战讲述', subtitle: '老兵口述历史', icon: 'fa-microphone', content: '（音频播放中）张老回忆：那场战役打了三天三夜...' },
        { id: 'song', title: '抗战凯歌', subtitle: '革命歌曲集', icon: 'fa-music', content: '（音乐播放中）大刀向鬼子们的头上砍去...' }
    ];

    const heroData = {
        'yangjingyu': { name: '杨靖宇', desc: '东北抗日联军不仅是东北人民革命斗争的旗帜，也是中国人民抗日斗争的旗帜。', img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400' },
        'zhaoyiman': { name: '赵一曼', desc: '誓志为人不为家，跨江渡海走天涯。男儿若是全都好，女子缘何分外差？', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' }
    };

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================
    function renderRelics() {
        const container = document.getElementById('relics-scroll');
        if (!container) return;

        container.innerHTML = relics.map(relic => `
            <div class="kz-relic-card" onclick="window.showRelicDetail('${relic.id}')">
                <div class="kz-relic-image-box">
                    ${relic.img 
                        ? `<img src="${relic.img}" alt="${relic.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                           <div class="kz-relic-fallback" style="display:none"><i class="fas ${relic.icon}"></i></div>`
                        : `<div class="kz-relic-fallback"><i class="fas ${relic.icon}"></i></div>`
                    }
                </div>
                <h3 class="kz-relic-card__title">${relic.name}</h3>
                <p class="kz-relic-card__desc text-truncate">${relic.desc}</p>
            </div>
        `).join('');
    }

    function renderMediaList() {
        const container = document.getElementById('media-list');
        if (!container) return;

        container.innerHTML = mediaItems.map(item => `
            <div class="kz-media-item" onclick="window.playMedia('${item.id}')">
                <div class="kz-media-item__icon"><i class="fas ${item.icon}"></i></div>
                <div class="kz-media-item__content">
                    <h3 class="kz-media-item__title">${item.title}</h3>
                    <p class="kz-media-item__subtitle">${item.subtitle}</p>
                </div>
                <button type="button" class="kz-media-item__play"><i class="fas fa-play"></i></button>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================
    
    // 显示文物/英雄详情
    window.showRelicDetail = function(id) {
        const item = relics.find(r => r.id === id);
        openKangzhanModal(item ? item.name : '文物详情', item ? item.desc : '', item ? item.img : null);
    };

    window.showHeroDetail = function(id) {
        const item = heroData[id];
        openKangzhanModal(item ? item.name : '英雄事迹', item ? item.desc : '暂无详细介绍', item ? item.img : null);
    };

    window.playMedia = function(id) {
        const item = mediaItems.find(m => m.id === id);
        // 这里可以换成专门的音频播放器 UI，这里复用弹窗展示
        openKangzhanModal(item ? item.title : '媒体播放', item ? item.content : '正在加载资源...', null);
    };

    window.bookVisit = function() {
        // 模拟预约成功
        const btn = document.querySelector('.kz-book-btn');
        if(btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> 预约成功';
            btn.classList.add('bg-green-600');
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('bg-green-600');
            }, 2000);
        } else {
            alert('预约已提交，请留意短信通知。');
        }
    };

    // --- 内部通用弹窗逻辑 ---
    function openKangzhanModal(title, desc, imgUrl) {
        const modal = document.getElementById('kangzhan-modal');
        if (!modal) {
            alert(`${title}\n${desc}`); // 降级处理
            return;
        }

        const titleEl = document.getElementById('kz-modal-title');
        const descEl = document.getElementById('kz-modal-desc');
        const imgEl = document.getElementById('kz-modal-img');

        if(titleEl) titleEl.innerText = title;
        if(descEl) descEl.innerText = desc;
        
        if(imgEl) {
            if (imgUrl) {
                imgEl.src = imgUrl;
                imgEl.parentElement.style.display = 'block'; // 显示图片容器
            } else {
                imgEl.parentElement.style.display = 'none'; // 隐藏图片容器
            }
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    window.closeKangzhanModal = function() {
        const modal = document.getElementById('kangzhan-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initKangzhanPage = function() {
        console.log('🚩 抗战篇页面初始化');
        renderRelics();
        renderMediaList();
    };

    // 自动尝试初始化
    setTimeout(() => {
        if(document.getElementById('kangzhan')) {
            window.initKangzhanPage();
        }
    }, 100);

})();