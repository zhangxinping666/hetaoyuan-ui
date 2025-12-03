// js/team-meal.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    
    // 特色服务 (Logistics Services)
    const services = [
        { 
            id: 'entry',
            title: '团队进园', 
            desc: '专属大巴停车位，绿色通道免排队，专业讲解员全程陪同。',
            icon: 'fa-bus',
            color: 'bg-blue-50 text-blue-600'
        },
        { 
            id: 'mobile-kitchen',
            title: '移动餐厅', 
            desc: '名厨现场烹饪，将热气腾腾的宴席搬到山水之间。',
            icon: 'fa-fire-burner',
            color: 'bg-gradient-to-r from-[#B71C1C] to-red-700 text-white', // 特殊样式处理
            isHighlight: true
        },
        { 
            id: 'delivery',
            title: '团队送餐', 
            desc: '定制便当/自助餐盒，准时送达指定景点，游玩用餐两不误。',
            icon: 'fa-box-open',
            color: 'bg-yellow-50 text-yellow-600'
        }
    ];

    // 团餐方案 (Set Menus)
    const mealPlans = [
        {
            id: 'nostalgia',
            title: '忆苦思甜·大锅菜',
            image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=400',
            tag: '怀旧主题',
            dishes: ['红薯面窝头', '南瓜汤', '大烩菜'],
            price: '38',
            btnText: '查看菜单',
            btnColor: 'bg-[#3E4E5E]'
        },
        {
            id: 'reunion',
            title: '欢聚一堂·八大碗',
            image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
            tag: '热选',
            tagColor: 'bg-[#B71C1C]',
            dishes: ['小酥肉', '黄河鲤鱼', '四喜丸子'],
            price: '88',
            btnText: '查看菜单',
            btnColor: 'bg-[#B71C1C]'
        },
        {
            id: 'buffet',
            title: '户外冷餐·自助',
            image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400',
            tag: '高端定制',
            dishes: ['精致西点', '时令水果', '烧烤BBQ'],
            price: '128',
            btnText: '查看菜单',
            btnColor: 'bg-[#3E4E5E]'
        }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderServices() {
        const container = document.getElementById('tm-services-list');
        if (!container) return;

        container.innerHTML = services.map(s => {
            if (s.isHighlight) {
                // 特殊的高亮卡片 (移动餐厅)
                return `
                <div class="bg-gradient-to-r from-[#B71C1C] to-red-700 p-4 rounded-xl shadow-md flex gap-4 items-center text-white relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform" onclick="showServiceDetail('${s.id}')">
                    <div class="absolute -right-4 -bottom-4 text-9xl text-white/10 rotate-12">
                        <i class="fa-solid fa-truck-ramp-box"></i>
                    </div>
                    <div class="w-14 h-14 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center text-2xl shrink-0 border border-white/30">
                        <i class="fa-solid ${s.icon}"></i>
                    </div>
                    <div class="flex-1 z-10">
                        <h3 class="font-bold text-lg font-serif">${s.title}</h3>
                        <p class="text-xs text-white/80 mt-1">${s.desc}</p>
                    </div>
                </div>`;
            } else {
                // 普通服务卡片
                return `
                <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-center cursor-pointer active:bg-gray-50 transition-colors" onclick="showServiceDetail('${s.id}')">
                    <div class="w-14 h-14 ${s.color} rounded-lg flex items-center justify-center text-xl shrink-0">
                        <i class="fa-solid ${s.icon}"></i>
                    </div>
                    <div class="flex-1">
                        <h3 class="font-bold text-[#3E4E5E]">${s.title}</h3>
                        <p class="text-xs text-gray-500 mt-1">${s.desc}</p>
                    </div>
                    <i class="fa-solid fa-angle-right text-gray-300"></i>
                </div>`;
            }
        }).join('');
    }

    function renderMealPlans() {
        const container = document.getElementById('tm-plans-list');
        if (!container) return;

        container.innerHTML = mealPlans.map(plan => `
            <div class="snap-center shrink-0 w-[280px] bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 relative group cursor-pointer" onclick="showMenuDetail('${plan.id}')">
                ${plan.tagColor ? `<div class="absolute top-0 right-0 ${plan.tagColor} text-white text-[10px] px-3 py-1 rounded-bl-lg font-bold z-20 shadow-sm">${plan.tag}</div>` 
                : `<div class="absolute top-2 left-2 bg-stone-800/80 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded shadow-sm">${plan.tag}</div>`}
                
                <div class="h-32 bg-stone-200 relative overflow-hidden">
                    <img src="${plan.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.src='https://via.placeholder.com/400'">
                    <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                <div class="p-4">
                    <h3 class="font-serif font-bold text-lg text-[#3E4E5E]">${plan.title}</h3>
                    <div class="my-3 flex flex-wrap gap-1">
                        ${plan.dishes.map(dish => `<span class="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">${dish}</span>`).join('')}
                    </div>
                    <div class="flex items-end justify-between border-t border-gray-100 pt-3">
                        <div>
                            <span class="text-xs text-gray-400">人均</span>
                            <span class="text-[#B71C1C] font-bold text-xl">¥${plan.price}</span>
                        </div>
                        <button class="text-xs ${plan.btnColor} text-white px-3 py-1.5 rounded-full shadow-md active:opacity-80">${plan.btnText}</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    window.showServiceDetail = function(id) {
        alert(`查看服务详情: ${id} (功能开发中)`);
    };

    window.showMenuDetail = function(id) {
        alert(`查看完整菜单: ${id} (功能开发中)`);
    };

    window.callService = function() {
        alert('正在呼叫专属团餐客服...\n电话: 0371-88886666');
    };

    window.customizePlan = function() {
        alert('即将打开定制表单...\n请填写人数、预算及特殊需求。');
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initTeamMealPage = function() {
        console.log('🚩 团队餐页面初始化');
        renderServices();
        renderMealPlans();
    };

})();