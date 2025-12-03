// js/guanshan.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    const mountains = [
        { id: 'huashan', name: '花山', image: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=400&h=400&fit=crop' },
        { id: 'houshan', name: '猴山', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' },
        { id: 'tianzhu', name: '天柱', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop' },
        { id: 'yixiantian', name: '一线天', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' }
    ];

    const waters = [
        { id: 'panguhe', name: '盘古河', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=400&fit=crop' },
        { id: 'tianxiang', name: '天像瀑布', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=400&fit=crop' }
    ];

    const bentoItems = [
        { id: 'kangrizhan', name: '抗日展', size: 'large', type: 'history', image: 'https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?w=400&h=400&fit=crop' },
        { id: 'dizhiguan', name: '地质博物馆', size: 'large', type: 'science', image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=400&h=400&fit=crop' },
        { id: 'babaodong', name: '八宝洞', size: 'medium', type: 'nature', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop' },
        { id: 'qiseguanshan', name: '七色关山', size: 'medium', type: 'nature', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop' },
        { id: 'shici', name: '关山诗词', size: 'wide', type: 'culture', image: '' },
        { id: 'zhangliangnao', name: '张良脑', size: 'medium', type: 'history', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop' },
        { id: 'gushi', name: '关山故事', size: 'wide', type: 'culture', image: '' }
    ];

    const seasons = [
        { id: 'spring', name: '品春', season: 'spring', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop' },
        { id: 'summer', name: '品夏', season: 'summer', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&h=400&fit=crop' },
        { id: 'autumn', name: '品秋', season: 'autumn', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
        { id: 'winter', name: '品冬', season: 'winter', image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&h=400&fit=crop' }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================
    function renderMountainGrid() {
        const container = document.getElementById('mountain-grid');
        if (!container) return;
        container.innerHTML = mountains.map(m => `
            <div class="mountain-card" onclick="showMountainDetail('${m.id}')">
                <div class="mountain-card__image"><img src="${m.image}" alt="${m.name}"></div>
                <div class="mountain-card__title">${m.name}</div>
            </div>
        `).join('');
    }

    function renderWaterGrid() {
        const container = document.getElementById('water-grid');
        if (!container) return;
        container.innerHTML = waters.map(w => `
            <div class="water-card" onclick="showWaterDetail('${w.id}')">
                <div class="water-card__image"><img src="${w.image}" alt="${w.name}"></div>
                <div class="water-card__title">${w.name}</div>
            </div>
        `).join('');
    }

    function renderBentoGrid() {
        const container = document.getElementById('bento-grid');
        if (!container) return;
        container.innerHTML = bentoItems.map(item => `
            <div class="bento-item bento-item--${item.size} ${item.type === 'culture' ? 'bento-item--culture' : ''}" onclick="showBentoDetail('${item.id}')">
                <div class="bento-item__bg">${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}</div>
                <div class="bento-item__content"><h3 class="bento-item__title">${item.name}</h3></div>
            </div>
        `).join('');
    }

    function renderSeasonsGrid() {
        const container = document.getElementById('seasons-grid');
        if (!container) return;
        container.innerHTML = seasons.map(s => `
            <div class="season-card season-card--${s.season}" onclick="showSeasonDetail('${s.id}')">
                <div class="season-card__bg"><img src="${s.image}" alt="${s.name}"></div>
                <div class="season-card__content"><h3 class="season-card__title">${s.name}</h3></div>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数
    // ==========================================
    window.switchNature = function(tab) {
        document.querySelectorAll('.nature-toggle__btn').forEach(btn => btn.classList.remove('active'));
        const btn = document.querySelector(`[data-tab="${tab}"]`);
        if(btn) btn.classList.add('active');

        document.querySelectorAll('.nature-content').forEach(content => content.classList.remove('active'));
        const content = document.getElementById(`${tab}-content`);
        if(content) content.classList.add('active');
    };

    window.showGuanshanIntro = function() {
        const modal = document.getElementById('guanshan-intro-modal');
        if (modal) { modal.classList.add('active'); document.body.style.overflow = 'hidden'; }
    };

    window.closeGuanshanIntro = function() {
        const modal = document.getElementById('guanshan-intro-modal');
        if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
    };

    window.showMountainDetail = function(id) { alert(`查看山峰: ${id}`); };
    window.showWaterDetail = function(id) { alert(`查看水景: ${id}`); };
    window.showBentoDetail = function(id) { alert(`查看观天下: ${id}`); };
    window.showSeasonDetail = function(id) { alert(`查看四季: ${id}`); };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initGuanshanPage = function() {
        console.log('⛰️ 关山篇页面初始化');
        renderMountainGrid();
        renderWaterGrid();
        renderBentoGrid();
        renderSeasonsGrid();
    };
})();