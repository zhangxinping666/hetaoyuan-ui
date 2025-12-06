// js/customize.js
(function() {
    // ==========================================
    // 1. 服务百宝格数据（与main.js保持一致）
    // ==========================================
    const services = [
        { id: 'one-table', name: '一桌餐', icon: 'bowl', isHot: true },
        { id: 'team-meal', name: '团队餐', icon: 'group' },
        { id: 'leisure-tour', name: '休闲游览', icon: 'mountain' },
        { id: 'red-route', name: '红色路线', icon: 'flag' },
        { id: 'specialty', name: '半坡特产', icon: 'gift' },
        { id: 'family-park', name: '亲情乐园', icon: 'smile' },
        { id: 'event-planning', name: '活动策划', icon: 'scroll' },
        { id: 'farming', name: '种养认领', icon: 'sprout', isHot: true }
    ];

    // SVG 图标库（与main.js保持一致）
    const iconSVGs = {
        bowl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8h16M4 8c0 1.5 1 3 3 5s5 3 5 3 3-1 5-3 3-3.5 3-5M4 8V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/><path d="M8 14v4m8-4v4"/></svg>',
        group: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="16" cy="11" r="3"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>',
        mountain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
        flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>',
        gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="14" x="3" y="8" rx="2"/><path d="M12 8v13M7 8V5a3 3 0 1 1 6 0v3m-6 0h12"/></svg>',
        smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>',
        scroll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 17v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3m16 0V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v14a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v-2"/><path d="M6 8h12"/></svg>',
        sprout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>'
    };

    // ==========================================
    // 2. 渲染服务百宝格
    // ==========================================
    function renderServiceGrid() {
        console.log('🎨 渲染定制服务模块...');
        const gridContainer = document.getElementById('service-grid');
        if (!gridContainer) {
            console.warn('❌ 找不到 service-grid 容器');
            return;
        }

        gridContainer.innerHTML = services.map(service => `
            <div class="service-grid__item" onclick="handleServiceClick('${service.id}')" data-id="${service.id}">
                ${service.isHot ? '<span class="service-grid__hot-badge">热</span>' : ''}
                <div class="service-grid__icon">${iconSVGs[service.icon]}</div>
                <span class="service-grid__label">${service.name}</span>
            </div>
        `).join('');

        console.log('✅ 服务百宝格渲染完成，共', services.length, '个服务');
    }

    // ==========================================
    // 3. 服务点击处理
    // ==========================================
    window.handleServiceClick = function(serviceId) {
        console.log('点击服务:', serviceId);

        // 映射表：服务ID -> HTML/JS文件名
        const routeMap = {
            'one-table': 'one-table-meal',
            'team-meal': 'team-meal',
            'leisure-tour': 'leisure-tour',
            'red-route': 'red-route',
            'specialty': 'specialty',
            'family-park': 'family-park',
            'event-planning': 'event-planning',
            'farming': 'farming'
        };

        if (routeMap[serviceId]) {
            if (window.loadSubPage) {
                window.loadSubPage(routeMap[serviceId]);
            } else {
                console.error('loadSubPage 函数未找到');
            }
        } else {
            alert('该服务页面开发中: ' + serviceId);
        }
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initCustomizePage = function() {
        console.log('🎨 定制服务页面初始化');
        renderServiceGrid();
    };

    // 自动检测并初始化
    setTimeout(() => {
        if (document.getElementById('customize')) {
            console.log('📄 检测到customize页面，开始初始化...');
            window.initCustomizePage();
        }
    }, 100);

})();