// js/farming-reading.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    
    // 社群动态数据
    const moments = [
        {
            id: 1,
            author: '赵老师',
            avatar: 'https://i.pravatar.cc/100?img=68',
            time: '刚刚',
            tag: '#半坡读书会',
            tagColor: 'text-bamboo bg-bamboo/10',
            content: '今日午后，在紫藤架下重读《陶渊明集》。"采菊东篱下，悠然见南山"，在核桃苑真真切切地体会到了。',
            images: [
                'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200',
                'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=200',
                'MORE' // 标记有更多图片
            ],
            likes: 24,
            comments: 8,
            actionText: '申请加入',
            actionColor: 'text-bamboo'
        },
        {
            id: 2,
            author: '老李头的菜园',
            avatar: 'https://i.pravatar.cc/100?img=53',
            time: '1小时前',
            tag: '#秋收喜悦',
            tagColor: 'text-earth bg-earth/10',
            content: '今年认领的这分地，西红柿长得太好了！周末大家记得带袋子来摘，管够！',
            images: [
                'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600' // 单图模式
            ],
            location: '放心菜园区-A03',
            likes: 45,
            comments: 12,
            actionText: '去看看',
            actionColor: 'text-earth'
        },
        {
            id: 3,
            author: '王医师',
            avatar: 'https://i.pravatar.cc/100?img=11',
            time: '3小时前',
            tag: '#养生之道',
            tagColor: 'text-tea bg-tea/10',
            content: '晨起在半坡步道慢跑，空气真的很清新。顺便采了一些野菊花，准备回去泡茶。',
            images: [], // 无图纯文字
            likes: 32,
            comments: 6,
            actionText: '同感',
            actionColor: 'text-tea'
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
                    <div class="mt-3 rounded-xl overflow-hidden h-32 relative group cursor-pointer" onclick="viewImage('${item.images[0]}')">
                        <img src="${item.images[0]}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        ${item.location ? `
                        <div class="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                            <i class="fa-solid fa-location-dot mr-1"></i> ${item.location}
                        </div>` : ''}
                    </div>`;
            } else if (item.images.length > 1) {
                // 多图网格
                imagesHtml = `<div class="mt-3 grid grid-cols-3 gap-2">
                    ${item.images.map(img => {
                        if (img === 'MORE') {
                            return `<div class="rounded-lg h-20 w-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs font-bold cursor-pointer">+2</div>`;
                        }
                        return `<img src="${img}" class="rounded-lg h-20 w-full object-cover cursor-pointer hover:opacity-90" onclick="viewImage('${img}')">`;
                    }).join('')}
                </div>`;
            }

            return `
                <div class="bg-white rounded-2xl p-4 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] relative animate-fade-in-up">
                    <div class="flex gap-3">
                        <img src="${item.avatar}" class="w-10 h-10 rounded-full border border-gray-100">
                        <div>
                            <h4 class="font-bold text-sm text-[#2F3542]">${item.author} <span class="text-xs font-normal text-gray-400 ml-1">${item.time}</span></h4>
                            <p class="text-xs ${item.tagColor} px-1.5 py-0.5 rounded inline-block mt-0.5">${item.tag}</p>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 mt-3 leading-relaxed cursor-pointer hover:text-gray-900 transition-colors" onclick="viewMoment(${item.id})">
                        ${item.content}
                    </p>
                    ${imagesHtml}
                    <div class="mt-3 flex justify-between items-center text-gray-400 text-xs border-t border-gray-100 pt-2">
                        <div class="flex items-center gap-4">
                            <span class="hover:text-[#C04851] cursor-pointer transition-colors" onclick="likeMoment(this, ${item.likes})">
                                <i class="fa-regular fa-heart"></i> <span class="like-count">${item.likes}</span>
                            </span>
                            <span class="hover:text-[#2F3542] cursor-pointer transition-colors" onclick="commentMoment(${item.id})">
                                <i class="fa-regular fa-comment"></i> ${item.comments}
                            </span>
                        </div>
                        <span class="${item.actionColor} cursor-pointer font-medium hover:underline flex items-center gap-1" onclick="joinGroup('${item.tag}')">
                            ${item.actionText} <i class="fa-solid fa-angle-right text-[10px]"></i>
                        </span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    window.enterFarming = function() {
        // 模拟跳转或弹窗
        alert('正在前往「放心菜园」...\n您可以认领土地，体验种植乐趣。');
    };

    window.enterReading = function() {
        // 模拟跳转或弹窗
        alert('正在前往「半坡书院」...\n您可以借阅书籍，参加读书会。');
    };

    window.joinMember = function() {
        // 模拟入会流程
        const btn = document.getElementById('fr-join-btn');
        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-check mr-1"></i> 已申请';
            btn.classList.replace('bg-[#556B2F]', 'bg-gray-400');
        }
        alert('申请已提交！\n管家将在24小时内联系您，确认「半坡居士」身份。');
    };

    window.likeMoment = function(el, count) {
        const icon = el.querySelector('i');
        const countSpan = el.querySelector('.like-count');
        
        if (icon.classList.contains('fa-regular')) {
            // 点赞
            icon.classList.replace('fa-regular', 'fa-solid');
            icon.classList.add('text-[#C04851]', 'animate-bounce-small');
            countSpan.innerText = count + 1;
        } else {
            // 取消点赞
            icon.classList.replace('fa-solid', 'fa-regular');
            icon.classList.remove('text-[#C04851]', 'animate-bounce-small');
            countSpan.innerText = count;
        }
    };

    window.viewImage = function(url) {
        alert('查看大图: ' + url);
    };

    window.viewMoment = function(id) {
        alert('进入动态详情页: ' + id);
    };

    window.commentMoment = function(id) {
        alert('打开评论输入框...');
    };

    window.joinGroup = function(tagName) {
        alert('申请加入圈子: ' + tagName);
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initFarmingReadingPage = function() {
        console.log('🌾 耕读有伴页面初始化');
        renderMoments();
    };

})();