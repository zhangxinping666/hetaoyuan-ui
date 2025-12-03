// js/banpo-talks.js
(function() {
    // ==========================================
    // 1. 数据定义 (内容增强版)
    // ==========================================
    
    // 每日一签
    const wisdoms = [
        { text: '学而时习之，不亦说乎', source: '《论语·学而》' },
        { text: '温故而知新，可以为师矣', source: '《论语·为政》' },
        { text: '三人行，必有我师焉', source: '《论语·述而》' },
        { text: '知之者不如好之者，好之者不如乐之者', source: '《论语·雍也》' },
        { text: '食不厌精，脍不厌细', source: '《论语·乡党》' },
        { text: '饮食有节，起居有常', source: '《黄帝内经》' },
        { text: '春生夏长，秋收冬藏', source: '《黄帝内经》' },
        { text: '恬淡虚无，真气从之', source: '《黄帝内经》' }
    ];

    // 杏林馆 (视频讲座)
    const medicalVideos = [
        { 
            id: 1, 
            title: '心血管健康养护指南', 
            lecturer: '张教授', 
            duration: '45分钟', 
            tag: '专家号', 
            thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400', 
            views: 1234, 
            desc: '张教授深入浅出地讲解心血管疾病的预防与日常养护，重点分析了高血压、冠心病的早期信号，适合中老年朋友观看。' 
        },
        { 
            id: 2, 
            title: '中医养生：四季调理', 
            lecturer: '李医师', 
            duration: '38分钟', 
            tag: '养生', 
            thumbnail: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400', 
            views: 892, 
            desc: '顺应四时变化，调整饮食起居。李医师教你如何通过中医智慧，在春生、夏长、秋收、冬藏中保持身体平衡。' 
        },
        { 
            id: 3, 
            title: '老年营养学基础', 
            lecturer: '王营养师', 
            duration: '52分钟', 
            tag: '营养', 
            thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400', 
            views: 756, 
            desc: '科学饮食，健康长寿。王营养师为您解读老年人膳食宝塔，详细介绍蛋白质、钙质的补充要点及常见误区。' 
        }
    ];

    // 墨香阁 (书画作品)
    const artworks = [
        { id: 1, title: '兰亭序临摹', author: '王羲之', type: '书法', image: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=300', desc: '天下第一行书，笔法精妙，气韵生动。此作为半坡书画社社员临摹精品。' },
        { id: 2, title: '山水小品', author: '张大千', type: '国画', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300', desc: '泼墨山水，意境深远，尺幅之间见天地。笔墨苍润，格调高古。' },
        { id: 3, title: '梅兰竹菊', author: '齐白石', type: '国画', image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=300', desc: '梅之傲骨，兰之幽香，竹之劲节，菊之隐逸。四君子图展现了文人的精神追求。' },
        { id: 4, title: '行书习作', author: '颜真卿', type: '书法', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300', desc: '颜筋柳骨，雄强浑厚，正大气象。此幅习作结体宽博，气势磅礴。' }
    ];

    // 百草园 (植物种植)
    const plants = [
        { id: 1, name: '核桃树', category: '果树', difficulty: '简单', icon: '🌰', color: '#8B7355', desc: '半坡特产。适应性强，喜光，耐寒。果实营养丰富，具有健脑益智的功效。每年秋季可采摘。' },
        { id: 2, name: '阳台蔬菜', category: '蔬菜', difficulty: '简单', icon: '🥬', color: '#7CB342', desc: '利用阳台空间种植生菜、小葱等，享受从田间到餐桌的新鲜与乐趣。需保持土壤湿润，阳光充足。' },
        { id: 3, name: '中草药', category: '药材', difficulty: '中等', icon: '🌿', color: '#66BB6A', desc: '种植薄荷、紫苏等常见中草药，既可观赏，又可药用、食用。平时注意通风，防虫害。' },
        { id: 4, name: '花卉盆栽', category: '观赏', difficulty: '简单', icon: '🌸', color: '#EC407A', desc: '美化环境，陶冶情操。不同花卉有不同的养护习性，需注意光照时长和浇水频率。' },
        { id: 5, name: '茶树种植', category: '经济作物', difficulty: '中等', icon: '🍵', color: '#689F38', desc: '体验采茶、制茶的乐趣。茶树喜温暖湿润气候，需酸性土壤。清明前后采摘最佳。' },
        { id: 6, name: '香草园艺', category: '香料', difficulty: '简单', icon: '🌱', color: '#9CCC65', desc: '迷迭香、百里香等香草，气味芬芳，可用于烹饪提味或制作香囊。适合新手入门。' }
    ];

    // 茶话会 (社区话题)
    const topics = [
        { id: 1, author: '张老师', avatar: 'https://i.pravatar.cc/150?img=1', title: '今天在半坡种的核桃树发芽了！', content: '分享一下我的种植心得，选择合适的土壤很重要。我用了腐叶土和园土混合，保持湿润但不要积水。大家有种植核桃树的经验吗？', time: '2小时前', likes: 23, comments: 8 },
        { id: 2, author: '李教授', avatar: 'https://i.pravatar.cc/150?img=2', title: '关于书法临摹的几点体会', content: '最近在练习王羲之的兰亭序，深感"意在笔先"的重要性。不仅仅是模仿字形，更要揣摩书写时的心境。有一些心得想和大家交流...', time: '5小时前', likes: 45, comments: 12 },
        { id: 3, author: '王医师', avatar: 'https://i.pravatar.cc/150?img=3', title: '秋季养生小贴士', content: '秋天到了，天气转凉，空气干燥。建议大家多吃白色食物，如百合、银耳、莲藕，以润肺生津。早睡早起，适度运动。', time: '1天前', likes: 67, comments: 20 }
    ];

    // ==========================================
    // 2. 渲染逻辑 (内部函数)
    // ==========================================

    function initDailyWisdom() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
        const wisdom = wisdoms[dayOfYear % wisdoms.length];

        // 更新日期
        const dateEl = document.getElementById('daily-date');
        if (dateEl) {
            const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
            dateEl.textContent = `${months[today.getMonth()]}月${today.getDate()}日`;
        }

        // 更新签文 (带简单的淡入动画)
        const wisdomEl = document.getElementById('daily-wisdom');
        const sourceEl = document.querySelector('.bt-wisdom__source');
        
        if (wisdomEl && sourceEl) {
            wisdomEl.style.opacity = '0';
            sourceEl.style.opacity = '0';
            
            setTimeout(() => {
                wisdomEl.textContent = wisdom.text;
                sourceEl.textContent = `—— ${wisdom.source}`;
                
                wisdomEl.style.transition = 'opacity 0.8s ease';
                sourceEl.style.transition = 'opacity 0.8s ease 0.3s'; // 延迟显示来源
                
                wisdomEl.style.opacity = '1';
                sourceEl.style.opacity = '1';
            }, 100);
        }
    }

    function renderVideoList() {
        const container = document.getElementById('video-list');
        if (!container) return;
        container.innerHTML = medicalVideos.map(video => `
            <article class="bt-video-card flex gap-3 p-3 bg-white rounded-xl shadow-sm mb-3 cursor-pointer hover:bg-gray-50 transition-colors" onclick="window.playVideo(${video.id})">
                <div class="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img src="${video.thumbnail}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x300/eee/999?text=视频'">
                    <span class="absolute bottom-1 right-1 text-[10px] text-white bg-black/60 px-1 rounded">${video.duration}</span>
                </div>
                <div class="flex-1 flex flex-col justify-between">
                    <h3 class="text-sm font-bold text-[#3E4E5E] line-clamp-2">${video.title}</h3>
                    <div class="flex items-center justify-between text-xs text-gray-500 mt-1">
                        <span class="bg-[#F0F9F4] text-[#3E7A5E] px-1.5 py-0.5 rounded">${video.tag}</span>
                        <span>${video.views}次观看</span>
                    </div>
                </div>
            </article>
        `).join('');
    }

    function renderArtworkScroll() {
        const container = document.getElementById('artwork-scroll');
        if (!container) return;
        container.innerHTML = artworks.map(art => `
            <article class="flex-shrink-0 w-36 mr-3 cursor-pointer group" onclick="window.viewArtwork(${art.id})">
                <div class="w-36 h-48 rounded-lg overflow-hidden mb-2 relative shadow-md bg-gray-100">
                    <img src="${art.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://via.placeholder.com/300x400/eee/999?text=书画'">
                    <span class="absolute top-2 left-2 bg-white/90 text-[10px] px-2 py-0.5 rounded font-bold text-[#C04851]">${art.type}</span>
                </div>
                <h3 class="text-xs font-bold text-center text-[#3E4E5E]">${art.title}</h3>
                <p class="text-[10px] text-center text-gray-500">${art.author}</p>
            </article>
        `).join('');
    }

    function renderGardenGrid() {
        const container = document.getElementById('garden-grid');
        if (!container) return;
        container.innerHTML = plants.map(plant => `
            <article class="bg-white p-3 rounded-xl shadow-sm flex flex-col items-center cursor-pointer relative overflow-hidden hover:shadow-md transition-shadow" onclick="window.viewPlantDetail(${plant.id})">
                <div class="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-2xl mb-2">${plant.icon}</div>
                <h3 class="text-sm font-bold text-[#3E4E5E]">${plant.name}</h3>
                <div class="flex gap-1 mt-1">
                    <span class="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">${plant.category}</span>
                </div>
                <div class="absolute top-0 left-0 w-1 h-full" style="background-color: ${plant.color}"></div>
            </article>
        `).join('');
    }

    function renderTopicList() {
        const container = document.getElementById('topic-list');
        if (!container) return;
        container.innerHTML = topics.map(topic => `
            <article class="bg-white p-4 rounded-xl shadow-sm mb-3 hover:shadow-md transition-shadow" onclick="window.viewTopic(${topic.id})">
                <div class="flex items-center mb-2">
                    <img class="w-8 h-8 rounded-full mr-2 bg-gray-200" src="${topic.avatar}" alt="${topic.author}" onerror="this.src='https://via.placeholder.com/50'">
                    <div class="flex-1">
                        <div class="text-xs font-bold text-[#3E4E5E]">${topic.author}</div>
                        <div class="text-[10px] text-gray-400">${topic.time}</div>
                    </div>
                </div>
                <h3 class="text-sm font-bold text-[#333] mb-1">${topic.title}</h3>
                <p class="text-xs text-gray-600 line-clamp-2 mb-2">${topic.content}</p>
                <div class="flex items-center gap-4 text-xs text-gray-400 border-t border-gray-50 pt-2">
                    <span class="flex items-center"><i class="far fa-heart mr-1"></i> ${topic.likes}</span>
                    <span class="flex items-center"><i class="far fa-comment mr-1"></i> ${topic.comments}</span>
                </div>
            </article>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window 以供 HTML 调用)
    // ==========================================
    
    // 打开通用弹窗 (核心逻辑)
    function openBanpoTalksModal(title, desc, imgUrl) {
        const modal = document.getElementById('banpo-talks-modal');
        if (!modal) {
            alert(`${title}\n\n${desc}`); // 降级处理
            return;
        }

        const titleEl = document.getElementById('bt-modal-title');
        const descEl = document.getElementById('bt-modal-desc');
        const imgEl = document.getElementById('bt-modal-img');
        const imgContainer = imgEl ? imgEl.parentElement : null;

        // 填充内容
        if(titleEl) titleEl.innerText = title;
        if(descEl) descEl.innerText = desc || '暂无描述';
        
        // 图片处理
        if(imgEl && imgContainer) {
            if(imgUrl) {
                imgEl.src = imgUrl;
                imgContainer.classList.remove('hidden');
                imgContainer.style.display = 'block';
            } else {
                imgContainer.classList.add('hidden');
                imgContainer.style.display = 'none';
            }
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    // 关闭弹窗
    window.closeBanpoTalksModal = function() {
        const modal = document.getElementById('banpo-talks-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // 业务调用封装
    window.playVideo = function(id) {
        const item = medicalVideos.find(v => v.id === id);
        if(item) openBanpoTalksModal(item.title, `▶ (正在播放视频...)\n\n${item.desc}`, item.thumbnail);
    };

    window.viewArtwork = function(id) {
        const item = artworks.find(a => a.id === id);
        if(item) openBanpoTalksModal(item.title, `作者：${item.author}\n类型：${item.type}\n\n${item.desc}`, item.image);
    };

    window.viewPlantDetail = function(id) {
        const item = plants.find(p => p.id === id);
        if(item) {
            // 植物没图，用图标代替
            const content = `类别：${item.category}\n难度：${item.difficulty}\n\n${item.desc}`;
            // 传入 null 作为图片 URL，触发隐藏图片容器逻辑
            openBanpoTalksModal(`${item.icon} ${item.name}`, content, null);
        }
    };

    window.viewTopic = function(id) {
        const item = topics.find(t => t.id === id);
        if(item) openBanpoTalksModal(item.title, `发帖人：${item.author}\n时间：${item.time}\n\n${item.content}`, null);
    };

    window.createNewTopic = function() {
        openBanpoTalksModal('发起新话题', '话题发布功能正在开发中...\n请稍后重试。', null);
    };

    window.showAllVideos = function() { alert('查看全部医学讲座（功能开发中）'); };
    window.showAllArtworks = function() { alert('查看全部书画作品（功能开发中）'); };
    window.showAllPlants = function() { alert('查看全部种植指南（功能开发中）'); };
    window.showAllTopics = function() { alert('查看全部话题（功能开发中）'); };

    // ==========================================
    // 4. 初始化入口 (供 main.js 调用)
    // ==========================================
    window.initBanpoTalksPage = function() {
        console.log('🏛️ 半坡讲谈 - 掌上书院初始化 (v2.0)');
        initDailyWisdom();
        renderVideoList();
        renderArtworkScroll();
        renderGardenGrid();
        renderTopicList();
        console.log('✅ 所有模块加载完成');
    };

    // 自动检测并初始化
    setTimeout(() => {
        if(document.getElementById('banpo-talks')) {
            window.initBanpoTalksPage();
        }
    }, 100);

})();