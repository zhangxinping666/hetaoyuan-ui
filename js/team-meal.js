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
            fullDesc: '我们为百人以上的团队提供VIP入园服务。\n\n1. 专属大巴停车区，距离入口仅50米。\n2. 团队专用检票通道，无需排队等待。\n3. 每20人配备一名金牌讲解员，全程陪同讲解半坡历史与文化。',
            icon: 'fa-bus',
            color: 'bg-blue-50 text-blue-600'
        },
        { 
            id: 'mobile-kitchen',
            title: '移动餐厅', 
            desc: '名厨现场烹饪，将热气腾腾的宴席搬到山水之间。',
            fullDesc: '半坡独创的"移动厨房"服务。无论是在山顶观景台，还是林间草地，我们的专业厨师团队都能携带全套设备现场烹饪，让您在欣赏美景的同时，吃到锅气十足的热菜热饭。',
            icon: 'fa-fire-burner',
            color: 'bg-gradient-to-r from-[#B71C1C] to-red-700 text-white', 
            isHighlight: true
        },
        { 
            id: 'delivery',
            title: '团队送餐', 
            desc: '定制便当/自助餐盒，准时送达指定景点，游玩用餐两不误。',
            fullDesc: '针对行程紧凑的团队，提供高品质定点送餐服务。保温箱配送，确保餐食温度。支持多点配送，可直接送至您所在的景点休息区。',
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
            menuDetail: '【冷菜】老醋花生、凉拌野菜\n【热菜】半坡大烩菜（五花肉/粉条/白菜/豆腐）、红烧土豆块\n【主食】红薯面窝头、杂粮馒头\n【汤品】南瓜绿豆汤\n\n体验父辈的艰苦岁月，珍惜今日的幸福生活。',
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
            menuDetail: '【八大碗】小酥肉、条子肉、四喜丸子、黄焖鸡块、八宝饭、素三鲜、烩豆腐、什锦大菜\n【硬菜】糖醋黄河鲤鱼\n【主食】米饭、花卷\n\n传统豫北宴席规格，大碗喝酒，大口吃肉，主打一个豪爽实在。',
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
            menuDetail: '【冷餐】精美西点拼盘、时令水果塔、烟熏三文鱼\n【热食】户外BBQ烧烤（羊肉串/鸡翅/蔬菜）、意式肉酱面\n【饮品】鲜榨果汁、现磨咖啡、红酒（选配）\n\n适合企业团建、草坪婚礼等高端户外活动。',
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
                <div class="bg-gradient-to-r from-[#B71C1C] to-red-700 p-4 rounded-xl shadow-md flex gap-4 items-center text-white relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform" onclick="window.showServiceDetail('${s.id}')">
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
                <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-center cursor-pointer active:bg-gray-50 transition-colors" onclick="window.showServiceDetail('${s.id}')">
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
            <div class="snap-center shrink-0 w-[280px] bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 relative group cursor-pointer" onclick="window.showMenuDetail('${plan.id}')">
                ${plan.tagColor ? `<div class="absolute top-0 right-0 ${plan.tagColor} text-white text-[10px] px-3 py-1 rounded-bl-lg font-bold z-20 shadow-sm">${plan.tag}</div>` 
                : `<div class="absolute top-2 left-2 bg-stone-800/80 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded shadow-sm">${plan.tag}</div>`}
                
                <div class="h-32 bg-stone-200 relative overflow-hidden">
                    <img src="${plan.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.src='https://via.placeholder.com/400x300/B71C1C/FFFFFF?text=${plan.title}'">
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

    // 打开通用弹窗
    function openTeamMealModal(title, desc, imgUrl) {
        const modal = document.getElementById('team-meal-modal');
        if (!modal) {
            alert(`${title}\n\n${desc}`); // 降级
            return;
        }

        const titleEl = document.getElementById('tm-modal-title');
        const descEl = document.getElementById('tm-modal-desc');
        const imgEl = document.getElementById('tm-modal-img');
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
    }

    window.closeTeamMealModal = function() {
        const modal = document.getElementById('team-meal-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    window.showServiceDetail = function(id) {
        const s = services.find(item => item.id === id);
        if(s) openTeamMealModal(s.title, s.fullDesc, null);
    };

    window.showMenuDetail = function(id) {
        const plan = mealPlans.find(item => item.id === id);
        if(plan) openTeamMealModal(plan.title, plan.menuDetail, plan.image);
    };

    window.callService = function() {
        // 模拟拨打电话
        openTeamMealModal('专属客服', '正在为您接通团餐专线...\n\n📞 0371-88886666\n(服务时间：8:00 - 20:00)', null);
    };

    window.customizePlan = function() {
        const btn = document.querySelector('.tm-customize-btn');
        if(btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> 加载中...';
            setTimeout(() => {
                openTeamMealModal('开始定制', '定制表单加载成功。\n\n请填写您的：\n1. 团队人数\n2. 预算范围\n3. 用餐时间\n4. 特殊忌口', null);
                btn.innerHTML = originalText;
            }, 500);
        } else {
            openTeamMealModal('定制服务', '请联系客服进行深度定制。', null);
        }
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initTeamMealPage = function() {
        console.log('🚩 团队餐页面初始化');
        renderServices();
        renderMealPlans();
    };

    // 自动检测并初始化
    setTimeout(() => {
        if(document.getElementById('team-meal')) {
            window.initTeamMealPage();
        }
    }, 100);

})();