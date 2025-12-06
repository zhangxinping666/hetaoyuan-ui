// js/guanshan.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    const mountains = [
        { id: 'huashan', name: '花山', desc: '花山以其奇峰异石、植被茂密著称，四季景色各异，是登山爱好者的首选。', image: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=400&h=400&fit=crop' },
        { id: 'houshan', name: '猴山', desc: '因山形酷似灵猴而得名，山中常有野生猕猴出没，自然生态保护完好。', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' },
        { id: 'tianzhu', name: '天柱', desc: '一柱擎天，直插云霄。天柱峰险峻异常，登上峰顶可俯瞰整个关山美景。', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop' },
        { id: 'yixiantian', name: '一线天', desc: '两壁夹峙，缝隙所见蓝天如一线，感叹大自然的鬼斧神工。', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop' }
    ];

    const waters = [
        { id: 'panguhe', name: '盘古河', desc: '盘古河水质清澈，蜿蜒流淌于山谷之间，滋养着关山的万物生灵。', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=400&fit=crop' },
        { id: 'tianxiang', name: '天像瀑布', desc: '飞流直下三千尺，疑是银河落九天。天像瀑布气势磅礴，声震山谷。', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=400&fit=crop' }
    ];

    const bentoItems = [
        { id: 'kangrizhan', name: '抗日展', size: 'large', type: 'history', desc: '铭记历史，缅怀先烈。这里陈列着抗战时期的珍贵文物。', image: 'https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?w=400&h=400&fit=crop' },
        { id: 'dizhiguan', name: '地质博物馆', size: 'large', type: 'science', desc: '探索地球奥秘，了解关山亿万年的地质变迁。', image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=400&h=400&fit=crop' },
        { id: 'babaodong', name: '八宝洞', size: 'medium', type: 'nature', desc: '洞内钟乳石千姿百态，传说藏有八件宝物。', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop' },
        { id: 'qiseguanshan', name: '七色关山', size: 'medium', type: 'nature', desc: '秋季的关山层林尽染，呈现出七彩斑斓的迷人画卷。', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=200&fit=crop' },
        { id: 'shici', name: '关山诗词', size: 'wide', type: 'culture', desc: '历代文人墨客留下的赞美关山的诗词歌赋。', image: '' },
        { id: 'zhangliangnao', name: '张良脑', size: 'medium', type: 'history', desc: '相传汉代名相张良曾在此隐居，留下许多传说。', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop' },
        { id: 'gushi', name: '关山故事', size: 'wide', type: 'culture', desc: '流传在民间的关山传说，每一个故事都动人心弦。', image: '' }
    ];

    const seasons = [
        { id: 'spring', name: '品春', season: 'spring', desc: '万物复苏，山花烂漫。', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop' },
        { id: 'summer', name: '品夏', season: 'summer', desc: '绿树成荫，清凉避暑。', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&h=400&fit=crop' },
        { id: 'autumn', name: '品秋', season: 'autumn', desc: '红叶满山，秋高气爽。', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
        { id: 'winter', name: '品冬', season: 'winter', desc: '银装素裹，冰雪奇缘。', image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&h=400&fit=crop' }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================
    function renderMountainGrid() {
        const container = document.getElementById('mountain-grid');
        if (!container) return;
        
        container.innerHTML = mountains.map(m => `
            <div class="mountain-card" onclick="window.showGuanshanDetail('mountain', '${m.id}')">
                <div class="mountain-card__image">
                    <img src="${m.image}" alt="${m.name}" onerror="this.src='https://via.placeholder.com/400x400/eee/999?text=${m.name}'">
                </div>
                <div class="mountain-card__title">${m.name}</div>
            </div>
        `).join('');
    }

    function renderWaterGrid() {
        const container = document.getElementById('water-grid');
        if (!container) return;
        
        container.innerHTML = waters.map(w => `
            <div class="water-card" onclick="window.showGuanshanDetail('water', '${w.id}')">
                <div class="water-card__image">
                    <img src="${w.image}" alt="${w.name}" onerror="this.src='https://via.placeholder.com/800x400/eee/999?text=${w.name}'">
                </div>
                <div class="water-card__title">${w.name}</div>
            </div>
        `).join('');
    }

    function renderBentoGrid() {
        const container = document.getElementById('bento-grid');
        if (!container) return;
        
        container.innerHTML = bentoItems.map(item => `
            <div class="bento-item bento-item--${item.size} ${item.type === 'culture' ? 'bento-item--culture' : ''}" 
                 onclick="window.showGuanshanDetail('bento', '${item.id}')">
                <div class="bento-item__bg">
                    ${item.image ? `<img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">` : ''}
                </div>
                <div class="bento-item__content"><h3 class="bento-item__title">${item.name}</h3></div>
            </div>
        `).join('');
    }

    function renderSeasonsGrid() {
        const container = document.getElementById('seasons-grid');
        if (!container) return;
        
        container.innerHTML = seasons.map(s => `
            <div class="season-card season-card--${s.season}" onclick="window.showGuanshanDetail('season', '${s.id}')">
                <div class="season-card__bg">
                    <img src="${s.image}" alt="${s.name}" onerror="this.src='https://via.placeholder.com/400x400/eee/999?text=${s.name}'">
                </div>
                <div class="season-card__content"><h3 class="season-card__title">${s.name}</h3></div>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================
    
    // 切换 仁者乐山 / 智者乐水
    window.switchNature = function(tab) {
        document.querySelectorAll('.nature-toggle__btn').forEach(btn => btn.classList.remove('active'));
        const btn = document.querySelector(`.nature-toggle__btn[onclick*="${tab}"]`); // 模糊匹配
        if(btn) btn.classList.add('active');

        document.querySelectorAll('.nature-content').forEach(content => content.classList.remove('active'));
        const content = document.getElementById(`${tab}-content`);
        if(content) content.classList.add('active');
    };

    // 显示景区简介 (全屏 Modal)
    window.showGuanshanIntro = function() {
        const modal = document.getElementById('guanshan-intro-modal');
        if (modal) { 
            modal.classList.add('active'); 
            // 可以在这里锁定 body 滚动
        } else {
            alert('景区简介内容正在补充中...');
        }
    };

    window.closeGuanshanIntro = function() {
        const modal = document.getElementById('guanshan-intro-modal');
        if (modal) { modal.classList.remove('active'); }
    };

    // 通用详情弹窗逻辑
    // type: 'mountain' | 'water' | 'bento' | 'season'
    window.showGuanshanDetail = function(type, id) {
        const modal = document.getElementById('guanshan-detail-modal'); // 假设页面里有这个通用弹窗
        
        // 查找数据
        let item = null;
        if(type === 'mountain') item = mountains.find(m => m.id === id);
        else if(type === 'water') item = waters.find(w => w.id === id);
        else if(type === 'bento') item = bentoItems.find(b => b.id === id);
        else if(type === 'season') item = seasons.find(s => s.id === id);

        if(!item) {
            console.warn('未找到数据:', type, id);
            return;
        }

        // 如果没有 Modal，降级处理
        if (!modal) {
            alert(`【${item.name}】\n${item.desc || '暂无描述'}`);
            return;
        }

        // 填充 Modal 数据
        const titleEl = document.getElementById('gs-modal-title');
        const descEl = document.getElementById('gs-modal-desc');
        const imgEl = document.getElementById('gs-modal-img');

        if(titleEl) titleEl.innerText = item.name;
        if(descEl) descEl.innerText = item.desc || '暂无详细描述...';
        if(imgEl) {
            if(item.image) {
                imgEl.src = item.image;
                imgEl.style.display = 'block';
            } else {
                imgEl.style.display = 'none'; // 纯文字条目隐藏图片
            }
        }

        // 显示 Modal
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    };

    window.closeGuanshanDetail = function() {
        const modal = document.getElementById('guanshan-detail-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initGuanshanPage = function() {
        console.log(' 关山篇页面初始化');
        renderMountainGrid();
        renderWaterGrid();
        renderBentoGrid();
        renderSeasonsGrid();
        
        // 默认激活“仁者乐山”
        window.switchNature('mountain');
    };

    // 自动尝试初始化
    setTimeout(() => {
        if(document.getElementById('guanshan')) {
            window.initGuanshanPage();
        }
    }, 100);

})();