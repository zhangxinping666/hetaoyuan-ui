(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    
    // 策划服务列表
    const services = [
        { 
            id: 'wedding', 
            title: '婚庆策划', 
            icon: 'fa-heart', // 使用通用图标以防兼容性问题
            desc: '不仅仅是年轻人的婚礼，更是金婚、银婚的纪念。提供草坪婚礼、中式堂会等多种风格。', 
            detail: '执子之手，与子偕老。我们在半坡为您打造独一无二的婚礼记忆。\n\n【场地选择】\n1. 户外草坪：蓝天白云见证誓言。\n2. 中式喜堂：凤冠霞帔，传承经典。\n\n【专属服务】\n资深司仪、专业跟妆、多机位摄影摄像，以及定制婚宴菜单，让爱在山水间永恒。',
            image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600',
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
            detail: '岁月静好，喜乐安康。为您操办一场温馨热闹的生日宴。\n\n【祝寿礼】\n定制寿桃蛋糕、长寿面，安排戏曲表演助兴。\n\n【周岁礼】\n抓周仪式、气球布置、小丑互动，记录宝宝成长的每一个瞬间。',
            image: 'https://images.unsplash.com/photo-1530103862676-de3c9a59af38?w=600',
            tags: ['寿桃蛋糕', '长寿面', '家庭合影'],
            borderColor: 'border-[#C5A065]', // gold-leaf
            tagColor: 'bg-yellow-50 text-[#C5A065]',
            badge: '寿宴/周岁'
        },
        { 
            id: 'gathering', 
            title: '朋友聚会', 
            icon: 'fa-wine-glass', 
            desc: '半坡等闲，邀友书题。提供私密包厢、户外烧烤及KTV娱乐设施。', 
            detail: '老友重逢，把酒言欢。提供一站式聚会服务，让您只管叙旧，剩下的交给我们。\n\n【娱乐设施】\n棋牌室、KTV、户外自助烧烤区。\n\n【贴心服务】\n提供市区专车接送服务，定制聚会横幅与伴手礼。',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600',
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
        { icon: 'fa-face-smile', title: '圆满礼成', active: false } 
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderServices() {
        const container = document.getElementById('ep-services-list');
        if (!container) return;

        container.innerHTML = services.map(s => `
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 ${s.borderColor} group cursor-pointer hover:shadow-xl transition-shadow" onclick="window.viewServiceDetail('${s.id}')">
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
            const activeClass = step.active ? 'bg-[#D32F2F] text-white shadow-md transform -translate-y-1' : 'bg-white border border-[#D32F2F] text-[#D32F2F]';
            
            return `
            <div class="flex flex-col items-center bg-[#FCFBF9] z-10 px-2 cursor-pointer group" onclick="window.highlightStep(this)">
                <div class="w-10 h-10 rounded-full ${activeClass} flex items-center justify-center shadow-sm mb-2 transition-all duration-300 group-hover:bg-[#D32F2F] group-hover:text-white">
                    <i class="${step.icon.startsWith('fa-') ? 'fa-solid' : 'fa-regular'} ${step.icon}"></i>
                </div>
                <span class="text-xs font-bold text-[#2D2D2D] group-hover:text-[#D32F2F] transition-colors">${step.title}</span>
            </div>`;
        }).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    // 打开通用弹窗
    function openEventModal(title, desc, imgUrl) {
        const modal = document.getElementById('event-modal');
        if (!modal) {
            alert(`${title}\n\n${desc}`); 
            return;
        }

        const titleEl = document.getElementById('ep-modal-title');
        const descEl = document.getElementById('ep-modal-desc');
        const imgEl = document.getElementById('ep-modal-img');
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

    window.closeEventModal = function() {
        const modal = document.getElementById('event-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // 交互动效
    window.highlightStep = function(el) {
        // 简单的点击反馈动画
        const iconDiv = el.querySelector('div');
        iconDiv.classList.add('scale-110');
        setTimeout(() => iconDiv.classList.remove('scale-110'), 200);
    };

    window.viewServiceDetail = function(id) {
        const s = services.find(item => item.id === id);
        if(s) {
            openEventModal(s.title, s.detail, s.image);
        }
    };

    window.callPlanner = function() {
        const btn = document.querySelector('.ep-call-btn');
        if(btn) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> 呼叫中...';
            
            setTimeout(() => {
                openEventModal('金牌策划师', '已为您连线策划总监：张老师\n\n📞 电话：0371-66668888\n\n我们会根据您的预算和需求，免费提供三套策划方案供您选择。', null);
                btn.innerHTML = originalHTML;
            }, 800);
        } else {
            alert('正在呼叫...');
        }
    };

    window.submitRequest = function() {
        openEventModal('需求提交', '策划需求表单正在加载中...\n\n您可以在表单中填写：\n1. 预计活动日期\n2. 大致人数\n3. 风格偏好\n4. 预算范围', null);
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initEventPlanningPage = function() {
        console.log('🎉 活动策划页面初始化');
        renderServices();
        renderProcess();
    };

    // 自动检测并初始化
    setTimeout(() => {
        if(document.getElementById('event-planning')) {
            window.initEventPlanningPage();
        }
    }, 100);

})();