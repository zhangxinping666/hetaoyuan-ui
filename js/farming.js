// js/farming.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    
    // 认领区域
    const zones = [
        {
            id: 'fruit',
            name: '果树栽培',
            icon: 'fa-apple-whole',
            iconColor: 'text-orange-500',
            bgIcon: 'bg-yellow-50',
            tags: ['核桃', '苹果'],
            borderColor: 'border-[#D2B48C]', // loess-yellow
            decorBg: 'bg-yellow-100'
        },
        {
            id: 'veggie',
            name: '蔬菜种植',
            icon: 'fa-carrot',
            iconColor: 'text-[#6B8E23]', // bean-green
            bgIcon: 'bg-green-50',
            tags: ['时令菜', '无公害'],
            borderColor: 'border-[#6B8E23]',
            decorBg: 'bg-green-100'
        },
        {
            id: 'flower',
            name: '花卉种植',
            icon: 'fa-fan',
            iconColor: 'text-pink-500',
            bgIcon: 'bg-pink-50',
            tags: ['牡丹', '月季'],
            borderColor: 'border-pink-300',
            decorBg: 'bg-pink-100'
        },
        {
            id: 'bonsai',
            name: '盆景艺术',
            icon: 'fa-tree',
            iconColor: 'text-gray-600',
            bgIcon: 'bg-gray-100',
            tags: ['造型松', '修身'],
            borderColor: 'border-gray-400',
            decorBg: 'bg-gray-100'
        }
    ];

    // 庄主权益
    const privileges = [
        { icon: 'fa-id-card-clip', title: '专属挂牌', desc: '定制铭牌 · 寄语' },
        { icon: 'fa-video', title: '云端看护', desc: '24h直播 · 记录' },
        { icon: 'fa-truck-gift', title: '丰收快递', desc: '果实归你 · 包邮' }
    ];

    // 热推项目
    const hotItem = {
        title: '百年核桃树',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=200',
        desc: '树龄30年以上，产量稳定。认领即送太行山土鸡蛋一箱。',
        stock: 12,
        price: '599',
        unit: '/年'
    };

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderZones() {
        const container = document.getElementById('fa-zones-grid');
        if (!container) return;

        container.innerHTML = zones.map(zone => `
            <div class="bg-white rounded-2xl p-4 shadow-sm border-b-4 ${zone.borderColor} relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer" onclick="viewZoneDetail('${zone.id}')">
                <div class="absolute -right-4 -top-4 w-16 h-16 ${zone.decorBg} rounded-full opacity-50"></div>
                <div class="relative z-10">
                    <div class="w-12 h-12 ${zone.bgIcon} rounded-full flex items-center justify-center ${zone.iconColor} text-2xl mb-3">
                        <i class="fa-solid ${zone.icon}"></i>
                    </div>
                    <h3 class="font-bold text-lg text-[#2F3542]">${zone.name}</h3>
                    <div class="flex gap-2 mt-2">
                        ${zone.tags.map(tag => `<span class="text-[10px] border border-gray-200 px-1 rounded text-gray-500">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderPrivileges() {
        const container = document.getElementById('fa-privileges-list');
        if (!container) return;

        container.innerHTML = privileges.map(p => `
            <div class="min-w-[140px] bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-sm border border-stone-100 relative overflow-hidden">
                <div class="w-20 h-20 absolute -top-10 -right-10 bg-[#6B8E23]/10 rounded-full"></div>
                <i class="fa-solid ${p.icon} text-2xl text-[#6B8E23] mb-2"></i>
                <h4 class="font-bold text-sm text-[#2F3542]">${p.title}</h4>
                <p class="text-[10px] text-gray-400 mt-1">${p.desc}</p>
            </div>
        `).join('');
    }

    function renderHotItem() {
        const container = document.getElementById('fa-hot-item');
        if (!container) return;

        container.innerHTML = `
            <div class="flex items-center gap-2 mb-3">
                <i class="fa-solid fa-fire text-orange-500 text-sm"></i>
                <h3 class="font-bold text-sm text-[#2F3542]">本季热推：${hotItem.title}</h3>
            </div>
            <div class="flex gap-3 cursor-pointer" onclick="viewHotItem()">
                <img src="${hotItem.image}" class="w-20 h-20 rounded-lg object-cover">
                <div class="flex-1 flex flex-col justify-between">
                    <p class="text-xs text-gray-600 line-clamp-2">${hotItem.desc}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-400">剩余 ${hotItem.stock} 棵</span>
                        <span class="font-bold text-[#6B8E23]">¥${hotItem.price}<span class="text-xs font-normal">${hotItem.unit}</span></span>
                    </div>
                </div>
            </div>
        `;
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    window.viewZoneDetail = function(id) {
        alert(`查看区域详情: ${id} (功能开发中)\n这里展示该区域的可认领地块地图。`);
    };

    window.viewHotItem = function() {
        alert('查看百年核桃树详细介绍...');
    };

    window.bookVisitFarm = function() {
        alert('正在预约实地考察...\n请选择日期。');
    };

    window.becomeOwner = function() {
        alert('申请成为庄主...\n请选择您要认领的地块或果树。');
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initFarmingPage = function() {
        console.log('🌱 种养认领页面初始化');
        renderZones();
        renderPrivileges();
        renderHotItem();
    };

})();