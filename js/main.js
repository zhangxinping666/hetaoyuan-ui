// 核桃园 - 应用初始化

// ========== 窗棂格栅数据配置 ==========
const categories = [
    {
        id: 'bainong',
        title: '百农篇',
        subtitle: '农耕文明',
        // 农耕田园风光
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop'
    },
    {
        id: 'guanshan',
        title: '关山篇',
        subtitle: '山川地理',
        // 山川风景
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop'
    },
    {
        id: 'huilong',
        title: '回龙篇',
        subtitle: '龙脉传承',
        // 中国传统龙文化/古建筑
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=400&fit=crop'
    },
    {
        id: 'kangzhan',
        title: '抗战篇',
        subtitle: '红色记忆',
        // 红色记忆/历史纪念
        image: 'https://images.unsplash.com/photo-1569254979650-e066a2e6e1c2?w=400&h=400&fit=crop'
    }
];

// 渲染窗棂格栅卡片
function renderLatticeGrid() {
    const gridContainer = document.getElementById('lattice-grid');
    if (!gridContainer) {
        console.error('找不到 lattice-grid 容器');
        return;
    }

    gridContainer.innerHTML = categories.map(category => `
        <div class="lattice-card" onclick="window.handleCategoryClick('${category.id}')" data-id="${category.id}">
            <!-- 底图 -->
            <img
                class="lattice-card__image"
                src="${category.image}"
                alt="${category.title}"
                onerror="this.src='https://ai-public.mastergo.com/ai/img_res/39b0633134a42e465d27e770cc9edf01.jpg'"
            />
            <!-- 遮罩层 -->
            <div class="lattice-card__mask"></div>
            <!-- 文字内容 -->
            <div class="lattice-card__content">
                <span class="lattice-card__title">${category.title}</span>
                <div class="lattice-card__seal">
                    <span class="lattice-card__seal-text">半坡</span>
                </div>
            </div>
        </div>
    `).join('');

    console.log('窗棂格栅渲染完成，共', categories.length, '个分类');
}

// 处理分类卡片点击
function handleCategoryClick(categoryId) {
    console.log('=== handleCategoryClick 被调用 ===');
    console.log('点击分类:', categoryId);
    console.log('分类类型:', typeof categoryId);

    // 根据不同分类跳转到对应页面
    if (categoryId === 'bainong') {
        console.log('✅ 准备加载百农篇页面...');
        loadSubPage('bainong');
    } else if (categoryId === 'guanshan') {
        console.log('✅ 准备加载关山篇页面...');
        loadSubPage('guanshan');
    } else if (categoryId === 'huilong') {
        console.log('✅ 准备加载回龙篇页面...');
        loadSubPage('huilong');
    } else if (categoryId === 'kangzhan') {
        console.log('✅ 准备加载抗战篇页面...');
        loadSubPage('kangzhan');
    } else {
        // 其他分类暂时只打印日志
        console.log('❌ 该分类页面尚未实现:', categoryId);
        alert('该分类页面尚未实现: ' + categoryId);
    }
}

// ========== 服务百宝格数据配置 ==========
const services = [
    {
        id: 'one-table',
        name: '一桌餐',
        icon: 'bowl', // 饭碗与筷子
        isHot: true
    },
    {
        id: 'team-meal',
        name: '团队餐',
        icon: 'group' // 三个圆点聚在一起
    },
    {
        id: 'leisure-tour',
        name: '休闲游览',
        icon: 'mountain' // 山的轮廓
    },
    {
        id: 'red-route',
        name: '红色路线',
        icon: 'flag' // 飘扬的红旗
    },
    {
        id: 'specialty',
        name: '半坡特产',
        icon: 'gift' // 礼品袋
    },
    {
        id: 'family-park',
        name: '亲情乐园',
        icon: 'smile' // 笑脸
    },
    {
        id: 'event-planning',
        name: '活动策划',
        icon: 'scroll' // 卷轴
    },
    {
        id: 'farming',
        name: '种养认领',
        icon: 'sprout', // 幼苗
        isHot: true
    }
];

// SVG 图标库 - 实心风格
const iconSVGs = {
    bowl: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 14 Q6 20 10 23 Q16 26 22 23 Q26 20 26 14 L6 14 Z" />
        <rect x="27" y="8" width="2" height="4" rx="1" />
        <rect x="23" y="6" width="2" height="4" rx="1" />
    </svg>`,

    group: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="11" r="3.5" />
        <circle cx="9" cy="18" r="3" />
        <circle cx="23" cy="18" r="3" />
        <path d="M13 14 L13 18 L9 18" stroke-width="2" stroke="currentColor" fill="none" />
        <path d="M19 14 L19 18 L23 18" stroke-width="2" stroke="currentColor" fill="none" />
    </svg>`,

    mountain: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 24 L12 10 L16 16 L20 8 L28 24 Z" />
    </svg>`,

    flag: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="6" width="2" height="22" rx="1" />
        <path d="M9 6 Q14 8 19 6 L19 14 Q14 16 9 14 Z" />
    </svg>`,

    gift: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="16" width="12" height="10" rx="1" />
        <path d="M10 16 L10 12 Q10 10 12 10 L20 10 Q22 10 22 12 L22 16 Z" />
        <rect x="15.5" y="10" width="1" height="16" />
        <circle cx="13" cy="13" r="1.5" />
    </svg>`,

    smile: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" />
        <circle cx="12" cy="14" r="1.8" fill="#fff" />
        <circle cx="20" cy="14" r="1.8" fill="#fff" />
        <path d="M11 18 Q16 21 21 18" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" />
    </svg>`,

    scroll: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 8 Q8 8 8 10 L8 22 Q8 24 10 24 L22 24 Q24 24 24 22 L24 10 Q24 8 22 8 Z" />
        <rect x="11" y="12" width="10" height="1.5" rx="0.5" fill="#fff" />
        <rect x="11" y="15.5" width="10" height="1.5" rx="0.5" fill="#fff" />
        <rect x="11" y="19" width="7" height="1.5" rx="0.5" fill="#fff" />
    </svg>`,

    sprout: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="14" width="2" height="10" rx="1" />
        <path d="M16 14 Q12 10 8 12 Q10 16 16 14 Z" />
        <path d="M16 14 Q20 10 24 12 Q22 16 16 14 Z" />
        <rect x="12" y="23" width="8" height="2" rx="1" />
    </svg>`
};

// 渲染服务百宝格
function renderServiceGrid() {
    const gridContainer = document.getElementById('service-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = services.map(service => `
        <div class="service-grid__item" onclick="handleServiceClick('${service.id}')" data-id="${service.id}">
            ${service.isHot ? '<span class="service-grid__hot-badge">热</span>' : ''}
            <div class="service-grid__icon">
                ${iconSVGs[service.icon]}
            </div>
            <span class="service-grid__label">${service.name}</span>
        </div>
    `).join('');
}

// 处理服务点击
function handleServiceClick(serviceId) {
    console.log('点击服务:', serviceId);

    // 特殊处理：一桌餐跳转到详情页
    if (serviceId === 'one-table') {
        openOneTableMeal();
        return;
    }

    // 其他服务显示开发中提示
    alert('该服务页面开发中: ' + serviceId);
}

// 打开半坡餐饮详情页
function openBanpoDining() {
    console.log('🍽️ 打开半坡餐饮详情页');
    loadSubPage('banpo-dining');
}

// 打开半坡讲谈详情页
function openBanpoTalks() {
    console.log('🏛️ 打开半坡讲谈详情页');
    loadSubPage('banpo-talks');
}

// 打开文艺创作详情页
function openLiteraryCreation() {
    console.log('📚 打开文艺创作详情页');
    loadSubPage('literary-creation');
}

// 打开耕读有伴详情页
function openFarmingReading() {
    console.log('🌾 打开耕读有伴详情页');
    loadSubPage('farming-reading');
}

// 打开一桌餐详情页
function openOneTableMeal() {
    console.log('🥢 打开一桌餐详情页');
    loadSubPage('one-table-meal');
}

// ========== 半坡等闲弹窗控制 ==========
function showBanpoText() {
    const modal = document.getElementById('banpo-modal');
    if (modal) {
        modal.classList.add('active');
        // 防止背景滚动
        document.body.style.overflow = 'hidden';
    }
}

function closeBanpoText() {
    const modal = document.getElementById('banpo-modal');
    if (modal) {
        modal.classList.remove('active');
        // 恢复背景滚动
        document.body.style.overflow = '';
    }
}

// ========== 页面路由控制 ==========
async function loadSubPage(pageName) {
    console.log('🔄 loadSubPage 开始加载:', pageName);
    try {
        const url = `pages/${pageName}.html`;
        console.log('📡 正在请求:', url);

        const response = await fetch(url);
        console.log('📥 响应状态:', response.status, response.statusText);

        if (!response.ok) throw new Error('页面加载失败');

        const html = await response.text();
        console.log('📄 HTML 内容长度:', html.length);

        const screen = document.querySelector('.screen');
        console.log('🖥️ Screen 元素:', screen);

        // 隐藏所有现有页面
        const allPages = screen.querySelectorAll('.page');
        console.log('📦 现有页面数量:', allPages.length);
        allPages.forEach(page => page.classList.remove('active'));

        // 插入新页面
        screen.insertAdjacentHTML('beforeend', html);
        console.log('✅ 新页面已插入');

        // 初始化新页面的内容
        if (pageName === 'bainong') {
            console.log('🌾 初始化百农篇...');
            initBainongPage();
        } else if (pageName === 'guanshan') {
            console.log('⛰️ 初始化关山篇...');
            initGuanshanPage();
        } else if (pageName === 'huilong') {
            console.log('🐉 初始化回龙篇...');
            // 回龙篇暂时不需要特殊初始化
        } else if (pageName === 'kangzhan') {
            console.log('🎖️ 初始化抗战篇...');
            initKangzhanPage();
        } else if (pageName === 'banpo-dining') {
            console.log('🍽️ 初始化半坡餐饮...');
            initBanpoDiningPage();
        }

        // 更新导航按钮
        updateNavButtons(pageName);
        console.log('🔘 导航按钮已更新');

        // 滚动到顶部
        screen.scrollTop = 0;
        console.log('✅ loadSubPage 完成');
    } catch (error) {
        console.error('❌ 加载页面失败:', error);
        alert('页面加载失败，请检查网络连接\n错误: ' + error.message);
    }
}

function goBack() {
    const screen = document.querySelector('.screen');
    const currentPage = screen.querySelector('.page.active');

    if (currentPage && currentPage.id !== 'home') {
        // 移除当前页面
        currentPage.remove();

        // 显示首页
        const homePage = document.getElementById('home');
        if (homePage) {
            homePage.classList.add('active');
        }

        // 更新导航按钮
        updateNavButtons('home');
    }
}

// 更新导航按钮
function updateNavButtons(pageName) {
    const navContainer = document.querySelector('.prototype-btn').parentElement;
    if (!navContainer) return;

    // 页面配置
    const pageConfig = {
        home: { icon: 'home', title: '首页' },
        bainong: { icon: 'seedling', title: '百农篇' },
        guanshan: { icon: 'mountain', title: '关山篇' },
        huilong: { icon: 'landmark', title: '回龙篇' },
        kangzhan: { icon: 'flag', title: '抗战篇' }
    };

    // 清空现有按钮
    navContainer.innerHTML = '';

    // 添加首页按钮
    const homeBtn = document.createElement('button');
    homeBtn.type = 'button';
    homeBtn.className = `prototype-btn ${pageName === 'home' ? 'active' : ''}`;
    homeBtn.setAttribute('data-page', 'home');
    homeBtn.onclick = () => {
        goBack();
    };
    homeBtn.innerHTML = `<i class="fas fa-home mr-2"></i>首页`;
    navContainer.appendChild(homeBtn);

    // 如果不是首页，添加当前页面按钮
    if (pageName !== 'home' && pageConfig[pageName]) {
        const config = pageConfig[pageName];
        const pageBtn = document.createElement('button');
        pageBtn.type = 'button';
        pageBtn.className = 'prototype-btn active';
        pageBtn.setAttribute('data-page', pageName);
        pageBtn.innerHTML = `<i class="fas fa-${config.icon} mr-2"></i>${config.title}`;
        navContainer.appendChild(pageBtn);
    }
}

// ========== 百农篇页面初始化 ==========
function initBainongPage() {
    renderAlumniWall();
    renderBambooList();
}

// ========== 关山篇页面初始化 ==========
function initGuanshanPage() {
    renderMountainGrid();
    renderWaterGrid();
    renderBentoGrid();
    renderSeasonsGrid();
}

// 渲染校友头像墙
function renderAlumniWall() {
    const alumniData = [
        { name: '李**' },
        { name: '张**' },
        { name: '王**' },
        { name: '刘**' },
        { name: '陈**' },
        { name: '杨**' },
        { name: '赵**' },
        { name: '黄**' },
        { name: '周**' },
        { name: '吴**' }
    ];

    const container = document.getElementById('alumni-scroll');
    if (!container) return;

    let html = '';

    // 渲染校友头像
    alumniData.forEach(alumni => {
        html += `
            <div class="alumni-item">
                <div class="alumni-item__avatar">
                    <i class="fas fa-user"></i>
                </div>
                <span class="alumni-item__name">${alumni.name}</span>
            </div>
        `;
    });

    // 添加"查看全部"按钮
    html += `
        <div class="alumni-item alumni-item--more" onclick="showAllAlumni()">
            <div class="alumni-item__avatar">
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <span class="alumni-item__name">查看全部</span>
        </div>
    `;

    container.innerHTML = html;
}

// 渲染竹简列表
function renderBambooList() {
    const departments = [
        { id: 'agriculture', name: '农学系', subtitle: '麦穗飘香', icon: 'seedling' },
        { id: 'mechanical', name: '机械系', subtitle: '齿轮转动', icon: 'cog' },
        { id: 'economics', name: '经济系', subtitle: '商道智慧', icon: 'chart-line' },
        { id: 'literature', name: '文学系', subtitle: '诗书传承', icon: 'book' },
        { id: 'biology', name: '生物系', subtitle: '生命探索', icon: 'dna' },
        { id: 'computer', name: '计算机系', subtitle: '科技创新', icon: 'laptop-code' }
    ];

    const container = document.getElementById('bamboo-list');
    if (!container) return;

    let html = '';

    departments.forEach(dept => {
        html += `
            <div class="bamboo-item" onclick="showDepartmentDetail('${dept.id}')">
                <div class="bamboo-item__icon">
                    <i class="fas fa-${dept.icon}"></i>
                </div>
                <div class="bamboo-item__content">
                    <div class="bamboo-item__title">${dept.name}</div>
                    <div class="bamboo-item__subtitle">${dept.subtitle}</div>
                </div>
                <div class="bamboo-item__arrow">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// 显示地标详情
function showLandmarkDetail(landmarkId) {
    console.log('显示地标详情:', landmarkId);
    // TODO: 实现地标详情页面
}

// 显示所有校友
function showAllAlumni() {
    console.log('显示所有校友');
    // TODO: 实现校友列表页面
}

// 显示院系详情
function showDepartmentDetail(deptId) {
    console.log('显示院系详情:', deptId);
    // TODO: 实现院系详情页面
}

// ========== 关山篇 - 数据渲染 ==========

// 渲染观山网格
function renderMountainGrid() {
    const mountains = [
        { id: 'huashan', name: '花山', image: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=400&h=400&fit=crop' },
        { id: 'houshan', name: '猴山', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' },
        { id: 'tianzhu', name: '天柱', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop' },
        { id: 'yixiantian', name: '一线天', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' }
    ];

    const container = document.getElementById('mountain-grid');
    if (!container) return;

    container.innerHTML = mountains.map(mountain => `
        <div class="mountain-card" onclick="showMountainDetail('${mountain.id}')">
            <div class="mountain-card__image">
                <img src="${mountain.image}" alt="${mountain.name}">
            </div>
            <div class="mountain-card__title">${mountain.name}</div>
        </div>
    `).join('');
}

// 渲染观水网格
function renderWaterGrid() {
    const waters = [
        { id: 'panguhe', name: '盘古河', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=400&fit=crop' },
        { id: 'tianxiang', name: '天像瀑布', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=400&fit=crop' }
    ];

    const container = document.getElementById('water-grid');
    if (!container) return;

    container.innerHTML = waters.map(water => `
        <div class="water-card" onclick="showWaterDetail('${water.id}')">
            <div class="water-card__image">
                <img src="${water.image}" alt="${water.name}">
            </div>
            <div class="water-card__title">${water.name}</div>
        </div>
    `).join('');
}

// 渲染 Bento Grid
function renderBentoGrid() {
    // 重新排列顺序，确保对齐
    // 布局：
    // Row 1-2: [抗日展 2x2] [地质馆 2x2]
    // Row 3:   [八宝洞 1x1] [七色 1x1] [诗词 2x1]
    // Row 4:   [张良脑 1x1] [故事 2x1] (空1格)
    const items = [
        { id: 'kangrizhan', name: '抗日展', size: 'large', type: 'history', image: 'https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?w=400&h=400&fit=crop' }, // 黑白历史纪念碑
        { id: 'dizhiguan', name: '地质博物馆', size: 'large', type: 'science', image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=400&h=400&fit=crop' },
        { id: 'babaodong', name: '八宝洞', size: 'medium', type: 'nature', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop' },
        { id: 'qiseguanshan', name: '七色关山', size: 'medium', type: 'nature', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop' },
        { id: 'shici', name: '关山诗词', size: 'wide', type: 'culture', image: '' },
        { id: 'zhangliangnao', name: '张良脑', size: 'medium', type: 'history', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop' },
        { id: 'gushi', name: '关山故事', size: 'wide', type: 'culture', image: '' }
    ];

    const container = document.getElementById('bento-grid');
    if (!container) return;

    container.innerHTML = items.map(item => `
        <div class="bento-item bento-item--${item.size} ${item.type === 'culture' ? 'bento-item--culture' : ''}"
             onclick="showBentoDetail('${item.id}')">
            <div class="bento-item__bg">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
            </div>
            <div class="bento-item__content">
                <h3 class="bento-item__title">${item.name}</h3>
            </div>
        </div>
    `).join('');
}

// 渲染四季网格
function renderSeasonsGrid() {
    const seasons = [
        { id: 'spring', name: '品春', season: 'spring', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop' },
        { id: 'summer', name: '品夏', season: 'summer', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&h=400&fit=crop' },
        { id: 'autumn', name: '品秋', season: 'autumn', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
        { id: 'winter', name: '品冬', season: 'winter', image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&h=400&fit=crop' }
    ];

    const container = document.getElementById('seasons-grid');
    if (!container) return;

    container.innerHTML = seasons.map(season => `
        <div class="season-card season-card--${season.season}" onclick="showSeasonDetail('${season.id}')">
            <div class="season-card__bg">
                <img src="${season.image}" alt="${season.name}">
            </div>
            <div class="season-card__content">
                <h3 class="season-card__title">${season.name}</h3>
            </div>
        </div>
    `).join('');
}

// ========== 关山篇 - 交互函数 ==========

// 切换山水标签
function switchNature(tab) {
    // 更新按钮状态
    document.querySelectorAll('.nature-toggle__btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    // 更新内容显示
    document.querySelectorAll('.nature-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tab}-content`).classList.add('active');
}

// 显示关山简介
function showGuanshanIntro() {
    const modal = document.getElementById('guanshan-intro-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// 关闭关山简介
function closeGuanshanIntro() {
    const modal = document.getElementById('guanshan-intro-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// 详情页面占位函数
function showMountainDetail(id) {
    console.log('显示山峰详情:', id);
}

function showWaterDetail(id) {
    console.log('显示水景详情:', id);
}

function showBentoDetail(id) {
    console.log('显示观天下详情:', id);
}

function showSeasonDetail(id) {
    console.log('显示四季详情:', id);
}

// ========== 回龙篇 - 交互函数 ==========
function playVideo() {
    console.log('播放回龙天路视频');
    alert('视频播放功能开发中...');
}

function showDetail(id) {
    console.log('显示详情:', id);
    alert('详情页面开发中: ' + id);
}

// ========== 抗战篇页面初始化 ==========
function initKangzhanPage() {
    renderRelics();
    renderMediaList();
}

// 渲染文物陈列
function renderRelics() {
    const relics = [
        { id: 'uniform', name: '八路军军装', icon: 'fa-user-tie', desc: '抗战时期军服' },
        { id: 'rifle', name: '抗战步枪', icon: 'fa-crosshairs', desc: '缴获日军武器' },
        { id: 'document', name: '革命文书', icon: 'fa-file-alt', desc: '珍贵历史文献' },
        { id: 'medal', name: '抗战勋章', icon: 'fa-medal', desc: '英雄荣誉证明' },
        { id: 'photo', name: '历史照片', icon: 'fa-image', desc: '珍贵影像资料' },
        { id: 'letter', name: '家书', icon: 'fa-envelope', desc: '烈士遗书' }
    ];

    const container = document.getElementById('relics-scroll');
    if (!container) return;

    container.innerHTML = relics.map(relic => `
        <div class="kz-relic-card" onclick="showRelicDetail('${relic.id}')">
            <div class="kz-relic-card__icon">
                <i class="fas ${relic.icon}"></i>
            </div>
            <h3 class="kz-relic-card__title">${relic.name}</h3>
            <p class="kz-relic-card__desc">${relic.desc}</p>
        </div>
    `).join('');
}

// 渲染媒体列表
function renderMediaList() {
    const mediaItems = [
        { id: 'story', title: '抗战讲述', subtitle: '老兵口述历史', icon: 'fa-microphone' },
        { id: 'song', title: '抗战凯歌', subtitle: '革命歌曲集', icon: 'fa-music' }
    ];

    const container = document.getElementById('media-list');
    if (!container) return;

    container.innerHTML = mediaItems.map(item => `
        <div class="kz-media-item" onclick="playMedia('${item.id}')">
            <div class="kz-media-item__icon">
                <i class="fas ${item.icon}"></i>
            </div>
            <div class="kz-media-item__content">
                <h3 class="kz-media-item__title">${item.title}</h3>
                <p class="kz-media-item__subtitle">${item.subtitle}</p>
            </div>
            <button type="button" class="kz-media-item__play" aria-label="播放">
                <i class="fas fa-play"></i>
            </button>
        </div>
    `).join('');
}

// ========== 抗战篇 - 交互函数 ==========
function showHeroDetail(id) {
    console.log('显示英雄详情:', id);
    alert('英雄事迹详情页面开发中...');
}

function showSection(section) {
    console.log('显示章节:', section);
    alert('章节详情页面开发中: ' + section);
}

function showRelicDetail(id) {
    console.log('显示文物详情:', id);
    alert('文物详情页面开发中: ' + id);
}

function playMedia(id) {
    console.log('播放媒体:', id);
    alert('媒体播放功能开发中: ' + id);
}

function bookVisit() {
    console.log('预约参观');
    alert('预约功能开发中，敬请期待！');
}

// ========== 半坡餐饮页面初始化 ==========
function initBanpoDiningPage() {
    renderWisdomCards();
    renderDishGallery();
    renderCookingSchool();
    renderEnvironment();
}

// 渲染文化根源卡片
function renderWisdomCards() {
    const wisdomData = [
        {
            id: 'folk',
            title: '民间溯源',
            tag: 'Tradition',
            icon: 'fa-scroll',
            desc: '追溯民间饮食文化的起源'
        },
        {
            id: 'huangdi',
            title: '黄帝内经',
            tag: 'TCM Health',
            icon: 'fa-mortar-pestle',
            desc: '中医养生的饮食智慧'
        },
        {
            id: 'qimin',
            title: '齐民要术',
            tag: 'Agriculture',
            icon: 'fa-seedling',
            desc: '古代农业与烹饪技艺'
        }
    ];

    const container = document.getElementById('wisdom-scroll');
    if (!container) return;

    container.innerHTML = wisdomData.map(item => `
        <div class="bd-wisdom-card" onclick="showWisdomDetail('${item.id}')">
            <div class="bd-wisdom-card__icon">
                <i class="fas ${item.icon}"></i>
            </div>
            <h3 class="bd-wisdom-card__title">${item.title}</h3>
            <span class="bd-wisdom-card__tag">${item.tag}</span>
        </div>
    `).join('');
}

// 渲染名菜欣赏
function renderDishGallery() {
    const dishes = [
        { id: 1, name: '清蒸鲈鱼', image: 'https://images.unsplash.com/photo-1580959375944-0b7b9e7d6b3f?w=400&h=400&fit=crop' },
        { id: 2, name: '红烧肉', image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=400&fit=crop' },
        { id: 3, name: '时令蔬菜', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop' },
        { id: 4, name: '手工豆腐', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop' },
        { id: 5, name: '养生汤', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop' },
        { id: 6, name: '农家小炒', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop' }
    ];

    const container = document.getElementById('gallery-grid');
    if (!container) return;

    container.innerHTML = dishes.map(dish => `
        <div class="bd-dish-card" onclick="showDishDetail(${dish.id})">
            <img src="${dish.image}"
                 alt="${dish.name}"
                 class="bd-dish-card__img"
                 onerror="this.src='https://via.placeholder.com/400x400/D84315/FFFFFF?text=${dish.name}'">
            <div class="bd-dish-card__overlay">
                <span class="bd-dish-card__name">${dish.name}</span>
                <button type="button" class="bd-dish-card__like" onclick="event.stopPropagation(); likeDish(${dish.id})" aria-label="喜欢">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// 渲染做菜学堂
function renderCookingSchool() {
    const videos = [
        { id: 1, title: '如何制作手工豆腐', duration: '15 分钟', thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop' },
        { id: 2, title: '传统红烧肉的秘诀', duration: '20 分钟', thumbnail: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=300&h=200&fit=crop' },
        { id: 3, title: '养生汤的熬制方法', duration: '12 分钟', thumbnail: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop' }
    ];

    const container = document.getElementById('school-list');
    if (!container) return;

    container.innerHTML = videos.map(video => `
        <div class="bd-video-card" onclick="playVideo(${video.id})">
            <div class="bd-video-card__thumbnail">
                <img src="${video.thumbnail}"
                     alt="${video.title}"
                     onerror="this.src='https://via.placeholder.com/300x200/D84315/FFFFFF?text=视频'">
                <div class="bd-video-card__play">
                    <div class="bd-video-card__play-icon">
                        <i class="fas fa-play"></i>
                    </div>
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
    const environments = [
        { id: 1, title: '雅致包间', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop' },
        { id: 2, title: '大厅景观', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop' },
        { id: 3, title: '窗外风景', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop' }
    ];

    const container = document.getElementById('environment-carousel');
    if (!container) return;

    container.innerHTML = environments.map(env => `
        <div class="bd-env-card">
            <img src="${env.image}"
                 alt="${env.title}"
                 class="bd-env-card__img"
                 onerror="this.src='https://via.placeholder.com/600x400/D84315/FFFFFF?text=${env.title}'">
            <div class="bd-env-card__caption">
                <h3 class="bd-env-card__title">${env.title}</h3>
            </div>
        </div>
    `).join('');
}

// ========== 半坡餐饮 - 交互函数 ==========
function showWisdomDetail(id) {
    console.log('显示文化详情:', id);
    alert('文化详情页面开发中: ' + id);
}

function showDishDetail(id) {
    console.log('显示菜品详情:', id);
    alert('菜品详情页面开发中: ' + id);
}

function likeDish(id) {
    console.log('喜欢菜品:', id);
    alert('已添加到收藏！');
}

function playVideo(id) {
    console.log('播放视频:', id);
    alert('视频播放功能开发中: ' + id);
}

function makeReservation() {
    console.log('预订餐位');
    alert('预订功能开发中，敬请期待！\n请拨打电话：0371-1234567');
}

// ========== 探讨沟通滑动模块 ==========
function initDiscussionScroll() {
    const track = document.querySelector('.discussion-scroll__track');
    const cards = document.querySelectorAll('.scroll-card');
    const indicatorsContainer = document.getElementById('scroll-indicators');

    if (!track || cards.length === 0) return;

    let currentIndex = 0;

    // 创建指示器
    function createIndicators() {
        if (!indicatorsContainer) return;

        indicatorsContainer.innerHTML = Array.from(cards).map((_, index) => `
            <div class="discussion-scroll__indicator ${index === 0 ? 'discussion-scroll__indicator--active' : ''}"
                 data-index="${index}"></div>
        `).join('');

        // 添加指示器点击事件
        indicatorsContainer.querySelectorAll('.discussion-scroll__indicator').forEach((indicator, index) => {
            indicator.addEventListener('click', () => scrollToCard(index));
        });
    }

    // 更新指示器状态
    function updateIndicators(index) {
        if (!indicatorsContainer) return;

        indicatorsContainer.querySelectorAll('.discussion-scroll__indicator').forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('discussion-scroll__indicator--active');
            } else {
                indicator.classList.remove('discussion-scroll__indicator--active');
            }
        });
    }

    // 滚动到指定卡片
    function scrollToCard(index) {
        if (index < 0 || index >= cards.length) return;

        currentIndex = index;
        const card = cards[index];
        const cardLeft = card.offsetLeft;
        const trackPadding = 16; // 左侧 padding

        track.scrollTo({
            left: cardLeft - trackPadding,
            behavior: 'smooth'
        });

        updateIndicators(index);
    }

    // 监听滚动事件，更新当前索引
    let scrollTimeout;
    track.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const trackLeft = track.scrollLeft;
            const trackPadding = 16;

            // 找到最接近的卡片
            let closestIndex = 0;
            let minDistance = Infinity;

            cards.forEach((card, index) => {
                const cardLeft = card.offsetLeft - trackPadding;
                const distance = Math.abs(trackLeft - cardLeft);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            if (closestIndex !== currentIndex) {
                currentIndex = closestIndex;
                updateIndicators(currentIndex);
            }
        }, 100);
    });

    // 初始化
    createIndicators();

    // 触摸滑动支持
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartTime = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartTime = Date.now();
    });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const touchDuration = Date.now() - touchStartTime;

        // 如果是快速点击（小于 200ms 且移动距离小于 10px），不处理滑动
        const distance = Math.abs(touchEndX - touchStartX);
        if (touchDuration < 200 && distance < 10) {
            return; // 让点击事件正常触发
        }

        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentIndex < cards.length - 1) {
                // 向左滑动
                scrollToCard(currentIndex + 1);
            } else if (diff < 0 && currentIndex > 0) {
                // 向右滑动
                scrollToCard(currentIndex - 1);
            }
        }
    }
}

// 应用初始化：在所有页面内容加载完成后，执行默认页面展示与基础状态更新
function initializeApp() {
    // 防重复初始化
    if (window.__appInitialized) return;

    let attempts = 0;
    const maxAttempts = 40;

    function tryInit() {
        const pagesContainer = document.getElementById("pages-container");
        const hasPages = pagesContainer && pagesContainer.querySelector(".page");
        const bottomNav = document.querySelector(".bottom-nav");

        if (hasPages) {
            const lastPage = localStorage.getItem("currentPage") || "home";

            try {
                showPage(lastPage);
            } catch (err) {
                console.error("初始化显示页面失败，回退到首页:", err);
                showPage("home");
            }

            if (typeof updateTime === "function") {
                updateTime();
            }

            // 初始化探讨沟通滑动模块
            initDiscussionScroll();

            window.__appInitialized = true;
            return;
        }

        if (attempts < maxAttempts) {
            attempts += 1;
            setTimeout(tryInit, 50);
            return;
        }

        console.warn("等待页面加载超时，执行兜底初始化");
        try {
            showPage(localStorage.getItem("currentPage") || "home");
        } catch (err) {
            console.error("兜底初始化失败:", err);
        }
        window.__appInitialized = true;
    }

    if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(tryInit);
    } else {
        setTimeout(tryInit, 0);
    }
}

// 更新状态栏时间
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;

    const timeElements = document.querySelectorAll(".status-bar span:first-child");
    timeElements.forEach((el) => {
        el.textContent = timeString;
    });
}

// 更新导航活跃状态
function updateNavActiveState(pageId) {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
        item.classList.remove("active");
        item.classList.add("text-gray-500");
        item.style.color = "";
    });

    let activeNavId = null;
    if (pageId === "home") {
        activeNavId = "b-nav-home";
    } else if (pageId === "classics") {
        activeNavId = "b-nav-classics";
    } else if (pageId === "discussion") {
        activeNavId = "b-nav-discussion";
    } else if (pageId === "customize") {
        activeNavId = "b-nav-customize";
    } else if (pageId === "profile") {
        activeNavId = "b-nav-profile";
    }

    if (activeNavId) {
        const activeNav = document.getElementById(activeNavId);
        if (activeNav) {
            activeNav.classList.add("active");
            activeNav.classList.remove("text-gray-500");
            activeNav.style.color = "#C04851";
        }
    }
}

// 显示页面
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add("active");
    }

    const navButtons = document.querySelectorAll(".prototype-btn");
    navButtons.forEach((btn) => {
        btn.classList.remove("active");
        if (btn.dataset.page === pageId) {
            btn.classList.add("active");
        }
    });

    // 控制底部导航显示
    setTimeout(() => {
        const bottomNav = document.querySelector(".bottom-nav");
        if (bottomNav) {
            if (pageId === "home" || pageId === "classics" || 
                pageId === "discussion" || pageId === "customize" || pageId === "profile") {
                bottomNav.style.display = "flex";
            } else {
                bottomNav.style.display = "none";
            }
        }
    }, 100);

    if (typeof updateNavActiveState === "function") {
        updateNavActiveState(pageId);
    }

    localStorage.setItem("currentPage", pageId);

    document.dispatchEvent(
        new CustomEvent("pageShown", {
            detail: { pageId: pageId },
        })
    );
}

// 当DOM加载完成后初始化应用
document.addEventListener("DOMContentLoaded", function () {
    // 渲染窗棂格栅
    renderLatticeGrid();

    // 渲染服务百宝格
    renderServiceGrid();

    // 初始化应用
    initializeApp();

    // 暴露关键函数到全局作用域
    window.handleCategoryClick = handleCategoryClick;
    window.loadSubPage = loadSubPage;
    window.goBack = goBack;
    window.openBanpoDining = openBanpoDining;
    window.openBanpoTalks = openBanpoTalks;
    window.openLiteraryCreation = openLiteraryCreation;
    window.openFarmingReading = openFarmingReading;
    window.openOneTableMeal = openOneTableMeal;

    // 百农篇函数
    window.showLandmarkDetail = showLandmarkDetail;
    window.showAllAlumni = showAllAlumni;
    window.showDepartmentDetail = showDepartmentDetail;

    // 关山篇函数
    window.switchNature = switchNature;
    window.showGuanshanIntro = showGuanshanIntro;
    window.closeGuanshanIntro = closeGuanshanIntro;
    window.showMountainDetail = showMountainDetail;
    window.showWaterDetail = showWaterDetail;
    window.showBentoDetail = showBentoDetail;
    window.showSeasonDetail = showSeasonDetail;

    // 回龙篇函数
    window.playVideo = playVideo;
    window.showDetail = showDetail;

    // 抗战篇函数
    window.showHeroDetail = showHeroDetail;
    window.showSection = showSection;
    window.showRelicDetail = showRelicDetail;
    window.playMedia = playMedia;
    window.bookVisit = bookVisit;

    // 半坡餐饮函数
    window.showWisdomDetail = showWisdomDetail;
    window.showDishDetail = showDishDetail;
    window.likeDish = likeDish;
    window.makeReservation = makeReservation;

    console.log('应用初始化完成');
});

