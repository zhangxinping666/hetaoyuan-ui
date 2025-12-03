// js/kangzhan.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    const relics = [
        { id: 'uniform', name: '八路军军装', icon: 'fa-user-tie', desc: '抗战时期军服' },
        { id: 'rifle', name: '抗战步枪', icon: 'fa-crosshairs', desc: '缴获日军武器' },
        { id: 'document', name: '革命文书', icon: 'fa-file-alt', desc: '珍贵历史文献' },
        { id: 'medal', name: '抗战勋章', icon: 'fa-medal', desc: '英雄荣誉证明' },
        { id: 'photo', name: '历史照片', icon: 'fa-image', desc: '珍贵影像资料' },
        { id: 'letter', name: '家书', icon: 'fa-envelope', desc: '烈士遗书' }
    ];

    const mediaItems = [
        { id: 'story', title: '抗战讲述', subtitle: '老兵口述历史', icon: 'fa-microphone' },
        { id: 'song', title: '抗战凯歌', subtitle: '革命歌曲集', icon: 'fa-music' }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================
    function renderRelics() {
        const container = document.getElementById('relics-scroll');
        if (!container) return;
        container.innerHTML = relics.map(relic => `
            <div class="kz-relic-card" onclick="showRelicDetail('${relic.id}')">
                <div class="kz-relic-card__icon"><i class="fas ${relic.icon}"></i></div>
                <h3 class="kz-relic-card__title">${relic.name}</h3>
                <p class="kz-relic-card__desc">${relic.desc}</p>
            </div>
        `).join('');
    }

    function renderMediaList() {
        const container = document.getElementById('media-list');
        if (!container) return;
        container.innerHTML = mediaItems.map(item => `
            <div class="kz-media-item" onclick="playMedia('${item.id}')">
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
    // 3. 交互函数
    // ==========================================
    window.showHeroDetail = function(id) { alert('查看英雄事迹 (功能开发中)'); };
    window.showSection = function(section) { alert(`查看章节: ${section} (功能开发中)`); };
    window.showRelicDetail = function(id) { alert(`查看文物详情: ${id}`); };
    window.playMedia = function(id) { alert(`播放抗战音视频: ${id}`); };
    window.bookVisit = function() { alert('预约参观功能正在开发中'); };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initKangzhanPage = function() {
        console.log('🚩 抗战篇页面初始化');
        renderRelics();
        renderMediaList();
    };
})();