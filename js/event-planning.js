// js/event-planning.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    
    // 策划服务列表
    const services = [
        {
            id: 'wedding',
            title: '婚庆策划',
            icon: 'fa-rings-wedding', // FontAwesome Icon (需确保库中有类似图标，或用 heart)
            desc: '不仅仅是年轻人的婚礼，更是金婚、银婚的纪念。提供草坪婚礼、中式堂会等多种风格，让爱在山水间永恒。',
            image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400',
            tags: ['场地布置', '全程跟拍', '司仪主持'],
            borderColor: 'border-[#D32F2F]', // vermilion
            tagColor: 'bg-red-50 text-[#D32F2F]',
            badge: '新中式婚礼'
        },
        {
            id: 'birthday',
            title: '生日派对',
            icon: 'fa-cake-candles',
            desc: '福如东海，寿比南山。为长辈定制传统的祝寿仪式，或为孙辈举办温馨的周岁派对。',
            image: 'https://images.unsplash.com/photo-1530103862676-de3c9a59af38?w=400',
            tags: ['寿桃蛋糕', '长寿面', '家庭合影'],
            borderColor: 'border-[#C5A065]', // gold-leaf
            tagColor: 'bg-yellow-50 text-[#C5A065]',
            badge: '寿宴/周岁'
        },
        {
            id: 'gathering',
            title: '朋友聚会',
            icon: 'fa-wine-glass',
            desc: '半坡等闲，邀友书题。提供私密包厢、户外烧烤及KTV娱乐设施，让久别重逢充满欢声笑语。',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
            tags: ['专车接送', '定制横幅'],
            borderColor: 'border-[#2D2D2D]', // ink-dark
            tagColor: 'bg-gray-100 text-gray-600',
            badge: '同学/战友'
        }
    ];

    // 服务流程
    const steps = [
        { icon: 'fa-comments', title: '需求沟通', active: true },
        { icon: 'fa-pencil', title: '方案定制', active: false },
        { icon: 'fa-clipboard-check', title: '现场执行', active: false },
        { icon: 'fa-face-smile', title: '圆满礼成', active: false } // regular face-smile
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderServices() {
        const container = document.getElementById('ep-services-list');
        if (!container) return;

        container.innerHTML = services.map(s => `
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 ${s.borderColor} group cursor-pointer" onclick="viewServiceDetail('${s.id}')">
                <div class="h-40 relative overflow-hidden">
                    <img src="${s.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.src='https://via.placeholder.com/400'">
                    <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                        <span class="text-xs font-bold ${s.tagColor.split(' ')[1]}">${s.badge}</span>
                    </div>
                </div>
                <div class="p-5">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-xl font-serif font-bold text-[#2D2D2D]">${s.title}</h3>
                        <i class="fa-solid ${s.icon} text-[#C5A065] text-xl"></i>
                    </div>
                    <p class="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
                        ${s.desc}
                    </p>
                    <div class="flex flex-wrap gap-2">
                        ${s.tags.map(tag => `<span class="text-[10px] ${s.tagColor} px-2 py-1 rounded">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderProcess() {
        const container = document.getElementById('ep-process-steps');
        if (!container) return;

        container.innerHTML = steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const activeClass = step.active ? 'bg-[#D32F2F] text-white' : 'bg-white border border-[#D32F2F] text-[#D32F2F]';
            
            return `
            <div class="flex flex-col items-center bg-[#FCFBF9] z-10 px-2">
                <div class="w-10 h-10 rounded-full ${activeClass} flex items-center justify-center shadow-md mb-2">
                    <i class="${step.icon.startsWith('fa-') ? 'fa-solid' : 'fa-regular'} ${step.icon}"></i>
                </div>
                <span class="text-xs font-bold ${step.active ? 'text-[#2D2D2D]' : 'text-gray-500'}">${step.title}</span>
            </div>`;
        }).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    window.viewServiceDetail = function(id) {
        alert(`查看服务详情: ${id} (功能开发中)\n这里将展示详细案例图集。`);
    };

    window.callPlanner = function() {
        alert('正在呼叫金牌策划师...\n电话: 0371-66668888');
    };

    window.submitRequest = function() {
        // 模拟表单提交
        alert('正在打开需求提交表单...\n请填写您的联系方式和活动类型。');
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initEventPlanningPage = function() {
        console.log('🎉 活动策划页面初始化');
        renderServices();
        renderProcess();
    };

})();