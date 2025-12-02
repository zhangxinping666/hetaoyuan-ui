// 耕读有伴 - Farming & Reading Companions

// 社群动态数据
const moments = [
    {
        id: 1,
        author: '赵老师',
        avatar: 'https://i.pravatar.cc/100?img=68',
        time: '刚刚',
        tag: '#半坡读书会',
        tagColor: 'bamboo',
        content: '今日午后，在紫藤架下重读《陶渊明集》。"采菊东篱下，悠然见南山"，在核桃苑真真切切地体会到了。',
        images: [
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=200&auto=format&fit=crop',
            '+2'
        ],
        likes: 24,
        comments: 8
    },
    {
        id: 2,
        author: '老李头的菜园',
        avatar: 'https://i.pravatar.cc/100?img=53',
        time: '1小时前',
        tag: '#秋收喜悦',
        tagColor: 'earth',
        content: '今年认领的这分地，西红柿长得太好了！周末大家记得带袋子来摘，管够！',
        images: [
            'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=600&auto=format&fit=crop'
        ],
        location: '放心菜园区-A03',
        likes: 45,
        comments: 12
    },
    {
        id: 3,
        author: '王教授',
        avatar: 'https://i.pravatar.cc/100?img=12',
        time: '3小时前',
        tag: '#书法练习',
        tagColor: 'bamboo',
        content: '今天临摹了一幅《兰亭序》，虽然笔力还不够，但心境平和了许多。退休后的生活，就该这样慢慢来。',
        images: [
            'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=600&auto=format&fit=crop'
        ],
        likes: 38,
        comments: 15
    },
    {
        id: 4,
        author: '张医师',
        avatar: 'https://i.pravatar.cc/100?img=33',
        time: '昨天',
        tag: '#养生讲座',
        tagColor: 'bamboo',
        content: '昨天的中医养生讲座很受欢迎，下周继续开讲《黄帝内经》中的四季养生之道，欢迎大家参加！',
        images: [],
        likes: 67,
        comments: 23
    }
];

// 渲染社群动态
function renderMoments() {
    const container = document.getElementById('moments-container');
    if (!container) return;

    container.innerHTML = moments.map(moment => {
        let imagesHTML = '';
        
        if (moment.images.length > 0) {
            if (moment.images.length === 1 && !moment.images[0].startsWith('+')) {
                // 单张大图
                imagesHTML = `
                    <div class="mt-3 rounded-xl overflow-hidden h-32 relative">
                        <img src="${moment.images[0]}" class="w-full h-full object-cover">
                        ${moment.location ? `
                            <div class="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                                <i class="fa-solid fa-location-dot"></i> ${moment.location}
                            </div>
                        ` : ''}
                    </div>
                `;
            } else {
                // 多张图片网格
                imagesHTML = `
                    <div class="mt-3 grid grid-cols-3 gap-2">
                        ${moment.images.map(img => {
                            if (img.startsWith('+')) {
                                return `
                                    <div class="rounded-lg h-20 w-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                                        ${img}
                                    </div>
                                `;
                            } else {
                                return `<img src="${img}" class="rounded-lg h-20 w-full object-cover">`;
                            }
                        }).join('')}
                    </div>
                `;
            }
        }

        return `
            <div class="bg-white rounded-2xl p-4 shadow-sm relative">
                <div class="flex gap-3">
                    <img src="${moment.avatar}" class="w-10 h-10 rounded-full border border-gray-200">
                    <div>
                        <h4 class="font-bold text-sm text-ink">${moment.author} <span class="text-xs font-normal text-gray-400 ml-1">${moment.time}</span></h4>
                        <p class="text-xs text-${moment.tagColor} bg-${moment.tagColor}/10 px-1.5 py-0.5 rounded inline-block mt-0.5">${moment.tag}</p>
                    </div>
                </div>
                <p class="text-sm text-gray-600 mt-3 leading-relaxed">
                    ${moment.content}
                </p>
                ${imagesHTML}
                <div class="mt-3 flex justify-between items-center text-gray-400 text-xs border-t border-gray-100 pt-2">
                    <div class="flex items-center gap-4">
                        <span class="hover:text-cinnabar cursor-pointer" onclick="likeMoment(${moment.id})">
                            <i class="fa-regular fa-heart"></i> ${moment.likes}
                        </span>
                        <span class="hover:text-ink cursor-pointer" onclick="commentMoment(${moment.id})">
                            <i class="fa-regular fa-comment"></i> ${moment.comments}
                        </span>
                    </div>
                    <span class="text-bamboo cursor-pointer" onclick="joinCommunity()">申请加入 <i class="fa-solid fa-angle-right"></i></span>
                </div>
            </div>
        `;
    }).join('');
}

// 点赞动态
function likeMoment(id) {
    console.log('点赞动态:', id);
    alert('点赞成功！');
}

// 评论动态
function commentMoment(id) {
    console.log('评论动态:', id);
    alert('评论功能开发中');
}

// 加入社群
function joinCommunity() {
    alert('感谢您的申请！我们会尽快与您联系。');
}

// 返回
function goBack() {
    window.history.back();
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌾 耕读有伴初始化');
    renderMoments();
    console.log('✅ 加载完成');
});

