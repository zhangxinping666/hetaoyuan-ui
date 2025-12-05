// js/home.js - 首页逻辑
(function() {
    console.log('🏠 首页脚本加载中...');

    // ==========================================
    // 1. 渲染窗棂格栅
    // ==========================================
    function renderClassicsGrid() {
        const container = document.getElementById('home-classics-grid');
        if (!container) {
            console.warn('⚠️ 找不到 #home-classics-grid 容器');
            return;
        }

        // 从 main.js 中获取 categories 数据
        const categories = window.categories || [
            { id: 'bainong', title: '百农篇', subtitle: '农耕文明', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop' },
            { id: 'guanshan', title: '关山篇', subtitle: '山川地理', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' },
            { id: 'huilong', title: '回龙篇', subtitle: '龙脉传承', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=400&fit=crop' },
            { id: 'kangzhan', title: '抗战篇', subtitle: '红色记忆', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop' }
        ];

        container.innerHTML = categories.map(cat => `
            <div class="relative h-32 rounded-xl overflow-hidden shadow-sm group cursor-pointer active:scale-95 transition-transform" onclick="window.openCategory('${cat.id}')">
                <img src="${cat.image}" 
                     alt="${cat.title}" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                     onerror="this.src='https://placehold.co/400x400/e8e4dc/5d4037?text=${encodeURIComponent(cat.title)}'">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span class="absolute bottom-3 left-3 text-white font-serif font-bold text-lg tracking-widest">${cat.title}</span>
            </div>
        `).join('');
    }

    // ==========================================
    // 2. 文化序言弹窗
    // ==========================================
    window.showCultureModal = function() {
        const modal = document.getElementById('culture-modal');
        if (modal) {
            modal.classList.remove('hidden');
            // 添加动画效果
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        }
    };

    window.closeCultureModal = function() {
        const modal = document.getElementById('culture-modal');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
    };

    // 点击背景关闭弹窗
    const modal = document.getElementById('culture-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                window.closeCultureModal();
            }
        });
    }

    // ==========================================
    // 3. 打开分类页面
    // ==========================================
    window.openCategory = function(categoryId) {
        console.log('📂 打开分类:', categoryId);
        
        // 调用 main.js 中的路由函数
        if (window.loadSubPage) {
            window.loadSubPage(categoryId);
        } else {
            console.error('❌ 找不到 loadSubPage 函数');
            alert(`即将打开：${categoryId}`);
        }
    };

    // ==========================================
    // 4. 搜索栏滚动效果 (可选)
    // ==========================================
    function initSearchBarScroll() {
        const searchBar = document.getElementById('home-search-bar');
        const homeView = document.getElementById('home');
        
        if (!searchBar || !homeView) return;

        let lastScroll = 0;
        
        homeView.addEventListener('scroll', function() {
            const currentScroll = homeView.scrollTop;
            
            // 向下滚动时，搜索栏背景变深
            if (currentScroll > 50) {
                searchBar.querySelector('div').classList.add('bg-white/90');
                searchBar.querySelector('div').classList.remove('bg-white/70');
            } else {
                searchBar.querySelector('div').classList.add('bg-white/70');
                searchBar.querySelector('div').classList.remove('bg-white/90');
            }
            
            lastScroll = currentScroll;
        });
    }

    // ==========================================
    // 5. 初始化
    // ==========================================
    window.initHomePage = function() {
        console.log('✅ 初始化首页...');
        renderClassicsGrid();
        initSearchBarScroll();
    };

    // 自动初始化（延迟执行，确保 DOM 已加载）
    setTimeout(() => {
        if (document.getElementById('home')) {
            window.initHomePage();
        }
    }, 100);

})();

