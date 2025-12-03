// js/one-table-meal.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    
    // 套餐配置
    const packages = {
        family: {
            id: 'family',
            name: '家庭雅集',
            price: '688',
            unit: '/桌 (4-6人)',
            desc: '温馨家常，老少咸宜',
            dishes: [
                { name: '太行炖土鸡', image: 'https://images.unsplash.com/photo-1625938145744-e38051524294?w=400', tags: ['招牌', '滋补'], desc: '半坡散养走地鸡，慢火煨制4小时' },
                { name: '核桃仁拌野菜', image: 'https://images.unsplash.com/photo-1560155016-bd4879ae8f21?w=400', tags: ['时令', '爽口'], desc: '当季野菜配鲜核桃，清爽解腻' },
                { name: '手工杂粮面', image: 'https://images.unsplash.com/photo-1606214300755-a50d28731b6e?w=400', tags: ['主食', '手工'], desc: '石磨面粉手工擀制，配特制肉臊' },
                { name: '山药红烧肉', image: 'https://images.unsplash.com/photo-1608475861994-cf7fc9f51a02?w=400', tags: ['硬菜', '下饭'], desc: '铁棍山药与五花肉的完美融合' }
            ]
        },
        business: {
            id: 'business',
            name: '团队盛宴',
            price: '1288',
            unit: '/桌 (8-10人)',
            desc: '商务宴请，排面十足',
            dishes: [
                { name: '烤全羊腿', image: 'https://images.unsplash.com/photo-1544025162-d76690b60943?w=400', tags: ['硬菜', '特色'], desc: '秘制腌料，外酥里嫩，香气四溢' },
                { name: '清蒸虹鳟鱼', image: 'https://images.unsplash.com/photo-1580959375944-0b7b9e7d6b3f?w=400', tags: ['鲜美', '活鱼'], desc: '山泉水养殖，肉质细嫩无腥味' },
                { name: '养生菌菇汤', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', tags: ['养生', '鲜汤'], desc: '七种野生菌菇熬制，鲜掉眉毛' },
                { name: '太行炖土鸡', image: 'https://images.unsplash.com/photo-1625938145744-e38051524294?w=400', tags: ['招牌', '滋补'], desc: '半坡散养走地鸡，慢火煨制4小时' }
            ]
        }
    };

    // 服务清单 (通用)
    const services = [
        { icon: 'fa-door-open', title: '专属雅间', desc: '私密空间，山景视窗' },
        { icon: 'fa-mug-hot', title: '茶艺服务', desc: '太行毛尖，专人冲泡' },
        { icon: 'fa-music', title: '背景雅乐', desc: '古琴/轻音乐伴餐' },
        { icon: 'fa-gift', title: '伴手礼', desc: '每桌赠送时令特产' }
    ];

    let currentPackage = 'family'; // 默认选中家庭套餐

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderTabs() {
        const container = document.getElementById('otm-tabs');
        if (!container) return;

        // 动态生成 Tab 样式
        const activeClass = "bg-[#4E342E] text-white shadow-md";
        const inactiveClass = "text-gray-500 hover:bg-stone-100";

        container.innerHTML = `
            <button onclick="switchPackage('family')" 
                class="flex-1 py-2 rounded-full text-sm font-bold transition-all duration-300 ${currentPackage === 'family' ? activeClass : inactiveClass}">
                ${packages.family.name}
            </button>
            <button onclick="switchPackage('business')" 
                class="flex-1 py-2 rounded-full text-sm font-bold transition-all duration-300 ${currentPackage === 'business' ? activeClass : inactiveClass}">
                ${packages.business.name}
            </button>
        `;
    }

    function renderDishes() {
        const container = document.getElementById('otm-dish-list');
        const data = packages[currentPackage];
        
        if (!container) return;

        // 先添加淡入动画类
        container.style.opacity = '0';
        container.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            container.innerHTML = data.dishes.map(dish => `
                <div class="snap-center shrink-0 w-[260px] bg-white rounded-xl overflow-hidden shadow-[0_8px_24px_-6px_rgba(78,52,46,0.15)] group cursor-pointer" onclick="alert('查看详情：${dish.name}')">
                    <div class="h-40 overflow-hidden relative">
                        <img src="${dish.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <span class="absolute bottom-3 left-3 text-white font-serif text-lg font-bold tracking-wide">${dish.name}</span>
                    </div>
                    <div class="p-3">
                        <p class="text-xs text-gray-500 line-clamp-2 h-8 leading-relaxed">${dish.desc}</p>
                        <div class="mt-3 flex gap-1">
                            ${dish.tags.map((tag, index) => 
                                index === 0 
                                ? `<span class="text-[10px] border border-[#D4AF37] text-[#D4AF37] px-1.5 py-0.5 rounded">${tag}</span>`
                                : `<span class="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">${tag}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            `).join('');

            // 恢复显示
            container.style.transition = 'all 0.4s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 200);
    }

    function renderServices() {
        const container = document.getElementById('otm-service-list');
        if (!container) return;

        container.innerHTML = services.map(s => `
            <div class="flex gap-3 items-start p-2 rounded-lg hover:bg-[#FAF9F6] transition-colors">
                <div class="w-8 h-8 rounded-full bg-[#FFECB3] flex items-center justify-center text-[#D4AF37] shrink-0 shadow-sm">
                    <i class="fa-solid ${s.icon} text-xs"></i>
                </div>
                <div>
                    <h4 class="font-bold text-sm text-[#4E342E]">${s.title}</h4>
                    <p class="text-[10px] text-gray-400 mt-0.5">${s.desc}</p>
                </div>
            </div>
        `).join('');
    }

    function updateBottomBar() {
        const data = packages[currentPackage];
        const priceEl = document.getElementById('otm-price');
        const unitEl = document.getElementById('otm-unit');

        if (priceEl) {
            // 简单的数字滚动效果
            priceEl.style.transform = 'translateY(-20%)';
            priceEl.style.opacity = '0';
            setTimeout(() => {
                priceEl.innerText = data.price;
                priceEl.style.transform = 'translateY(0)';
                priceEl.style.opacity = '1';
            }, 200);
        }
        if (unitEl) unitEl.innerText = data.unit;
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    window.switchPackage = function(pkgId) {
        if (currentPackage === pkgId) return;
        currentPackage = pkgId;
        renderTabs();
        renderDishes();
        updateBottomBar();
    };

    window.bookTable = function() {
        alert(`已为您预订：${packages[currentPackage].name}\n价格：¥${packages[currentPackage].price}`);
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initOneTableMealPage = function() {
        console.log('🥢 一桌餐页面初始化');
        renderTabs();
        renderDishes();
        renderServices();
        updateBottomBar();
    };

})();