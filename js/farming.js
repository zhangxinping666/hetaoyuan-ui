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
            tags: ['核桃', '苹果', '柿子'],
            borderColor: 'border-[#D2B48C]', // loess-yellow
            decorBg: 'bg-yellow-100',
            detail: '【果树认领权益】\n1. 获得果树一年的冠名权和采摘权。\n2. 保底产量：每棵树保底产果 20斤，不足部分由园区补齐。\n3. 赠送：每年3次农事体验活动（疏花、套袋、采摘）。',
            image: 'https://images.unsplash.com/photo-1628046033480-21f47265a943?w=600'
        },
        {
            id: 'veggie',
            name: '蔬菜种植',
            icon: 'fa-carrot',
            iconColor: 'text-[#6B8E23]', // bean-green
            bgIcon: 'bg-green-50',
            tags: ['时令菜', '无公害'],
            borderColor: 'border-[#6B8E23]',
            decorBg: 'bg-green-100',
            detail: '【一分田认领】\n1. 面积：约66平方米。\n2. 模式：全托管/半托管可选。您只需周末来采摘，平日浇水施肥由我们负责。\n3. 收获：全年预计可收获时令蔬菜 300-500斤。',
            image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600'
        },
        {
            id: 'flower',
            name: '花卉种植',
            icon: 'fa-fan',
            iconColor: 'text-pink-500',
            bgIcon: 'bg-pink-50',
            tags: ['牡丹', '月季', '菊花'],
            borderColor: 'border-pink-300',
            decorBg: 'bg-pink-100',
            detail: '【私家花园】\n打造属于您的秘密花园。提供牡丹、芍药、月季等优质种苗。适合亲子家庭，让孩子在花香中观察植物生长，亲近自然。',
            image: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=600'
        },
        {
            id: 'bonsai',
            name: '盆景艺术',
            icon: 'fa-tree',
            iconColor: 'text-gray-600',
            bgIcon: 'bg-gray-100',
            tags: ['造型松', '修身养性'],
            borderColor: 'border-gray-400',
            decorBg: 'bg-gray-100',
            detail: '【盆景工坊】\n跟随大师学习盆景制作与养护。认领一盆半坡特有的太行崖柏盆景，修剪枝叶，亦是修剪内心。',
            image: 'https://images.unsplash.com/photo-1599598425947-50dc458db4ce?w=600'
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
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400',
        desc: '树龄30年以上，正值盛果期。认领即送太行山土鸡蛋一箱。',
        detail: '这是一棵见证了半坡村变迁的老核桃树。树冠巨大，遮天蔽日。\n\n【认领亮点】\n1. 产量极高，往年平均产干果 40斤以上。\n2. 树下可散养土鸡（我们也帮您代管）。\n3. 赠送核桃油压榨服务。',
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
            <div class="bg-white rounded-2xl p-4 shadow-sm border-b-4 ${zone.borderColor} relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-pointer" onclick="window.viewZoneDetail('${zone.id}')">
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
            <div class="min-w-[140px] bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-sm border border-stone-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div class="w-20 h-20 absolute -top-10 -right-10 bg-[#6B8E23]/10 rounded-full group-hover:scale-110 transition-transform"></div>
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
                <i class="fa-solid fa-fire text-orange-500 text-sm animate-pulse"></i>
                <h3 class="font-bold text-sm text-[#2F3542]">本季热推：${hotItem.title}</h3>
            </div>
            <div class="flex gap-3 cursor-pointer group" onclick="window.viewHotItem()">
                <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <img src="${hotItem.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.src='https://via.placeholder.com/200'">
                </div>
                <div class="flex-1 flex flex-col justify-between py-0.5">
                    <p class="text-xs text-gray-600 line-clamp-2 leading-relaxed">${hotItem.desc}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">仅剩 ${hotItem.stock} 棵</span>
                        <span class="font-bold text-[#6B8E23] text-lg">¥${hotItem.price}<span class="text-xs font-normal text-gray-500">${hotItem.unit}</span></span>
                    </div>
                </div>
            </div>
        `;
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    // 打开通用弹窗
    function openFarmingModal(title, desc, imgUrl, btnText = '关闭', onBtnClick = null) {
        const modal = document.getElementById('farming-page-modal');
        if (!modal) {
            alert(`${title}\n\n${desc}`); 
            return;
        }

        const titleEl = document.getElementById('fa-modal-title');
        const descEl = document.getElementById('fa-modal-desc');
        const imgEl = document.getElementById('fa-modal-img');
        const imgContainer = imgEl ? imgEl.parentElement : null;
        const btnEl = document.getElementById('fa-modal-btn');

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

        if(btnEl) {
            btnEl.innerText = btnText;
            // 重新绑定事件
            const newBtn = btnEl.cloneNode(true);
            btnEl.parentNode.replaceChild(newBtn, btnEl);
            newBtn.onclick = function() {
                if(onBtnClick) onBtnClick();
                window.closeFarmingModal();
            };
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    window.closeFarmingModal = function() {
        const modal = document.getElementById('farming-page-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    window.viewZoneDetail = function(id) {
        const zone = zones.find(z => z.id === id);
        if(zone) {
            openFarmingModal(zone.name, zone.detail, zone.image, '申请认领', () => window.becomeOwner(zone.name));
        }
    };

    window.viewHotItem = function() {
        openFarmingModal(hotItem.title, hotItem.detail, hotItem.image, '立即抢订', () => window.becomeOwner(hotItem.title));
    };

    window.bookVisitFarm = function() {
        const btn = document.querySelector('.fa-visit-btn');
        if(btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> 预约中...';
            setTimeout(() => {
                openFarmingModal('预约成功', '实地考察预约已提交。\n\n我们的农场管家将带您亲自挑选心仪的地块。', null, '好的');
                btn.innerHTML = originalText;
            }, 800);
        } else {
            openFarmingModal('预约考察', '欢迎周末带家人来半坡农场实地考察。\n\n请联系客服：0371-12345678', null, '拨打电话');
        }
    };

    window.becomeOwner = function(itemName) {
        // 模拟申请流程
        setTimeout(() => {
            openFarmingModal('申请已受理', `您申请认领的【${itemName || '田园地块'}】已记录。\n\n请保持电话畅通，我们将核实库存后与您联系签订认领协议。`, null, '我知道了');
        }, 300);
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

    // 自动检测并初始化
    setTimeout(() => {
        if(document.getElementById('farming')) {
            window.initFarmingPage();
        }
    }, 100);

})();