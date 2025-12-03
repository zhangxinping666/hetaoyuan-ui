// main.js - 核心架构文件

// ========== 1. 首页：窗棂格栅配置 ==========
const categories = [
    {
        id: 'bainong',
        title: '百农篇',
        subtitle: '农耕文明',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop'
    },
    {
        id: 'guanshan',
        title: '关山篇',
        subtitle: '山川地理',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
    },
    {
        id: 'huilong',
        title: '回龙篇',
        subtitle: '龙脉传承',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=400&fit=crop'
    },
    {
        id: 'kangzhan',
        title: '抗战篇',
        subtitle: '红色记忆',
        image: 'https://images.unsplash.com/photo-1569254979650-e066a2e6e1c2?w=400&h=400&fit=crop'
    }
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
    // 直接跳转，loadSubPage 会处理动态加载
    loadSubPage(categoryId);
}

// ========== 2. 首页：服务百宝格配置 ==========
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
    if (serviceId === 'one-table') {
        openOneTableMeal();
    } else if (serviceId === 'farming') {
        openFarmingReading();
    } else {
        alert('该服务页面开发中: ' + serviceId);
    }
}

// ========== 3. 全局导航入口函数 ==========
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

// ========== 4. 核心工具：动态脚本加载 ==========
function loadScript(url) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) {
            console.log(`✅ 脚本复用: ${url}`);
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

// ========== 5. 核心路由控制器 ==========
async function loadSubPage(pageName) {
    console.log('🔄 路由跳转:', pageName);
    try {
        // 1. 获取 HTML
        const url = `pages/${pageName}.html`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('HTML加载失败');
        const html = await response.text();
        const screen = document.querySelector('.screen');

        // 2. 页面切换
        const allPages = screen.querySelectorAll('.page');
        allPages.forEach(page => page.classList.remove('active'));

        let targetPage = document.getElementById(pageName);
        if (!targetPage) {
            screen.insertAdjacentHTML('beforeend', html);
            targetPage = document.getElementById(pageName);
        }

        if (targetPage) {
            targetPage.classList.add('active');
        } else {
            // 容错处理：如果没有 ID，激活最后一个元素
            const lastChild = screen.lastElementChild;
            if (lastChild) lastChild.classList.add('active');
        }

        // 3. 动态加载对应 JS 并初始化
        if (pageName === 'bainong') {
            await loadScript('js/bainong.js');
            if (window.initBainongPage) window.initBainongPage();
        }
        else if (pageName === 'guanshan') {
            await loadScript('js/guanshan.js');
            if (window.initGuanshanPage) window.initGuanshanPage();
        }
        else if (pageName === 'huilong') {
            await loadScript('js/huilong.js');
            if (window.initHuilongPage) window.initHuilongPage();
        }
        else if (pageName === 'kangzhan') {
            await loadScript('js/kangzhan.js');
            if (window.initKangzhanPage) window.initKangzhanPage();
        }
        else if (pageName === 'banpo-dining') {
            await loadScript('js/banpo-dining.js');
            if (window.initBanpoDiningPage) window.initBanpoDiningPage();
        }
        else if (pageName === 'banpo-talks') {
            await loadScript('js/banpo-talks.js');
            if (window.initBanpoTalksPage) window.initBanpoTalksPage();
        }
        else if (pageName === 'literary-creation') {
            await loadScript('js/literary-creation.js');
            if (window.initLiteraryCreationPage) window.initLiteraryCreationPage();
        }
        else if (pageName === 'farming-reading') {
            await loadScript('js/farming-reading.js');
            if (window.initFarmingReadingPage) window.initFarmingReadingPage();
        }
        else if (pageName === 'one-table-meal') {
            await loadScript('js/one-table-meal.js');
            if (window.initOneTableMealPage) window.initOneTableMealPage();
        }
        else if (pageName === 'team-meal') {
            await loadScript('js/team-meal.js');
            if (typeof window.initTeamMealPage === 'function') {
                window.initTeamMealPage();
            }
        }
        else if (pageName === 'leisure-tour') {
            await loadScript('js/leisure-tour.js');
            if (typeof window.initLeisureTourPage === 'function') {
                window.initLeisureTourPage();
            }
        }
        else if (pageName === 'red-route') {
            await loadScript('js/red-route.js');
            if (typeof window.initRedRoutePage === 'function') {
                window.initRedRoutePage();
            }
        }
        else if (pageName === 'specialty') {
            await loadScript('js/specialty.js');
            if (typeof window.initSpecialtyPage === 'function') {
                window.initSpecialtyPage();
            }
        }
        else if (pageName === 'family-park') {
            await loadScript('js/family-park.js');
            if (typeof window.initFamilyParkPage === 'function') {
                window.initFamilyParkPage();
            }
        }
        else if (pageName === 'event-planning') {
            await loadScript('js/event-planning.js');
            if (typeof window.initEventPlanningPage === 'function') {
                window.initEventPlanningPage();
            }
        }
        else if (pageName === 'farming') {
            await loadScript('js/farming.js');
            if (typeof window.initFarmingPage === 'function') {
                window.initFarmingPage();
            }
        }
        // 4. 更新 UI 状态
        updateNavButtons(pageName);
        screen.scrollTop = 0;

    } catch (error) {
        console.error('❌ 页面加载错误:', error);
        alert('页面加载失败，请检查网络');
    }
}

// ========== 6. 导航与状态管理 ==========
function goBack() {
    const screen = document.querySelector('.screen');
    const currentPage = screen.querySelector('.page.active');

    if (currentPage && currentPage.id !== 'home') {
        currentPage.remove(); // 销毁页面，节省内存并确保下次重新初始化
        const homePage = document.getElementById('home');
        if (homePage) homePage.classList.add('active');
        updateNavButtons('home');
    }
}

function updateNavButtons(pageName) {
    const navContainer = document.querySelector('.prototype-btn').parentElement;
    if (!navContainer) return;

    const pageConfig = {
        home: { icon: 'home', title: '首页' },
        bainong: { icon: 'seedling', title: '百农篇' },
        guanshan: { icon: 'mountain', title: '关山篇' },
        huilong: { icon: 'landmark', title: '回龙篇' },
        kangzhan: { icon: 'flag', title: '抗战篇' }
        // 其他页面可以继续添加...
    };

    navContainer.innerHTML = '';

    // 始终显示首页按钮
    const homeBtn = document.createElement('button');
    homeBtn.type = 'button';
    homeBtn.className = `prototype-btn ${pageName === 'home' ? 'active' : ''}`;
    homeBtn.onclick = () => goBack();
    homeBtn.innerHTML = `<i class="fas fa-home mr-2"></i>首页`;
    navContainer.appendChild(homeBtn);

    // 如果不是首页，显示当前页面按钮
    if (pageName !== 'home') {
        let title = '详情页';
        let icon = 'file-alt';

        // 尝试从配置中获取，或者根据页面ID推断
        if (pageConfig[pageName]) {
            title = pageConfig[pageName].title;
            icon = pageConfig[pageName].icon;
        } else if (pageName === 'one-table-meal') { title = '一桌餐'; icon = 'utensils'; }
        else if (pageName === 'banpo-dining') { title = '半坡餐饮'; icon = 'utensils'; }
        else if (pageName === 'banpo-talks') { title = '半坡讲谈'; icon = 'chalkboard-teacher'; }
        else if (pageName === 'literary-creation') { title = '数字书房'; icon = 'book-reader'; }
        else if (pageName === 'farming-reading') { title = '耕读有伴'; icon = 'cloud-sun'; }

        const pageBtn = document.createElement('button');
        pageBtn.type = 'button';
        pageBtn.className = 'prototype-btn active';
        pageBtn.innerHTML = `<i class="fas fa-${icon} mr-2"></i>${title}`;
        navContainer.appendChild(pageBtn);
    }

    // 更新底部 Tab 栏高亮
    updateNavActiveState(pageName);
}

function updateNavActiveState(pageId) {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
        item.classList.remove("active");
        item.classList.add("text-gray-500");
        item.style.color = "";
    });

    let activeNavId = null;
    // 简单的映射逻辑
    if (pageId === "home") activeNavId = "b-nav-home";
    else if (pageId === "banpo-talks" || pageId === "literary-creation") activeNavId = "b-nav-classics";
    else if (pageId === "banpo-dining" || pageId === "one-table-meal") activeNavId = "b-nav-customize";
    else if (pageId === "farming-reading") activeNavId = "b-nav-discussion";

    if (activeNavId) {
        const activeNav = document.getElementById(activeNavId);
        if (activeNav) {
            activeNav.classList.add("active");
            activeNav.classList.remove("text-gray-500");
            activeNav.style.color = "#C04851";
        }
    }
}

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeElements = document.querySelectorAll(".status-bar span:first-child");
    timeElements.forEach(el => el.textContent = `${hours}:${minutes}`);
}

// ========== 7. 首页特有逻辑 (横向滚动) ==========
function initDiscussionScroll() {
    // 这部分逻辑只属于首页，保留在此处
    const track = document.querySelector('.discussion-scroll__track');
    const cards = document.querySelectorAll('.scroll-card');
    const indicatorsContainer = document.getElementById('scroll-indicators');

    if (!track || cards.length === 0) return;

    let currentIndex = 0;

    // 创建指示器
    if (indicatorsContainer) {
        indicatorsContainer.innerHTML = Array.from(cards).map((_, index) => `
            <div class="discussion-scroll__indicator ${index === 0 ? 'discussion-scroll__indicator--active' : ''}" data-index="${index}"></div>
        `).join('');

        indicatorsContainer.querySelectorAll('.discussion-scroll__indicator').forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                track.scrollTo({ left: cards[index].offsetLeft - 16, behavior: 'smooth' });
            });
        });
    }

    // 滚动监听
    track.addEventListener('scroll', () => {
        const trackLeft = track.scrollLeft;
        let closestIndex = 0;
        let minDistance = Infinity;
        cards.forEach((card, index) => {
            const dist = Math.abs(trackLeft - (card.offsetLeft - 16));
            if (dist < minDistance) { minDistance = dist; closestIndex = index; }
        });

        if (closestIndex !== currentIndex) {
            currentIndex = closestIndex;
            document.querySelectorAll('.discussion-scroll__indicator').forEach((ind, i) => {
                if (i === currentIndex) ind.classList.add('discussion-scroll__indicator--active');
                else ind.classList.remove('discussion-scroll__indicator--active');
            });
        }
    });
}

// ========== 8. 应用入口 ==========
function initializeApp() {
    if (window.__appInitialized) return;

    // 显示首页
    const homePage = document.getElementById('home');
    if (homePage) homePage.classList.add('active');

    updateTime();
    initDiscussionScroll(); // 首页滑动组件
    window.__appInitialized = true;
}

document.addEventListener("DOMContentLoaded", function () {
    console.log('🚀 应用启动...');
    renderLatticeGrid();
    renderServiceGrid();
    initializeApp();

    // 暴露全局函数
    window.loadSubPage = loadSubPage;
    window.goBack = goBack;
    window.openBanpoDining = openBanpoDining;
    window.openBanpoTalks = openBanpoTalks;
    window.openLiteraryCreation = openLiteraryCreation;
    window.openFarmingReading = openFarmingReading;
    window.openOneTableMeal = openOneTableMeal;
    window.showBanpoText = showBanpoText;
    window.closeBanpoText = closeBanpoText;
    window.handleServiceClick = handleServiceClick;
    window.handleCategoryClick = handleCategoryClick;
});