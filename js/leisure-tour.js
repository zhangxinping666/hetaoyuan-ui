// js/leisure-tour.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    
    // 路线数据
    const routes = [
        {
            id: 'route-a',
            name: 'A线 · 康养漫步道',
            tag: '全程平路 · 适宜长者',
            tagColor: 'bg-green-100 text-green-700',
            icon: 'fa-person-walking',
            iconBg: 'bg-green-50 text-green-600',
            desc: '全程 1.5km · 约 40分钟',
            stops: [
                { name: '半坡草堂', desc: '起点 · 参观书画展', image: 'https://images.unsplash.com/photo-1586798226058-295325983777?w=100', color: 'bg-[#607D8B]' }, // 石青
                { name: '志气林', desc: '负氧离子氧吧', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100', color: 'bg-[#607D8B]' },
                { name: '百果园', desc: '终点 · 采摘品尝', image: 'https://images.unsplash.com/photo-1544979590-37e9b47cd705?w=100', color: 'bg-[#C04851]' } // 朱砂
            ],
            btnText: '选择此路线',
            isActive: true // 默认展开
        },
        {
            id: 'route-b',
            name: 'B线 · 关山探幽道',
            tag: '登山台阶 · 体力要求',
            tagColor: 'bg-gray-100 text-gray-500',
            icon: 'fa-mountain-sun',
            iconBg: 'bg-gray-100 text-gray-600',
            desc: '全程 3.0km · 约 1.5小时',
            stops: [], // 暂时折叠
            isActive: false
        }
    ];

    // 温馨提示数据
    const tips = [
        { icon: 'fa-shirt', title: '着装建议', desc: '建议穿着宽松透气的运动装及防滑鞋。' },
        { icon: 'fa-shield-cat', title: '安全须知', desc: '山路崎岖，请勿进入未开发区域。' },
        { icon: 'fa-bus', title: '交通接驳', desc: '园区观光车每15分钟一班，招手即停。' },
        { icon: 'fa-kit-medical', title: '便民服务', desc: '游客中心免费提供登山杖和急救包。' }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderRoutes() {
        const container = document.getElementById('lt-routes-list');
        if (!container) return;

        container.innerHTML = routes.map(route => {
            if (route.isActive) {
                // 展开状态的卡片 (A线风格)
                const stopsHtml = route.stops.map((stop, index) => `
                    <div class="relative flex items-center gap-4 ${index < route.stops.length - 1 ? 'mb-4' : ''}">
                        <div class="w-3 h-3 rounded-full ${stop.color} border-2 border-white shadow z-10"></div>
                        <div class="flex-1 bg-gray-50 rounded-lg p-2 flex gap-3 cursor-pointer hover:bg-gray-100 transition-colors" onclick="viewSpot('${stop.name}')">
                            <img src="${stop.image}" class="w-12 h-12 rounded object-cover">
                            <div>
                                <h4 class="font-bold text-sm text-[#37474F]">${stop.name}</h4>
                                <p class="text-[10px] text-gray-500">${stop.desc}</p>
                            </div>
                        </div>
                    </div>
                `).join('');

                return `
                <div class="bg-white rounded-2xl p-5 shadow-md mb-6 relative overflow-hidden group border-l-4 border-[#607D8B]">
                    <div class="absolute top-0 right-0 ${route.tagColor} text-[10px] px-2 py-1 rounded-bl-lg font-bold">${route.tag}</div>
                    
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 rounded-full ${route.iconBg} flex items-center justify-center text-lg">
                            <i class="fa-solid ${route.icon}"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg text-[#37474F]">${route.name}</h3>
                            <p class="text-xs text-gray-400">${route.desc}</p>
                        </div>
                    </div>

                    <div class="relative pl-2">
                        <div class="absolute top-2 left-[5px] bottom-2 w-0.5 bg-[#D7CCC8]"></div>
                        ${stopsHtml}
                    </div>
                    
                    <button class="w-full mt-4 border border-[#607D8B] text-[#607D8B] rounded-full py-2 text-sm hover:bg-[#607D8B] hover:text-white transition-colors" onclick="selectRoute('${route.id}')">
                        ${route.btnText}
                    </button>
                </div>`;
            } else {
                // 折叠状态的卡片 (B线风格)
                return `
                <div class="bg-white rounded-2xl p-5 shadow-md relative overflow-hidden opacity-90 grayscale hover:grayscale-0 transition-all cursor-pointer" onclick="expandRoute('${route.id}')">
                    <div class="absolute top-0 right-0 ${route.tagColor} text-[10px] px-2 py-1 rounded-bl-lg font-bold">${route.tag}</div>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full ${route.iconBg} flex items-center justify-center text-lg">
                            <i class="fa-solid ${route.icon}"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg text-[#37474F]">${route.name}</h3>
                            <p class="text-xs text-gray-400">${route.desc}</p>
                        </div>
                    </div>
                </div>`;
            }
        }).join('');
    }

    function renderTips() {
        const container = document.getElementById('lt-tips-grid');
        if (!container) return;

        container.innerHTML = tips.map(tip => `
            <div class="flex items-start gap-2">
                <i class="fa-solid ${tip.icon} text-orange-400 mt-1 text-xs"></i>
                <div>
                    <h4 class="font-bold text-xs text-orange-900">${tip.title}</h4>
                    <p class="text-[10px] text-orange-800/70 leading-tight">${tip.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    window.viewSpot = function(name) {
        alert(`查看景点详情: ${name} (功能开发中)`);
    };

    window.selectRoute = function(id) {
        alert(`已选择路线: ${id}\n正在为您规划导航...`);
    };

    window.expandRoute = function(id) {
        // 简单模拟切换展开状态，实际应用可以更新数据并重新渲染
        alert(`展开路线详情: ${id}\n(此处应展开该路线的时间轴)`);
    };

    window.viewMap = function() {
        alert('打开全景地图...');
    };

    window.bookGuide = function() {
        alert('正在预约金牌导游...\n请填写预约时间。');
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initLeisureTourPage = function() {
        console.log('⛰️ 休闲游览页面初始化');
        renderRoutes();
        renderTips();
    };

})();