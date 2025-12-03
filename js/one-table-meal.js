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
            desc: '温馨家常，老少咸宜。精选半坡本地食材，还原儿时记忆中的味道。',
            dishes: [
                { id: 'f1', name: '太行炖土鸡', image: 'https://images.unsplash.com/photo-1625938145744-e38051524294?w=400', tags: ['招牌', '滋补'], desc: '半坡散养走地鸡，肉质紧实，慢火煨制4小时，汤色金黄，营养丰富。' },
                { id: 'f2', name: '核桃仁拌野菜', image: 'https://images.unsplash.com/photo-1560155016-bd4879ae8f21?w=400', tags: ['时令', '爽口'], desc: '当季新鲜野菜配上半坡特产鲜核桃仁，清脆爽口，解腻开胃。' },
                { id: 'f3', name: '手工杂粮面', image: 'https://images.unsplash.com/photo-1606214300755-a50d28731b6e?w=400', tags: ['主食', '手工'], desc: '石磨面粉手工擀制，劲道滑爽，配上特制肉臊卤子，一碗下肚超满足。' },
                { id: 'f4', name: '山药红烧肉', image: 'https://images.unsplash.com/photo-1608475861994-cf7fc9f51a02?w=400', tags: ['硬菜', '下饭'], desc: '铁棍山药吸饱了肉汁，软糯香甜，五花肉肥而不腻，入口即化。' }
            ]
        },
        business: {
            id: 'business',
            name: '团队盛宴',
            price: '1288',
            unit: '/桌 (8-10人)',
            desc: '商务宴请，排面十足。汇聚山珍海味，打造高端用餐体验。',
            dishes: [
                { id: 'b1', name: '烤全羊腿', image: 'https://images.unsplash.com/photo-1544025162-d76690b60943?w=400', tags: ['硬菜', '特色'], desc: '精选羔羊后腿，秘制香料腌制入味，炭火慢烤至外酥里嫩，香气四溢。' },
                { id: 'b2', name: '清蒸虹鳟鱼', image: 'https://images.unsplash.com/photo-1580959375944-0b7b9e7d6b3f?w=400', tags: ['鲜美', '活鱼'], desc: '引山泉水养殖的虹鳟鱼，现杀现蒸，肉质细嫩无腥味，营养价值极高。' },
                { id: 'b3', name: '养生菌菇汤', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400', tags: ['养生', '鲜汤'], desc: '汇集七种野生菌菇，不加味精，全靠食材本身的鲜味，一口鲜掉眉毛。' },
                { id: 'b4', name: '太行炖土鸡', image: 'https://images.unsplash.com/photo-1625938145744-e38051524294?w=400', tags: ['招牌', '滋补'], desc: '半坡散养走地鸡，慢火煨制4小时，汤色金黄，老少皆宜。' }
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
            <button onclick="window.switchPackage('family')" 
                class="flex-1 py-2 rounded-full text-sm font-bold transition-all duration-300 ${currentPackage === 'family' ? activeClass : inactiveClass}">
                ${packages.family.name}
            </button>
            <button onclick="window.switchPackage('business')" 
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
                <div class="snap-center shrink-0 w-[260px] bg-white rounded-xl overflow-hidden shadow-[0_8px_24px_-6px_rgba(78,52,46,0.15)] group cursor-pointer hover:shadow-lg transition-shadow" 
                     onclick="window.showDishDetail('${dish.id}')">
                    <div class="h-40 overflow-hidden relative">
                        <img src="${dish.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                             onerror="this.src='https://via.placeholder.com/400x300/4E342E/FFFFFF?text=${dish.name}'">
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

    // 切换套餐
    window.switchPackage = function(pkgId) {
        if (currentPackage === pkgId) return;
        currentPackage = pkgId;
        renderTabs();
        renderDishes();
        updateBottomBar();
    };

    // 显示菜品详情弹窗
    window.showDishDetail = function(id) {
        const pkg = packages[currentPackage];
        const dish = pkg.dishes.find(d => d.id === id);
        
        if(dish) {
            window.openOneTableMealModal(dish.name, dish.desc, dish.image);
        }
    };

    // 预订功能
    window.bookTable = function() {
        const pkg = packages[currentPackage];
        const btn = document.querySelector('.otm-book-btn'); // 假设 HTML 按钮有这个类名
        
        if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> 处理中...';
            btn.classList.add('opacity-80', 'cursor-not-allowed');
            
            setTimeout(() => {
                // 恢复按钮状态
                btn.innerHTML = originalText;
                btn.classList.remove('opacity-80', 'cursor-not-allowed');
                
                // 弹出成功提示
                window.openOneTableMealModal(
                    '预订成功', 
                    `您已成功预订【${pkg.name}】\n价格：¥${pkg.price}${pkg.unit}\n\n稍后会有客服联系您确认用餐时间和人数。`, 
                    null
                );
            }, 1000);
        } else {
            // 降级处理
            alert(`已为您预订：${pkg.name}\n价格：¥${pkg.price}`);
        }
    };

    // --- 通用弹窗逻辑 (内部函数) ---
    window.openOneTableMealModal = function(title, desc, imgUrl) {
        const modal = document.getElementById('onetable-modal');
        if (!modal) {
            alert(`${title}\n\n${desc}`); 
            return;
        }

        const titleEl = document.getElementById('otm-modal-title');
        const descEl = document.getElementById('otm-modal-desc');
        const imgEl = document.getElementById('otm-modal-img');
        const imgContainer = imgEl ? imgEl.parentElement : null;

        if(titleEl) titleEl.innerText = title;
        if(descEl) descEl.innerText = desc || '暂无描述';
        
        if(imgEl && imgContainer) {
            if(imgUrl) {
                imgEl.src = imgUrl;
                imgContainer.style.display = 'block';
            } else {
                imgContainer.style.display = 'none';
            }
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    };

    window.closeOneTableMealModal = function() {
        const modal = document.getElementById('onetable-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
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

    // 自动检测并初始化
    setTimeout(() => {
        if(document.getElementById('one-table-meal')) {
            window.initOneTableMealPage();
        }
    }, 100);

})();