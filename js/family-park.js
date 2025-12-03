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
            activeColor: 'bg-stone-600 text-white',
            bgHover: 'group-hover:bg-stone-50',
            border: 'border-stone-200'
        },
        {
            id: 'parenting',
            name: '快乐亲子',
            icon: 'fa-child-reaching',
            color: 'text-[#FF8A65]', // coral-warm
            activeColor: 'bg-[#FF8A65] text-white',
            bgHover: 'group-hover:bg-[#FF8A65]/5',
            border: 'border-[#FF8A65]/20'
        },
        {
            id: 'love',
            name: '甜蜜爱情',
            icon: 'fa-heart',
            color: 'text-[#F48FB1]', // love-pink
            activeColor: 'bg-[#F48FB1] text-white',
            bgHover: 'group-hover:bg-[#F48FB1]/5',
            border: 'border-[#F48FB1]/20'
        },
        {
            id: 'friendship',
            name: '友谊归真',
            icon: 'fa-user-group',
            color: 'text-[#A5D6A7]', // jade-soft
            activeColor: 'bg-[#A5D6A7] text-white',
            bgHover: 'group-hover:bg-[#A5D6A7]/5',
            border: 'border-[#A5D6A7]/20'
        }
    ];

    // 体验项目 (Experience Projects)
    // 注意：增加了 bondId 用于筛选匹配
    const projects = [
        {
            id: 1,
            bondId: 'filial',
            title: '中华孝道·洗脚礼',
            category: '孝道礼仪',
            desc: '在专业的礼仪指导下，晚辈为长辈行洗脚礼，重温反哺之情。',
            detail: '百善孝为先。在半坡草堂的静谧氛围中，奉上一盆温水，为父母洗去一路风尘。这不仅是一个仪式，更是一次心灵的洗礼，让两代人的心贴得更近。',
            image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?w=400',
            tags: ['感恩教育', '家庭仪式'],
            themeColor: 'text-stone-700',
            borderColor: 'border-stone-300',
            icon: 'fa-scroll',
            iconColor: 'text-stone-800'
        },
        {
            id: 2,
            bondId: 'parenting',
            title: '手作·纸鸢工坊',
            category: '亲子工坊',
            desc: '爷爷扎骨架，孙子画图案。一起制作属于自家的风筝。',
            detail: '在非遗传承人的带领下，体验传统风筝的制作工艺。从扎骨架、糊纸面到绘画上色，全家齐动手。制作完成后，还可以在草坪上一起放飞梦想。',
            image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400',
            tags: ['非遗手工', '祖孙协作'],
            themeColor: 'text-[#FF8A65]',
            borderColor: 'border-[#FF8A65]',
            icon: 'fa-shapes',
            iconColor: 'text-[#FF8A65]'
        },
        {
            id: 3,
            bondId: 'friendship',
            title: '草坪·围炉煮茶',
            category: '友谊时光',
            desc: '约上三五老友，带上儿孙，在草坪上喝茶聊天，享受慢时光。',
            detail: '半坡特供的养生茶饮，配上烤橘子、红薯、板栗等茶点。在开阔的草坪上，老友相聚，回忆往昔峥嵘岁月，畅谈退休后的闲适生活。',
            image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=400',
            tags: ['老友聚会', '岁月静好'],
            themeColor: 'text-[#A5D6A7]',
            borderColor: 'border-[#A5D6A7]',
            icon: 'fa-tent',
            iconColor: 'text-[#A5D6A7]'
        },
        {
            id: 4,
            bondId: 'love',
            title: '金婚银婚·纪念照',
            category: '爱情纪念',
            desc: '穿上复古婚纱或唐装，在半坡美景中重拍一组结婚照。',
            detail: '时光不老，我们不散。为金婚、银婚的老年夫妇提供专业的摄影服务，定格执子之手、与子偕老的幸福瞬间。',
            image: 'https://images.unsplash.com/photo-1529634597503-139d372668e3?w=400',
            tags: ['浪漫夕阳', '专属摄影'],
            themeColor: 'text-[#F48FB1]',
            borderColor: 'border-[#F48FB1]',
            icon: 'fa-camera',
            iconColor: 'text-[#F48FB1]'
        }
    ];

    let currentFilter = null; // 当前筛选状态，null 表示显示全部

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderBonds() {
        const container = document.getElementById('fp-bonds-grid');
        if (!container) return;

        container.innerHTML = bonds.map(bond => {
            const isActive = currentFilter === bond.id;
            // 激活状态样式 vs 默认样式
            const containerClass = isActive 
                ? `${bond.activeColor} shadow-md scale-110` 
                : `bg-white ${bond.color} ${bond.bgHover} border ${bond.border}`;

            return `
            <div class="flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300" onclick="window.filterProject('${bond.id}')">
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${containerClass}">
                    <i class="fa-solid ${bond.icon}"></i>
                </div>
                <span class="text-xs font-bold ${isActive ? 'text-[#3E2723]' : 'text-gray-500'}">${bond.name}</span>
            </div>`;
        }).join('');
    }

    function renderProjects() {
        const container = document.getElementById('fp-projects-list');
        if (!container) return;

        // 根据筛选条件过滤数据
        const filteredProjects = currentFilter 
            ? projects.filter(p => p.bondId === currentFilter)
            : projects;

        if (filteredProjects.length === 0) {
            container.innerHTML = `<div class="text-center text-gray-400 py-10">暂无该分类下的项目</div>`;
            return;
        }

        // 添加淡入动画
        container.style.opacity = '0';
        container.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            container.innerHTML = filteredProjects.map(proj => `
                <div class="bg-white rounded-2xl p-4 shadow-sm flex gap-4 border-l-4 ${proj.borderColor} relative overflow-hidden cursor-pointer active:scale-[0.99] transition-transform hover:shadow-md" onclick="window.viewProjectDetail(${proj.id})">
                    <div class="absolute right-0 top-0 opacity-5">
                        <i class="fa-solid ${proj.icon} text-6xl ${proj.iconColor}"></i>
                    </div>
                    <div class="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                        <img src="${proj.image}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/150'">
                    </div>
                    <div class="flex-1 z-10">
                        <h3 class="font-bold ${proj.themeColor} text-base mb-1">${proj.title}</h3>
                        <div class="flex flex-wrap gap-2 mb-2">
                            ${proj.tags.map(tag => `<span class="text-[10px] bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded">${tag}</span>`).join('')}
                        </div>
                        <p class="text-xs text-gray-500 leading-tight line-clamp-2">${proj.desc}</p>
                    </div>
                </div>
            `).join('');
            
            // 恢复显示
            container.style.transition = 'all 0.3s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 50);
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    // 打开通用弹窗
    function openFamilyParkModal(title, desc, imgUrl) {
        const modal = document.getElementById('family-park-modal');
        if (!modal) {
            alert(`${title}\n\n${desc}`); 
            return;
        }

        const titleEl = document.getElementById('fp-modal-title');
        const descEl = document.getElementById('fp-modal-desc');
        const imgEl = document.getElementById('fp-modal-img');
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

    window.closeFamilyParkModal = function() {
        const modal = document.getElementById('family-park-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    window.filterProject = function(id) {
        // 如果点击已激活的分类，则取消筛选（显示全部）
        if (currentFilter === id) {
            currentFilter = null;
        } else {
            currentFilter = id;
        }
        renderBonds();
        renderProjects();
    };

    window.viewProjectDetail = function(id) {
        const project = projects.find(p => p.id === id);
        if(project) {
            openFamilyParkModal(project.title, project.detail, project.image);
        }
    };

    window.bookFamilyPackage = function() {
        const btn = document.querySelector('.fp-book-btn');
        if(btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> 预订中...';
            
            setTimeout(() => {
                openFamilyParkModal('预订成功', '亲子乐园家庭套票已预订成功！\n\n包含：\n1. 景区门票 3张\n2. 农家午餐券 1张\n3. 体验项目任选 2项\n\n请凭手机号到游客中心兑换。', null);
                btn.innerHTML = originalText;
            }, 800);
        } else {
            alert('预订功能开发中...');
        }
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initFamilyParkPage = function() {
        console.log('👨‍👩‍👧‍👦 亲情乐园页面初始化');
        renderBonds();
        renderProjects();
    };

    // 自动检测并初始化
    setTimeout(() => {
        if(document.getElementById('family-park')) {
            window.initFamilyParkPage();
        }
    }, 100);

})();