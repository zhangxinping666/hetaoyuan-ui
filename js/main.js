// js/main.js - 最终完整版

// ==========================================
// 1. 首页：窗棂格栅配置 (Header Grid)
// ==========================================
const categories = [
    { id: 'bainong', title: '百农篇', subtitle: '农耕文明', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop' },
    { id: 'guanshan', title: '关山篇', subtitle: '山川地理', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' },
    { id: 'huilong', title: '回龙篇', subtitle: '龙脉传承', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=400&fit=crop' },
    { id: 'kangzhan', title: '抗战篇', subtitle: '红色记忆', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop' }
];

function renderLatticeGrid() {
    const gridContainer = document.getElementById('lattice-grid');
    if (!gridContainer) return;
    gridContainer.innerHTML = categories.map(category => `
        <div class="lattice-card" onclick="window.handleCategoryClick('${category.id}')" data-id="${category.id}">
            <img class="lattice-card__image" src="${category.image}" alt="${category.title}" onerror="this.style.backgroundColor='#eee'" />
            <div class="lattice-card__mask"></div>
            <div class="lattice-card__content">
                <span class="lattice-card__title">${category.title}</span>
                <div class="lattice-card__seal"><span class="lattice-card__seal-text">半坡</span></div>
            </div>
        </div>
    `).join('');
}

function handleCategoryClick(categoryId) {
    console.log('点击分类:', categoryId);
    loadSubPage(categoryId);
}

// ==========================================
// 2. 首页：服务百宝格配置
// ==========================================

const services = [
    {
        id: 'one-table',
        name: '一桌餐',
        desc: '林间野趣 · 顺时而食',
        image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=200&auto=format&fit=crop',
        badge: '热推',
        badgeType: 'hot'
    },
    {
        id: 'team-meal',
        name: '团队餐',
        desc: '高端定制 · 尊贵礼遇',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=200&auto=format&fit=crop',
        badge: null
    },
    {
        id: 'leisure-tour',
        name: '休闲游览',
        desc: '行到水穷 · 坐看云起',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=200&auto=format&fit=crop',
        badge: null
    },
    {
        id: 'red-route',
        name: '红色路线',
        desc: '追寻足迹 · 薪火相传',
        image: 'https://images.unsplash.com/photo-1542226601-38275531fa43?q=80&w=200&auto=format&fit=crop',
        badge: null
    },
    {
        id: 'specialty',
        name: '半坡特产',
        desc: '太行馈赠 · 地道风味',
        image: 'https://images.unsplash.com/photo-1596913755018-80df2651475c?q=80&w=200&auto=format&fit=crop',
        badge: null
    },
    {
        id: 'family-park',
        name: '亲情乐园',
        desc: '寓教于乐 · 亲子时光',
        image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=200&auto=format&fit=crop',
        badge: null
    },
    {
        id: 'event-plan',
        name: '活动策划',
        desc: '创意无限 · 精彩纷呈',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=200&auto=format&fit=crop',
        badge: null
    },
    {
        id: 'farming',
        name: '种养认领',
        desc: '归园田居 · 悠然自得',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=200&auto=format&fit=crop',
        badge: '上新',
        badgeType: 'new'
    }
];

// 2. 渲染函数
function renderServiceGrid() {
    console.log('🎨 渲染定制服务模块...');
    const gridContainer = document.getElementById('service-grid');

    if (!gridContainer) {
        console.warn('❌ 找不到 service-grid 容器');
        return;
    }

    gridContainer.innerHTML = services.map(service => `
        <div class="customize-card" onclick="handleServiceClick('${service.id}')">
            <div class="customize-card__image">
                <img src="${service.image}" alt="${service.name}" onerror="this.src='https://via.placeholder.com/100'">
                ${service.badge ? `<span class="customize-card__badge customize-card__badge--${service.badgeType}">${service.badge}</span>` : ''}
            </div>
            <div class="customize-card__content">
                <h3 class="customize-card__title">${service.name}</h3>
                <p class="customize-card__desc">${service.desc}</p>
            </div>
            <div class="customize-card__arrow">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    `).join('');

    console.log('✅ 服务卡片渲染完成，共', services.length, '个服务');
}


function handleServiceClick(serviceId) {
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
        loadSubPage(routeMap[serviceId]);
    } else {
        alert('该服务页面开发中: ' + serviceId);
    }
}

// ==========================================
// 3. 全局导航入口函数
// ==========================================
// 详情页跳转函数
function openBanpoDining() { loadSubPage('banpo-dining'); }
function openBanpoTalks() { loadSubPage('banpo-talks'); }
function openLiteraryCreation() { loadSubPage('literary-creation'); }
function openFarmingReading() { loadSubPage('farming-reading'); }
function openOneTableMeal() { loadSubPage('one-table-meal'); }
function openTeamMeal() { loadSubPage('team-meal'); }
function openLeisureTour() { loadSubPage('leisure-tour'); }
function openRedRoute() { loadSubPage('red-route'); }
function openSpecialty() { loadSubPage('specialty'); }
function openFamilyPark() { loadSubPage('family-park'); }
function openEventPlanning() { loadSubPage('event-planning'); }
function openFarming() { loadSubPage('farming'); }
function openHuiLong() { loadSubPage('huilong'); }
function openXuankong() { loadSubPage('xuankong'); }

// 首页弹窗控制
function showBanpoText() {
    const modal = document.getElementById('banpo-modal');
    if (modal) { modal.classList.add('active'); document.body.style.overflow = 'hidden'; }
}
function closeBanpoText() {
    const modal = document.getElementById('banpo-modal');
    if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
}

// ==========================================
// 4. 核心工具：动态脚本加载
// ==========================================
function loadScript(url) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => { console.log(`✅ 脚本加载成功: ${url}`); resolve(); };
        script.onerror = () => { console.error(`❌ 脚本加载失败: ${url}`); reject(new Error(`Script load error`)); };
        document.body.appendChild(script);
    });
}
async function loadPageScript(pageName) {
    try {
        // 尝试加载对应的 JavaScript 文件
        const scriptUrl = `js/${pageName}.js`;
        await loadScript(scriptUrl);
        console.log(`✅ 页面脚本加载成功: ${pageName}`);
    } catch (error) {
        // 如果没有对应的 JS 文件，不报错，只是记录
        console.log(`ℹ️ 页面 ${pageName} 没有对应的 JS 文件，跳过加载`);
    }
}
// ==========================================
// 5. 核心路由控制器
// ==========================================
async function loadSubPage(pageName) {
    try {
        console.log('🔄 加载动态页面:', pageName);

        const screen = document.querySelector('.screen');
        if (!screen) {
            console.error('❌ 找不到 .screen 容器');
            return;
        }

        // 强制隐藏底部导航（二级页面）
        const bottomNav = document.querySelector('.bottom-nav');
        if (bottomNav) {
            bottomNav.style.display = 'none';
            bottomNav.classList.add('hidden');
        }

        // 隐藏当前页面
        const currentPage = screen.querySelector('.page.active');
        if (currentPage) currentPage.classList.remove('active');

        // 检查页面是否已存在
        let targetPage = document.getElementById(pageName);
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.scrollTop = 0;
            updateNavButtons(pageName);
            return;
        }

        // 动态加载页面
        const response = await fetch(`pages/${pageName}.html`);
        if (!response.ok) throw new Error(`页面文件不存在: pages/${pageName}.html`);

        const html = await response.text();

        // 创建新页面容器
        const newPage = document.createElement('div');
        newPage.id = pageName;
        newPage.className = 'page active';
        newPage.style.cssText = `
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
        `;
        newPage.innerHTML = html;

        screen.appendChild(newPage);

        // 尝试加载对应的 JavaScript 文件（可选）
        await loadPageScript(pageName);

        // 更新导航状态
        updateNavButtons(pageName);

        // 确保页面滚动到顶部
        newPage.scrollTop = 0;

    } catch (error) {
        console.error('❌ 加载页面失败:', error);
        alert(`页面加载失败: ${error.message}`);
        // 回退到首页
        showStaticPage('home');
    }
}

function showStaticPage(pageName) {
    console.log('📄 切换静态页面:', pageName);

    const screen = document.querySelector('.screen');
    if (!screen) {
        console.error('❌ 找不到 .screen 容器');
        return;
    }

    // 控制底部导航显示
    const bottomNav = document.querySelector('.bottom-nav');
    const rootPages = ['home', 'classics', 'customize'];

    if (bottomNav) {
        if (rootPages.includes(pageName)) {
            bottomNav.style.display = 'flex';
            bottomNav.style.visibility = 'visible';
            bottomNav.classList.remove('hidden');
        } else {
            bottomNav.style.display = 'none';
            bottomNav.style.visibility = 'hidden';
            bottomNav.classList.add('hidden');
        }
    }

    // 隐藏所有页面
    const allPages = screen.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    // 显示目标页面
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
        // 滚动到顶部
        targetPage.scrollTop = 0;
    } else {
        console.error('❌ 找不到页面:', pageName);
        return;
    }

    // 更新导航状态
    updateNavButtons(pageName);
    updateNavActiveState(pageName);
}

// ==========================================
// 6. 导航与状态管理 - 重构版
// ==========================================

// 定义页面类型
const PAGE_TYPES = {
    // 静态页面 - 已在 index.html 中定义
    STATIC: ['home'],
    // 动态页面 - 需要从 pages/ 目录加载
    DYNAMIC: [
        'xuankong',
        'classics', 'customize', 'discussion', 'profile',
        'bainong', 'guanshan', 'huilong', 'kangzhan',
        'one-table-meal', 'team-meal', 'specialty', 'event-planning',
        'farming', 'family-park', 'leisure-tour', 'red-route',
        'banpo-dining', 'banpo-talks', 'literary-creation', 'farming-reading'
    ]
};

function showPage(pageId) {
    console.log('切换到页面:', pageId);

    // 检查是否是动态页面
    if (PAGE_TYPES.DYNAMIC.includes(pageId)) {
        // 如果是动态页面，使用 loadSubPage 加载
        const existingPage = document.getElementById(pageId);
        if (existingPage) {
            // 页面已加载，直接显示
            showStaticPage(pageId);
        } else {
            // 页面未加载，动态加载
            loadSubPage(pageId);
        }
        return;
    }

    // 1. 隐藏所有页面
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. 显示目标页面 (如果页面存在)
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.scrollTop = 0; // 切换时回到顶部
    } else {
        // 如果页面不存在（还没写），临时动态生成一个占位，防止点击没反应
        console.warn('页面不存在，生成临时占位:', pageId);
        createPlaceholderPage(pageId);
    }

    // 3. 更新底部 Tab 栏的高亮状态
    updateBottomNav(pageId);
}
// 辅助：如果 HTML 里没写那个 div，自动生成一个（防止报错）
function createPlaceholderPage(pageId) {
    const screen = document.querySelector('.screen');
    const newPage = document.createElement('div');
    newPage.id = pageId;
    newPage.className = 'page active';
    newPage.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-gray-400">
            <i class="fas fa-hammer text-4xl mb-4"></i>
            <p>${pageId} 页面开发中...</p>
        </div>
    `;
    screen.appendChild(newPage);
}

// 暴露给全局，不然 HTML onclick 找不到
window.showPage = showPage;
// 更新底部图标颜色
function updateBottomNav(activePageId) {
    // 移除所有高亮
    const allNavItems = document.querySelectorAll('.nav-item');
    allNavItems.forEach(item => item.classList.remove('active'));

    // 添加当前高亮 (前提是你的 HTML 里 nav-item 的 id 是 "b-nav-xxx")
    const targetNav = document.getElementById(`b-nav-${activePageId}`);
    if (targetNav) {
        targetNav.classList.add('active');
    }
}
function showStaticPage(pageName) {
    const screen = document.querySelector('.screen');
    if (!screen) {
        console.error('❌ 找不到 .screen 容器');
        return;
    }

    // 控制底部导航显示
    const bottomNav = document.querySelector('.bottom-nav');
    const rootPages = ['home', 'classics', 'customize'];

    if (bottomNav) {
        if (rootPages.includes(pageName)) {
            bottomNav.style.display = 'flex';
            bottomNav.style.visibility = 'visible';
            bottomNav.classList.remove('hidden');
        } else {
            bottomNav.style.display = 'none';
            bottomNav.style.visibility = 'hidden';
            bottomNav.classList.add('hidden');
        }
    }

    // 隐藏所有页面
    const allPages = screen.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    // 显示目标页面
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
        // 滚动到顶部
        targetPage.scrollTop = 0;
    } else {
        console.error('❌ 找不到页面:', pageName);
        return;
    }

    // 更新导航状态
    updateNavButtons(pageName);
    updateNavActiveState(pageName);
}

async function loadSubPage(pageName) {
    try {

        const screen = document.querySelector('.screen');
        if (!screen) {
            console.error('❌ 找不到 .screen 容器');
            return;
        }

        // 控制底部导航显示（根据页面类型）
        const rootPages = ['home', 'classics', 'customize'];
        const bottomNav = document.querySelector('.bottom-nav');
        if (bottomNav) {
            if (pageName === 'xuankong') {
                bottomNav.style.display = 'flex';
                bottomNav.classList.remove('hidden');
            } else {
                bottomNav.style.display = 'none';
                bottomNav.classList.add('hidden');
            }
        }
        if (bottomNav) {
            if (rootPages.includes(pageName)) {
                // 一级页面：显示底部导航
                bottomNav.style.display = 'flex';
                bottomNav.style.visibility = 'visible';
                bottomNav.classList.remove('hidden');
            } else {
                // 二级页面：隐藏底部导航
                bottomNav.style.display = 'none';
                bottomNav.classList.add('hidden');
            }
        }

        // 隐藏当前页面
        const currentPage = screen.querySelector('.page.active');
        if (currentPage) currentPage.classList.remove('active');

        // 检查页面是否已存在
        let targetPage = document.getElementById(pageName);
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.scrollTop = 0;
            updateNavButtons(pageName);
            return;
        }

        // 动态加载页面
        const response = await fetch(`pages/${pageName}.html`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const html = await response.text();

        // 创建新页面容器
        const newPage = document.createElement('div');
        newPage.id = pageName;
        newPage.className = 'page active';
        newPage.style.cssText = `
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
        `;
        if (pageName === 'xuankong') {
            newPage.style.paddingBottom = '60px';
        }

        newPage.innerHTML = html;

        screen.appendChild(newPage);

        // 加载对应的 JavaScript 文件
        await loadPageScript(pageName);

        // 更新导航状态
        updateNavButtons(pageName);

        // 确保页面滚动到顶部
        newPage.scrollTop = 0;

    } catch (error) {
        console.error('❌ 加载页面失败:', error);
        // 回退到首页
        showStaticPage('home');
    }
}

function updateNavActiveState(pageName) {
    // 更新底部导航栏的激活状态
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    let navId = pageName;
    if (pageName === 'xuankong') navId = 'discussion';

    // 把下面这行的变量名改成 navId
    const targetNavItem = document.getElementById(`b-nav-${navId}`);
    if (targetNavItem) {
        targetNavItem.classList.add('active');
    }

}

function updateNavButtons(pageName) {
    // 一级页面列表 - 显示底部导航
    const rootPages = ['home', 'classics', 'customize'];

    // 控制底部导航栏显示/隐藏
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) {
        if (rootPages.includes(pageName)) {
            bottomNav.style.display = 'flex';
        } else {
            bottomNav.style.display = 'none';
        }
    }

    // 更新右侧悬浮导航
    updatePrototypeNav(pageName);
}

function updatePrototypeNav(pageName) {
    const navContainer = document.querySelector('.prototype-btn')?.parentElement;
    if (!navContainer) return;

    const pageConfig = {
        home: { icon: 'home', title: '首页' },
        classics: { icon: 'book-open', title: '经典典藏' },
        discussion: { icon: 'comments', title: '悬空民宿' },
        customize: { icon: 'clipboard-list', title: '我的订单' },
        profile: { icon: 'user', title: '个人中心' },
        bainong: { icon: 'seedling', title: '百农篇' },
        guanshan: { icon: 'mountain', title: '关山篇' },
        huilong: { icon: 'landmark', title: '回龙篇' },
        kangzhan: { icon: 'flag', title: '抗战篇' },
        'one-table-meal': { icon: 'utensils', title: '一桌餐' },
        'banpo-dining': { icon: 'utensils', title: '半坡餐饮' },
        'banpo-talks': { icon: 'comments', title: '半坡讲坛' },
        'literary-creation': { icon: 'pen-fancy', title: '文学创作' },
        'farming-reading': { icon: 'book', title: '耕读' },
        'specialty': { icon: 'gift', title: '半坡特产' },
        'family-park': { icon: 'smile', title: '亲情乐园' },
        'event-planning': { icon: 'scroll', title: '活动策划' },
        'farming': { icon: 'seedling', title: '种养认领' },
        'team-meal': { icon: 'users', title: '团队餐' },
        'red-route': { icon: 'flag', title: '红色路线' },
        'leisure-tour': { icon: 'mountain', title: '休闲游览' }
    };

    navContainer.innerHTML = '';

    // 首页按钮
    const homeBtn = document.createElement('button');
    homeBtn.type = 'button';
    homeBtn.className = `prototype-btn ${pageName === 'home' ? 'active' : ''}`;
    homeBtn.onclick = () => goBack();
    homeBtn.innerHTML = `<i class="fas fa-home mr-2"></i>首页`;
    navContainer.appendChild(homeBtn);

    // 当前页面按钮（如果不是首页）
    if (pageName !== 'home' && pageConfig[pageName]) {
        const { icon, title } = pageConfig[pageName];
        const pageBtn = document.createElement('button');
        pageBtn.type = 'button';
        pageBtn.className = 'prototype-btn active';
        pageBtn.innerHTML = `<i class="fas fa-${icon} mr-2"></i>${title}`;
        navContainer.appendChild(pageBtn);
    }
}

function goBack() {
    const screen = document.querySelector('.screen');
    const currentPage = screen.querySelector('.page.active');

    if (currentPage && currentPage.id !== 'home') {
        // 如果是动态页面，移除它
        if (PAGE_TYPES.DYNAMIC.includes(currentPage.id)) {
            currentPage.remove();
        } else {
            // 如果是静态页面，只是隐藏
            currentPage.classList.remove('active');
        }
    }

    // 显示首页
    showStaticPage('home');
}

// 页面初始化
function initializeApp() {
    console.log('🚀 应用初始化');

    // 确保首页激活
    showStaticPage('home');

    // 渲染首页内容
    renderLatticeGrid();
    // renderServiceGrid(); // 已移到customize页面，不再在首页渲染

    // 初始化新版首页 (V2.2)
    if (window.initHomePage) {
        window.initHomePage();
    }

    console.log('✅ 应用初始化完成');
}
// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initializeApp);

// 暴露函数和数据给 HTML 行内 onclick 使用
window.handleCategoryClick = handleCategoryClick;
window.handleServiceClick = handleServiceClick;
window.loadSubPage = loadSubPage;
window.goBack = goBack;
window.categories = categories;  // 暴露 categories 数据

// 暴露详情页跳转函数
window.openBanpoDining = openBanpoDining;
window.openBanpoTalks = openBanpoTalks;
window.openLiteraryCreation = openLiteraryCreation;
window.openFarmingReading = openFarmingReading;
window.openOneTableMeal = openOneTableMeal;
window.openTeamMeal = openTeamMeal;
window.openLeisureTour = openLeisureTour;
window.openRedRoute = openRedRoute;
window.openSpecialty = openSpecialty;
window.openFamilyPark = openFamilyPark;
window.openEventPlanning = openEventPlanning;
window.openFarming = openFarming;
window.openXuankong = openXuankong;
// ==========================================
// 搜索功能
// ==========================================

// 搜索关键词映射到页面/功能
const searchMapping = {
    '悬空民宿': () => showPage('discussion'),
    '民宿': () => showPage('discussion'),
    '住宿': () => showPage('discussion'),
    '半坡餐饮': () => openBanpoDining(),
    '餐饮': () => openBanpoDining(),
    '美食': () => openBanpoDining(),
    '一桌餐': () => openOneTableMeal(),
    '团队餐': () => openTeamMeal(),
    '团餐': () => openTeamMeal(),
    '半坡讲谈': () => openBanpoTalks(),
    '讲谈': () => showPage('classics'),
    '讲座': () => openBanpoTalks(),
    '文艺创作': () => openLiteraryCreation(),
    '创作': () => openLiteraryCreation(),
    '耕读': () => openFarmingReading(),
    '特产': () => openSpecialty(),
    '核桃': () => openSpecialty(),
    '休闲游': () => openLeisureTour(),
    '旅游': () => openLeisureTour(),
    '红色路线': () => openRedRoute(),
    '亲子': () => openFamilyPark(),
    '活动': () => openEventPlanning(),
    '定制': () => showPage('customize'),
    '百农': () => loadSubPage('bainong'),
    '关山': () => loadSubPage('guanshan'),
    '回龙': () => loadSubPage('huilong'),
    '抗战': () => loadSubPage('kangzhan')
};

// 执行搜索
window.performSearch = function () {
    const input = document.getElementById('home-search-input');
    if (!input) return;

    const keyword = input.value.trim();

    if (!keyword) {
        alert('请输入搜索关键词');
        return;
    }

    // 查找匹配的关键词
    let found = false;
    for (let key in searchMapping) {
        if (keyword.includes(key) || key.includes(keyword)) {
            searchMapping[key]();
            input.value = ''; // 清空搜索框
            found = true;
            break;
        }
    }

    if (!found) {
        alert(`未找到"${keyword}"相关内容\n\n可以搜索：悬空民宿、半坡餐饮、一桌餐、半坡讲谈、特产、休闲游等`);
    }
};

// 快速搜索（点击标签）
window.quickSearch = function (keyword) {
    const input = document.getElementById('home-search-input');
    if (input) {
        input.value = keyword;
    }

    if (searchMapping[keyword]) {
        searchMapping[keyword]();
        if (input) input.value = ''; // 清空搜索框
    } else {
        performSearch();
    }
};

document.addEventListener('DOMContentLoaded', initializeApp);