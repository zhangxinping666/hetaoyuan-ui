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
// 2. 首页：服务百宝格配置 (Service Icons)
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

const iconSVGs = {
    bowl: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M6 14 Q6 20 10 23 Q16 26 22 23 Q26 20 26 14 L6 14 Z"/><rect x="27" y="8" width="2" height="4" rx="1"/><rect x="23" y="6" width="2" height="4" rx="1"/></svg>`,
    group: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="11" r="3.5"/><circle cx="9" cy="18" r="3"/><circle cx="23" cy="18" r="3"/><path d="M13 14 L13 18 L9 18" stroke-width="2" stroke="currentColor" fill="none"/><path d="M19 14 L19 18 L23 18" stroke-width="2" stroke="currentColor" fill="none"/></svg>`,
    mountain: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M4 24 L12 10 L16 16 L20 8 L28 24 Z"/></svg>`,
    flag: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="6" width="2" height="22" rx="1"/><path d="M9 6 Q14 8 19 6 L19 14 Q14 16 9 14 Z"/></svg>`,
    gift: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="16" width="12" height="10" rx="1"/><path d="M10 16 L10 12 Q10 10 12 10 L20 10 Q22 10 22 12 L22 16 Z"/><rect x="15.5" y="10" width="1" height="16"/><circle cx="13" cy="13" r="1.5"/></svg>`,
    smile: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10"/><circle cx="12" cy="14" r="1.8" fill="#fff"/><circle cx="20" cy="14" r="1.8" fill="#fff"/><path d="M11 18 Q16 21 21 18" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
    scroll: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M10 8 Q8 8 8 10 L8 22 Q8 24 10 24 L22 24 Q24 24 24 22 L24 10 Q24 8 22 8 Z"/><rect x="11" y="12" width="10" height="1.5" rx="0.5" fill="#fff"/><rect x="11" y="15.5" width="10" height="1.5" rx="0.5" fill="#fff"/><rect x="11" y="19" width="7" height="1.5" rx="0.5" fill="#fff"/></svg>`,
    sprout: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="14" width="2" height="10" rx="1"/><path d="M16 14 Q12 10 8 12 Q10 16 16 14 Z"/><path d="M16 14 Q20 10 24 12 Q22 16 16 14 Z"/><rect x="12" y="23" width="8" height="2" rx="1"/></svg>`
};

function renderServiceGrid() {
    const gridContainer = document.getElementById('service-grid');
    if (!gridContainer) return;
    gridContainer.innerHTML = services.map(service => `
        <div class="service-grid__item" onclick="handleServiceClick('${service.id}')" data-id="${service.id}">
            ${service.isHot ? '<span class="service-grid__hot-badge">热</span>' : ''}
            <div class="service-grid__icon">${iconSVGs[service.icon]}</div>
            <span class="service-grid__label">${service.name}</span>
        </div>
    `).join('');
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
function openBanpoDining() { loadSubPage('banpo-dining'); }
function openBanpoTalks() { loadSubPage('banpo-talks'); }
function openLiteraryCreation() { loadSubPage('literary-creation'); }
function openFarmingReading() { loadSubPage('farming-reading'); }
function openOneTableMeal() { loadSubPage('one-table-meal'); }

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

function showStaticPage(pageName) {
    console.log('📄 切换静态页面:', pageName);
    
    const screen = document.querySelector('.screen');
    if (!screen) {
        console.error('❌ 找不到 .screen 容器');
        return;
    }

    // 控制底部导航显示
    const bottomNav = document.querySelector('.bottom-nav');
    const rootPages = ['home', 'discussion', 'classics', 'customize', 'profile'];
    
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
    STATIC: ['home', 'classics', 'customize', 'discussion', 'profile'],
    // 动态页面 - 需要从 pages/ 目录加载
    DYNAMIC: [
        'bainong', 'guanshan', 'huilong', 'kangzhan',
        'one-table-meal', 'team-meal', 'specialty', 'event-planning', 
        'farming', 'family-park', 'leisure-tour', 'red-route',
        'banpo-dining', 'banpo-talks', 'literary-creation', 'farming-reading'
    ]
};

function showPage(pageName) {
    console.log('🔄 显示页面:', pageName);
    
    if (PAGE_TYPES.STATIC.includes(pageName)) {
        // 处理静态页面切换
        showStaticPage(pageName);
    } else if (PAGE_TYPES.DYNAMIC.includes(pageName)) {
        // 处理动态页面加载
        loadSubPage(pageName);
    } else {
        console.warn('⚠️ 未知页面类型:', pageName);
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
    const rootPages = ['home', 'discussion', 'classics', 'customize', 'profile'];
    
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

    // 激活对应的导航项
    const targetNavItem = document.getElementById(`b-nav-${pageName}`);
    if (targetNavItem) {
        targetNavItem.classList.add('active');
    }
}

function updateNavButtons(pageName) {
    // 一级页面列表 - 显示底部导航
    const rootPages = ['home', 'discussion', 'classics', 'customize', 'profile'];

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
    renderServiceGrid();
    
    console.log('✅ 应用初始化完成');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initializeApp);
