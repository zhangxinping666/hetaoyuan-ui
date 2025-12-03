// js/red-route.js
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
            desc: '铭记历史，缅怀先烈。馆内陈列着大量珍贵的历史文物和照片，重现了那段<span class="text-[#D32F2F] font-bold">烽火连天</span>的岁月。', // China Red
            tags: ['实物展出', '多媒体互动'],
            isFirst: true
        },
        {
            id: 2,
            title: '回龙精神展览馆',
            duration: '约30分钟',
            image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=400',
            desc: '感悟回龙人战天斗地的英雄气概。聆听<span class="text-[#D32F2F] font-bold">张荣锁</span>书记带领村民在绝壁上开凿天路的感人故事。',
            tags: ['当代愚公', '绝壁天路']
        },
        {
            id: 3,
            title: '百农精神教育基地',
            duration: '约45分钟',
            image: 'https://images.unsplash.com/photo-1623838804048-d9d37535492e?w=400',
            desc: '扎根黄土地的信念。参观校友展览馆，学习<span class="text-[#D32F2F] font-bold">艰苦奋斗，自强不息</span>的百农精神。',
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
            
            // 连线逻辑：如果是最后一个节点，不需要画线，或者画虚线表示结束
            // 这里我们用一个绝对定位的线条贯穿整个父容器，或者在每个item里画一段
            // 简单的做法：在容器左侧画一条长线，这里我们在每个item里画一段连接线
            
            return `
            <div class="relative pl-8 group cursor-pointer animate-fade-in-up" style="animation-delay: ${index * 100}ms" onclick="viewNodeDetail(${node.id})">
                ${!isLast ? '<div class="absolute left-0 top-6 bottom-0 w-0.5 bg-stone-300 group-hover:bg-[#D32F2F] transition-colors"></div>' : ''}
                
                <div class="absolute -left-[11px] top-0 w-6 h-6 bg-stone-200 border-2 border-stone-400 rounded-full flex items-center justify-center group-hover:bg-[#D32F2F] group-hover:border-[#D32F2F] transition-colors z-10">
                    <span class="text-[10px] font-bold text-stone-600 group-hover:text-white">${index + 1}</span>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-b-4 border-stone-400 transform transition-all group-hover:-translate-y-1 mb-8">
                     <div class="h-32 mb-3 overflow-hidden rounded relative">
                        <img src="${node.image}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                        <div class="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm">
                            <i class="fa-regular fa-clock mr-1"></i>${node.duration}
                        </div>
                    </div>
                    <h3 class="text-lg font-bold text-stone-800 font-serif group-hover:text-[#D32F2F] transition-colors">${node.title}</h3>
                    <p class="text-xs text-stone-500 mt-2 leading-relaxed">
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

    window.viewNodeDetail = function(id) {
        alert(`查看站点详情: ${id} (功能开发中)\n将播放相关语音讲解。`);
    };

    window.offerFlower = function() {
        // 简单的献花动画逻辑
        const btn = document.getElementById('flower-btn');
        const icon = btn.querySelector('i');
        
        // 禁用按钮防止连点
        btn.disabled = true;
        btn.classList.add('opacity-75', 'cursor-not-allowed');
        
        // 动画
        icon.classList.add('animate-spin'); // 简单用旋转代替飞出效果
        
        setTimeout(() => {
            flowerCount++;
            updateFlowerCount();
            alert('💐 献花成功！\n感谢您的缅怀。');
            
            // 恢复状态
            icon.classList.remove('animate-spin');
            btn.disabled = false;
            btn.classList.remove('opacity-75', 'cursor-not-allowed');
        }, 800);
    };

    window.bookGroupVisit = function() {
        alert('正在联系红色教育专员...\n支持党支部/团建预约。');
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initRedRoutePage = function() {
        console.log('🚩 红色路线页面初始化');
        renderTimeline();
        updateFlowerCount();
    };

})();