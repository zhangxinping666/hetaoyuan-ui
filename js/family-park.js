// js/family-park.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    
    // 情感分类 (The Four Bonds)
    const bonds = [
        {
            id: 'filial',
            name: '孝文化',
            icon: 'fa-hands-holding-circle',
            color: 'text-stone-600',
            bgHover: 'group-hover:bg-stone-50',
            border: 'border-stone-100'
        },
        {
            id: 'parenting',
            name: '快乐亲子',
            icon: 'fa-child-reaching',
            color: 'text-[#FF8A65]', // coral-warm
            bgHover: 'group-hover:bg-[#FF8A65]/5',
            border: 'border-[#FF8A65]/20'
        },
        {
            id: 'love',
            name: '甜蜜爱情',
            icon: 'fa-heart',
            color: 'text-[#F48FB1]', // love-pink
            bgHover: 'group-hover:bg-[#F48FB1]/5',
            border: 'border-[#F48FB1]/20'
        },
        {
            id: 'friendship',
            name: '友谊归真',
            icon: 'fa-user-group',
            color: 'text-[#A5D6A7]', // jade-soft
            bgHover: 'group-hover:bg-[#A5D6A7]/5',
            border: 'border-[#A5D6A7]/20'
        }
    ];

    // 体验项目 (Experience Projects)
    const projects = [
        {
            id: 1,
            title: '中华孝道·洗脚礼',
            category: '孝道礼仪',
            desc: '在专业的礼仪指导下，晚辈为长辈行洗脚礼，重温反哺之情。',
            image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?w=200',
            tags: ['感恩教育', '家庭仪式'],
            themeColor: 'text-stone-700',
            borderColor: 'border-stone-300',
            icon: 'fa-scroll',
            iconColor: 'text-stone-800'
        },
        {
            id: 2,
            title: '手作·纸鸢工坊',
            category: '亲子工坊',
            desc: '爷爷扎骨架，孙子画图案。一起制作属于自家的风筝。',
            image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=200',
            tags: ['非遗手工', '祖孙协作'],
            themeColor: 'text-[#FF8A65]',
            borderColor: 'border-[#FF8A65]',
            icon: 'fa-shapes',
            iconColor: 'text-[#FF8A65]'
        },
        {
            id: 3,
            title: '草坪·围炉煮茶',
            category: '友谊时光',
            desc: '约上三五老友，带上儿孙，在草坪上喝茶聊天，享受慢时光。',
            image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=200',
            tags: ['老友聚会', '岁月静好'],
            themeColor: 'text-[#A5D6A7]',
            borderColor: 'border-[#A5D6A7]',
            icon: 'fa-tent',
            iconColor: 'text-[#A5D6A7]'
        }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderBonds() {
        const container = document.getElementById('fp-bonds-grid');
        if (!container) return;

        container.innerHTML = bonds.map(bond => `
            <div class="flex flex-col items-center gap-2 group cursor-pointer" onclick="filterProject('${bond.id}')">
                <div class="w-16 h-16 rounded-2xl bg-white shadow-sm border ${bond.border} flex items-center justify-center text-2xl ${bond.color} ${bond.bgHover} transition-colors">
                    <i class="fa-solid ${bond.icon}"></i>
                </div>
                <span class="text-xs font-bold ${bond.color}">${bond.name}</span>
            </div>
        `).join('');
    }

    function renderProjects() {
        const container = document.getElementById('fp-projects-list');
        if (!container) return;

        container.innerHTML = projects.map(proj => `
            <div class="bg-white rounded-2xl p-4 shadow-sm flex gap-4 border-l-4 ${proj.borderColor} relative overflow-hidden cursor-pointer active:scale-[0.99] transition-transform" onclick="viewProjectDetail(${proj.id})">
                <div class="absolute right-0 top-0 opacity-5">
                    <i class="fa-solid ${proj.icon} text-6xl ${proj.iconColor}"></i>
                </div>
                <div class="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src="${proj.image}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                    <h3 class="font-bold ${proj.themeColor}">${proj.title}</h3>
                    <div class="flex gap-2 mt-1 mb-2">
                        ${proj.tags.map(tag => `<span class="text-[10px] bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded">${tag}</span>`).join('')}
                    </div>
                    <p class="text-xs text-gray-500 leading-tight line-clamp-2">${proj.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    window.filterProject = function(category) {
        // 实际开发中会根据 category 过滤 projects 数据并重新渲染
        alert(`切换主题: ${category} (功能开发中)`);
    };

    window.viewProjectDetail = function(id) {
        alert(`查看项目详情: ${id} (功能开发中)`);
    };

    window.bookFamilyPackage = function() {
        alert('正在为您预订家庭套票...\n包含：午餐 + 2项体验项目');
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initFamilyParkPage = function() {
        console.log('👨‍👩‍👧‍👦 亲情乐园页面初始化');
        renderBonds();
        renderProjects();
    };

})();