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
            intro: '这条路线沿途地势平坦，植被丰富，负氧离子含量极高。途经半坡草堂、志气林等核心人文景点，终点设在百果园，可体验采摘乐趣。',
            stops: [
                { name: '半坡草堂', desc: '起点 · 参观书画展', image: 'https://images.unsplash.com/photo-1586798226058-295325983777?w=400', color: 'bg-[#607D8B]', detail: '半坡草堂是景区的文化中心，常年举办名家书画展。草堂建筑风格古朴，环境清幽，是修身养性的好去处。' }, 
                { name: '志气林', desc: '负氧离子氧吧', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400', color: 'bg-[#607D8B]', detail: '当年老书记带领村民种下的千亩侧柏林，如今已亭亭如盖。漫步林间，空气清新，令人心旷神怡。' },
                { name: '百果园', desc: '终点 · 采摘品尝', image: 'https://images.unsplash.com/photo-1544979590-37e9b47cd705?w=400', color: 'bg-[#C04851]', detail: '种植有核桃、柿子、山楂等多种果树。秋季硕果累累，游客可进园免费品尝，体验丰收的喜悦。' } 
            ],
            btnText: '开始导航'
        },
        {
            id: 'route-b',
            name: 'B线 · 关山探幽道',
            tag: '登山台阶 · 体力要求',
            tagColor: 'bg-orange-100 text-orange-700',
            icon: 'fa-mountain-sun',
            iconBg: 'bg-orange-50 text-orange-600',
            desc: '全程 3.0km · 约 1.5小时',
            intro: '此路线通往关山最高峰，沿途多为石阶山路，风景绝美但较为消耗体力。沿途可欣赏一线天、天柱峰等自然奇观，适合喜爱登山的游客。',
            stops: [
                { name: '一线天', desc: '鬼斧神工', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400', color: 'bg-[#607D8B]', detail: '两壁夹峙，缝隙所见蓝天如一线，感叹大自然的鬼斧神工。此处道路狭窄，请注意安全。' },
                { name: '猴山', desc: '生态观赏', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', color: 'bg-[#607D8B]', detail: '因山形酷似灵猴而得名，运气好的话还能遇到野生猕猴在林间嬉戏。' },
                { name: '天柱峰', desc: '登高望远', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400', color: 'bg-[#C04851]', detail: '景区最高点，视野开阔。登上峰顶，极目远眺，群山连绵，令人胸襟开阔。' }
            ],
            btnText: '挑战此路线'
        }
    ];

    // 温馨提示数据
    const tips = [
        { icon: 'fa-shirt', title: '着装建议', desc: '建议穿着宽松透气的运动装及防滑鞋。' },
        { icon: 'fa-shield-cat', title: '安全须知', desc: '山路崎岖，请勿进入未开发区域。' },
        { icon: 'fa-bus', title: '交通接驳', desc: '园区观光车每15分钟一班，招手即停。' },
        { icon: 'fa-kit-medical', title: '便民服务', desc: '游客中心免费提供登山杖和急救包。' }
    ];

    let activeRouteId = 'route-a'; // 默认展开A线

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderRoutes() {
        const container = document.getElementById('lt-routes-list');
        if (!container) return;

        container.innerHTML = routes.map(route => {
            const isActive = route.id === activeRouteId;
            
            if (isActive) {
                // 展开状态
                const stopsHtml = route.stops.map((stop, index) => `
                    <div class="relative flex items-center gap-4 ${index < route.stops.length - 1 ? 'mb-4' : ''}">
                        <div class="w-3 h-3 rounded-full ${stop.color} border-2 border-white shadow z-10"></div>
                        <div class="flex-1 bg-gray-50 rounded-lg p-2 flex gap-3 cursor-pointer hover:bg-gray-100 transition-colors" 
                             onclick="window.viewSpot('${route.id}', ${index})">
                            <img src="${stop.image}" class="w-12 h-12 rounded object-cover" onerror="this.src='https://via.placeholder.com/100'">
                            <div>
                                <h4 class="font-bold text-sm text-[#37474F]">${stop.name}</h4>
                                <p class="text-[10px] text-gray-500">${stop.desc}</p>
                            </div>
                        </div>
                    </div>
                `).join('');

                return `
                <div class="bg-white rounded-2xl p-5 shadow-lg mb-6 relative overflow-hidden group border-l-4 border-[#607D8B] transition-all duration-300">
                    <div class="absolute top-0 right-0 ${route.tagColor} text-[10px] px-2 py-1 rounded-bl-lg font-bold">${route.tag}</div>
                    
                    <div class="flex items-center gap-3 mb-4 cursor-pointer" onclick="window.switchRoute('${route.id}')">
                        <div class="w-10 h-10 rounded-full ${route.iconBg} flex items-center justify-center text-lg">
                            <i class="fa-solid ${route.icon}"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg text-[#37474F]">${route.name}</h3>
                            <p class="text-xs text-gray-400">${route.desc}</p>
                        </div>
                        <i class="fa-solid fa-chevron-up ml-auto text-gray-300"></i>
                    </div>

                    <p class="text-xs text-gray-500 mb-4 leading-relaxed bg-gray-50 p-2 rounded">${route.intro}</p>

                    <div class="relative pl-2">
                        <div class="absolute top-2 left-[5px] bottom-2 w-0.5 bg-[#D7CCC8]"></div>
                        ${stopsHtml}
                    </div>
                    
                    <button class="w-full mt-4 border border-[#607D8B] text-[#607D8B] rounded-full py-2 text-sm hover:bg-[#607D8B] hover:text-white transition-colors" 
                            onclick="window.startNavigation('${route.name}')">
                        <i class="fa-solid fa-location-arrow mr-1"></i> ${route.btnText}
                    </button>
                </div>`;
            } else {
                // 折叠状态
                return `
                <div class="bg-white rounded-xl p-4 shadow-sm mb-4 relative overflow-hidden opacity-80 hover:opacity-100 hover:shadow-md transition-all cursor-pointer" 
                     onclick="window.switchRoute('${route.id}')">
                    <div class="absolute top-0 right-0 ${route.tagColor} text-[10px] px-2 py-1 rounded-bl-lg font-bold">${route.tag}</div>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full ${route.iconBg} flex items-center justify-center text-lg grayscale">
                            <i class="fa-solid ${route.icon}"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg text-[#37474F]">${route.name}</h3>
                            <p class="text-xs text-gray-400">${route.desc}</p>
                        </div>
                        <i class="fa-solid fa-chevron-down ml-auto text-gray-300"></i>
                    </div>
                </div>`;
            }
        }).join('');
    }

    function renderTips() {
        const container = document.getElementById('lt-tips-grid');
        if (!container) return;

        container.innerHTML = tips.map(tip => `
            <div class="flex items-start gap-2 p-2 rounded hover:bg-gray-50 transition-colors">
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

    // 打开通用弹窗
    function openLeisureModal(title, desc, imgUrl) {
        const modal = document.getElementById('leisure-modal');
        if (!modal) {
            alert(`${title}\n\n${desc}`); 
            return;
        }

        const titleEl = document.getElementById('lt-modal-title');
        const descEl = document.getElementById('lt-modal-desc');
        const imgEl = document.getElementById('lt-modal-img');
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

    window.closeLeisureModal = function() {
        const modal = document.getElementById('leisure-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // 切换展开的路线
    window.switchRoute = function(id) {
        activeRouteId = id;
        renderRoutes(); // 重新渲染
    };

    // 查看景点详情
    window.viewSpot = function(routeId, stopIndex) {
        const route = routes.find(r => r.id === routeId);
        if(route && route.stops[stopIndex]) {
            const stop = route.stops[stopIndex];
            openLeisureModal(stop.name, stop.detail, stop.image);
        }
    };

    // 开始导航
    window.startNavigation = function(routeName) {
        openLeisureModal('开始导航', `正在为您规划前往【${routeName}】起点的最佳路径...\n\n请确保手机GPS已开启。`, null);
    };

    window.viewMap = function() {
        openLeisureModal('全景地图', '全景地图正在加载中...\n\n您可以在地图上查看所有景点、洗手间和急救站的位置。', null);
    };

    window.bookGuide = function() {
        const btn = document.querySelector('.lt-guide-btn');
        if(btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> 预约中...';
            setTimeout(() => {
                openLeisureModal('预约成功', '金牌导游预约申请已提交。\n\n导游将在10分钟内联系您，请留意接听电话。', null);
                btn.innerHTML = originalText;
            }, 800);
        } else {
            openLeisureModal('金牌导游', '资深导游全程陪同，深入讲解半坡历史文化与自然风貌。\n\n收费标准：200元/次 (全程)', null);
        }
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initLeisureTourPage = function() {
        console.log('⛰️ 休闲游览页面初始化');
        renderRoutes();
        renderTips();
    };

    // 自动检测并初始化
    setTimeout(() => {
        if(document.getElementById('leisure-tour')) {
            window.initLeisureTourPage();
        }
    }, 100);

})();