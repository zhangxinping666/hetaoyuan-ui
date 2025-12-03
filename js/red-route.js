(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    
    // 路线站点数据 (Timeline Nodes)
    const timelineNodes = [
        {
            id: 1,
            title: '抗战纪念馆',
            duration: '约1小时',
            image: 'https://images.unsplash.com/photo-1579965342575-16428a7c8881?w=400',
            desc: '铭记历史，缅怀先烈。馆内陈列着大量珍贵的历史文物和照片。',
            detail: '这里收藏了抗战时期的枪支、军服、家书等珍贵文物300余件。通过多媒体互动技术，还原了那段烽火连天的岁月，让参观者仿佛置身于硝烟弥漫的战场，深刻感受先烈们保家卫国的壮志豪情。',
            tags: ['实物展出', '多媒体互动'],
            isFirst: true
        },
        {
            id: 2,
            title: '回龙精神展览馆',
            duration: '约30分钟',
            image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=400',
            desc: '感悟回龙人战天斗地的英雄气概。聆听张荣锁书记带领村民开凿天路的故事。',
            detail: '展览馆详细记录了回龙村党支部书记张荣锁带领村民，在无电力、无机械的情况下，历时三年，在千仞绝壁上修通8公里挂壁公路的感人事迹。这不仅是一条路，更是一座精神丰碑。',
            tags: ['当代愚公', '绝壁天路']
        },
        {
            id: 3,
            title: '百农精神教育基地',
            duration: '约45分钟',
            image: 'https://images.unsplash.com/photo-1623838804048-d9d37535492e?w=400',
            desc: '扎根黄土地的信念。参观校友展览馆，学习艰苦奋斗的百农精神。',
            detail: '集中展示了百农学子扎根基层、服务三农的辉煌历程。从"小麦专家"到"科技扶贫"，一代代百农人将论文写在祖国的大地上，诠释了"自强不息"的校训精神。',
            tags: ['校史馆', '教研风采']
        }
    ];

    let flowerCount = 3492; // 初始献花数

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderTimeline() {
        const container = document.getElementById('rr-timeline-list');
        if (!container) return;

        container.innerHTML = timelineNodes.map((node, index) => {
            const isLast = index === timelineNodes.length - 1;
            
            return `
            <div class="relative pl-8 group cursor-pointer animate-fade-in-up" style="animation-delay: ${index * 100}ms" onclick="window.viewNodeDetail(${node.id})">
                ${!isLast ? '<div class="absolute left-0 top-6 bottom-0 w-0.5 bg-stone-300 group-hover:bg-[#D32F2F] transition-colors"></div>' : ''}
                
                <div class="absolute -left-[11px] top-0 w-6 h-6 bg-stone-200 border-2 border-stone-400 rounded-full flex items-center justify-center group-hover:bg-[#D32F2F] group-hover:border-[#D32F2F] transition-colors z-10">
                    <span class="text-[10px] font-bold text-stone-600 group-hover:text-white">${index + 1}</span>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-b-4 border-stone-400 transform transition-all group-hover:-translate-y-1 mb-8">
                      <div class="h-32 mb-3 overflow-hidden rounded relative">
                        <img src="${node.image}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                             onerror="this.src='https://via.placeholder.com/400x300/D32F2F/FFFFFF?text=${node.title}'">
                        <div class="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">
                            <i class="fa-regular fa-clock mr-1"></i>${node.duration}
                        </div>
                    </div>
                    <h3 class="text-lg font-bold text-stone-800 font-serif group-hover:text-[#D32F2F] transition-colors">${node.title}</h3>
                    <p class="text-xs text-stone-500 mt-2 leading-relaxed line-clamp-2">
                        ${node.desc}
                    </p>
                    <div class="mt-3 flex gap-2">
                        ${node.tags.map(tag => `<span class="text-[10px] border border-stone-300 px-1.5 py-0.5 rounded text-stone-500">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>`;
        }).join('');
    }

    function updateFlowerCount() {
        const el = document.getElementById('flower-counter');
        if (el) el.innerText = `已有 ${flowerCount.toLocaleString()} 人参与缅怀`;
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    // 打开通用弹窗
    function openRedRouteModal(title, desc, imgUrl) {
        const modal = document.getElementById('red-route-modal');
        if (!modal) {
            alert(`${title}\n\n${desc}`); 
            return;
        }

        const titleEl = document.getElementById('rr-modal-title');
        const descEl = document.getElementById('rr-modal-desc');
        const imgEl = document.getElementById('rr-modal-img');
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

    window.closeRedRouteModal = function() {
        const modal = document.getElementById('red-route-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // 查看站点详情
    window.viewNodeDetail = function(id) {
        const node = timelineNodes.find(n => n.id === id);
        if(node) {
            openRedRouteModal(node.title, node.detail, node.image);
        }
    };

    // 献花功能
    window.offerFlower = function() {
        const btn = document.getElementById('flower-btn');
        if(!btn) return;

        const icon = btn.querySelector('i');
        
        // 禁用按钮防止连点
        btn.disabled = true;
        btn.classList.add('opacity-75', 'cursor-not-allowed');
        
        // 动画
        if(icon) icon.classList.add('fa-spin'); 
        
        setTimeout(() => {
            flowerCount++;
            updateFlowerCount();
            
            // 恢复状态
            if(icon) icon.classList.remove('fa-spin');
            btn.disabled = false;
            btn.classList.remove('opacity-75', 'cursor-not-allowed');

            // 弹出感谢
            openRedRouteModal('缅怀成功', '💐 感谢您的献花！\n\n每一朵花都代表着一份敬意，先烈们的精神将永垂不朽。', null);
        }, 800);
    };

    window.bookGroupVisit = function() {
        openRedRouteModal('团队预约', '正在为您联系红色教育专员...\n\n支持党支部活动、学生团建及社会团体预约。\n\n📞 预约专线：0371-12345678', null);
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initRedRoutePage = function() {
        console.log('🚩 红色路线页面初始化');
        renderTimeline();
        updateFlowerCount();
    };

    // 自动检测并初始化
    setTimeout(() => {
        if(document.getElementById('red-route')) {
            window.initRedRoutePage();
        }
    }, 100);

})();