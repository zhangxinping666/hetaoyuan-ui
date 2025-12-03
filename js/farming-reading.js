// js/farming-reading.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    
    // 板块介绍数据 (用于弹窗详情)
    const sectionInfo = {
        farming: {
            title: '放心菜园',
            desc: '回归田园，做一日快乐农夫。\n\n在这里，您可以认领一分田地，亲手种下希望的种子。我们提供全套农具、有机肥料及专业农技指导。平时没空打理？没关系，我们有专职管家为您代管，并在蔬菜成熟时通知您来采摘。',
            img: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600'
        },
        reading: {
            title: '半坡书院',
            desc: '晴耕雨读，修身养性。\n\n书院藏书三千余册，涵盖国学经典、农耕文化、养生保健等。每周举办读书分享会，邀您与志同道合的书友共品书香，在文字中寻找内心的宁静。',
            img: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600'
        }
    };

    // 社群动态数据
    const moments = [
        {
            id: 1,
            author: '赵老师',
            avatar: 'https://i.pravatar.cc/100?img=68',
            time: '刚刚',
            tag: '#半坡读书会',
            tagColor: 'text-[#556B2F] bg-[#556B2F]/10',
            content: '今日午后，在紫藤架下重读《陶渊明集》。"采菊东篱下，悠然见南山"，在核桃苑真真切切地体会到了那种归隐田园的意境。',
            images: [
                'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
                'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400',
                'https://images.unsplash.com/photo-1463123081278-ccdd9fd92900?w=400' 
            ],
            likes: 24,
            comments: 8,
            actionText: '申请加入',
            actionColor: 'text-[#556B2F]'
        },
        {
            id: 2,
            author: '老李头的菜园',
            avatar: 'https://i.pravatar.cc/100?img=53',
            time: '1小时前',
            tag: '#秋收喜悦',
            tagColor: 'text-[#8B4513] bg-[#8B4513]/10',
            content: '今年认领的这分地，西红柿长得太好了！纯天然无公害，一口咬下去全是汁水。周末大家记得带袋子来摘，管够！',
            images: [
                'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600'
            ],
            location: '放心菜园区-A03',
            likes: 45,
            comments: 12,
            actionText: '去看看',
            actionColor: 'text-[#8B4513]'
        },
        {
            id: 3,
            author: '王医师',
            avatar: 'https://i.pravatar.cc/100?img=11',
            time: '3小时前',
            tag: '#养生之道',
            tagColor: 'text-[#3E7A5E] bg-[#3E7A5E]/10',
            content: '晨起在半坡步道慢跑，空气真的很清新，负氧离子爆棚。顺便采了一些野菊花，准备回去泡茶，清热降火。',
            images: [], // 无图纯文字
            likes: 32,
            comments: 6,
            actionText: '同感',
            actionColor: 'text-[#3E7A5E]'
        }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderMoments() {
        const container = document.getElementById('fr-moments-list');
        if (!container) return;

        container.innerHTML = moments.map(item => {
            // 图片渲染逻辑
            let imagesHtml = '';
            
            if (item.images.length === 1) {
                // 单大图
                imagesHtml = `
                    <div class="mt-3 rounded-xl overflow-hidden h-40 relative group cursor-pointer" onclick="window.viewImage('${item.images[0]}')">
                        <img src="${item.images[0]}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.style.display='none'">
                        ${item.location ? `
                        <div class="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                            <i class="fas fa-map-marker-alt mr-1"></i> ${item.location}
                        </div>` : ''}
                    </div>`;
            } else if (item.images.length > 1) {
                // 多图网格
                imagesHtml = `<div class="mt-3 grid grid-cols-3 gap-2">
                    ${item.images.map((img, idx) => {
                        if (idx === 2 && item.images.length > 3) {
                            return `<div class="rounded-lg h-24 w-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs font-bold cursor-pointer" onclick="window.viewMoment(${item.id})">+${item.images.length - 2}</div>`;
                        }
                        if (idx < 3) {
                            return `<img src="${img}" class="rounded-lg h-24 w-full object-cover cursor-pointer hover:opacity-90" onclick="window.viewImage('${img}')" onerror="this.style.backgroundColor='#eee'">`;
                        }
                        return '';
                    }).join('')}
                </div>`;
            }

            return `
                <div class="bg-white rounded-2xl p-4 shadow-sm relative mb-4 transition-all hover:shadow-md">
                    <div class="flex gap-3">
                        <img src="${item.avatar}" class="w-10 h-10 rounded-full border border-gray-100 object-cover" onerror="this.src='https://via.placeholder.com/100'">
                        <div class="flex-1">
                            <h4 class="font-bold text-sm text-[#2F3542] flex justify-between items-center">
                                ${item.author} 
                                <span class="text-xs font-normal text-gray-400">${item.time}</span>
                            </h4>
                            <p class="text-xs ${item.tagColor} px-1.5 py-0.5 rounded inline-block mt-1 font-medium">${item.tag}</p>
                        </div>
                    </div>
                    
                    <p class="text-sm text-gray-600 mt-3 leading-relaxed cursor-pointer hover:text-gray-900 transition-colors" onclick="window.viewMoment(${item.id})">
                        ${item.content}
                    </p>
                    
                    ${imagesHtml}
                    
                    <div class="mt-3 flex justify-between items-center text-gray-400 text-xs border-t border-gray-50 pt-3">
                        <div class="flex items-center gap-6">
                            <button class="hover:text-[#C04851] cursor-pointer transition-colors flex items-center gap-1 group" onclick="window.likeMoment(this, ${item.likes})">
                                <i class="far fa-heart group-active:scale-125 transition-transform"></i> 
                                <span class="like-count">${item.likes}</span>
                            </button>
                            <button class="hover:text-[#2F3542] cursor-pointer transition-colors flex items-center gap-1" onclick="window.commentMoment(${item.id})">
                                <i class="far fa-comment"></i> ${item.comments}
                            </button>
                        </div>
                        <button class="${item.actionColor} cursor-pointer font-medium hover:underline flex items-center gap-1" onclick="window.joinGroup('${item.tag}')">
                            ${item.actionText} <i class="fas fa-angle-right text-[10px]"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    // 打开通用弹窗 (核心逻辑)
    function openFarmingModal(title, desc, imgUrl) {
        const modal = document.getElementById('farming-modal');
        if (!modal) {
            alert(`${title}\n\n${desc}`); 
            return;
        }

        const titleEl = document.getElementById('fr-modal-title');
        const descEl = document.getElementById('fr-modal-desc');
        const imgEl = document.getElementById('fr-modal-img');
        const imgContainer = imgEl ? imgEl.parentElement : null;

        if(titleEl) titleEl.innerText = title;
        if(descEl) descEl.innerText = desc || '暂无内容';
        
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

    window.closeFarmingModal = function() {
        const modal = document.getElementById('farming-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // 业务逻辑
    window.enterFarming = function() {
        const info = sectionInfo.farming;
        openFarmingModal(info.title, info.desc, info.img);
    };

    window.enterReading = function() {
        const info = sectionInfo.reading;
        openFarmingModal(info.title, info.desc, info.img);
    };

    window.joinMember = function() {
        const btn = document.getElementById('fr-join-btn');
        if (btn) {
            // 按钮状态变化
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> 提交中';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check mr-1"></i> 已申请';
                btn.classList.add('bg-gray-400', 'cursor-not-allowed');
                btn.classList.remove('bg-[#556B2F]', 'shadow-lg');
                btn.onclick = null; // 禁用点击
                
                openFarmingModal('申请已提交', '您的「半坡居士」申请已提交。\n\n书院管家将在 24 小时内与您联系，请保持电话畅通。', null);
            }, 800);
        }
    };

    window.likeMoment = function(btnElement, count) {
        const icon = btnElement.querySelector('i');
        const countSpan = btnElement.querySelector('.like-count');
        
        if (icon.classList.contains('far')) {
            // 点赞
            icon.classList.replace('far', 'fas');
            icon.style.color = '#e74c3c';
            countSpan.innerText = count + 1;
            countSpan.style.color = '#e74c3c';
        } else {
            // 取消
            icon.classList.replace('fas', 'far');
            icon.style.color = '';
            countSpan.innerText = count;
            countSpan.style.color = '';
        }
    };

    window.viewImage = function(url) {
        openFarmingModal('图片预览', '', url);
    };

    window.viewMoment = function(id) {
        const item = moments.find(m => m.id === id);
        if(item) {
            openFarmingModal(item.author + ' 的动态', item.content, item.images[0]);
        }
    };

    window.commentMoment = function(id) {
        openFarmingModal('评论', '评论功能正在升级中，敬请期待！', null);
    };

    window.joinGroup = function(tagName) {
        openFarmingModal('申请加入', `您正在申请加入 ${tagName} 圈子。\n需要管理员审核通过后方可发言。`, null);
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initFarmingReadingPage = function() {
        console.log('🌾 耕读有伴页面初始化');
        renderMoments();
    };

    // 自动检测并初始化
    setTimeout(() => {
        if(document.getElementById('farming-reading')) {
            window.initFarmingReadingPage();
        }
    }, 100);

})();