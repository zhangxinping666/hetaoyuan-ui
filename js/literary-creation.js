// js/literary-creation.js
(function() {
    // ==========================================
    // 1. 数据定义 (内容增强版)
    // ==========================================
    const classicBooks = [
        { id: 1, title: '论语', author: '孔子', category: '儒家经典', pages: 120, desc: '儒家学派经典著作，记录了孔子及其弟子的言行，集中体现了孔子的政治主张、伦理思想、道德观念及教育原则。', img: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400' },
        { id: 2, title: '道德经', author: '老子', category: '道家经典', pages: 81, desc: '道家哲学思想的重要来源，论述了"道"与"德"的关系，充满了辩证法思想，被誉为"万经之王"。', img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400' },
        { id: 3, title: '诗经', author: '佚名', category: '诗歌总集', pages: 305, desc: '中国最早的一部诗歌总集，收集了西周初年至春秋中叶的诗歌，反映了当时的社会生活与民俗风情。', img: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400' },
        { id: 4, title: '唐诗三百首', author: '蘅塘退士', category: '诗歌选集', pages: 300, desc: '流传最广的唐诗选本，收录了唐代七十多位诗人的三百余首诗歌，是学习中国古典诗歌的入门读物。', img: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=400' },
        { id: 5, title: '宋词三百首', author: '朱孝臧', category: '词集', pages: 300, desc: '宋词选本中的佼佼者，收录了宋代词人的代表作品，展现了宋词婉约与豪放并存的艺术魅力。', img: 'https://images.unsplash.com/photo-1544377375-16c805eb3e82?w=400' }
    ];

    const modernCreations = [
        { id: 1, author: '张老师', title: '秋日感怀', content: '落叶知秋意，霜降染枫林。半坡耕读乐，晚年亦芳心。\n\n今日在半坡书院漫步，见满山红叶，不禁感叹岁月静好。退休后的生活，虽无案牍之劳形，却有耕读之雅趣。', likes: 45, time: '2小时前' },
        { id: 2, author: '李教授', title: '核桃树下', content: '核桃树下话桑麻，半坡风光胜似画。退休生活多惬意，耕读传家代代夸。\n\n半坡的核桃熟了，与几位老友在树下品茶论道，实乃人生一大快事。', likes: 67, time: '5小时前' },
        { id: 3, author: '王医师', title: '晨练偶得', content: '晨起太行云雾间，半坡景色入诗篇。养生有道身心健，耕读有伴乐无边。\n\n清晨的空气格外清新，太行山的轮廓在云雾中若隐若现，美不胜收。', likes: 38, time: '1天前' },
        { id: 4, author: '赵校长', title: '重阳登高', content: '重阳佳节登高处，太行秋色入眼来。\n\n岁岁重阳，今又重阳，战地黄花分外香。带领学生们登高望远，传承中华传统文化。', likes: 52, time: '2天前' }
    ];

    const galleryArtworks = [
        { id: 1, title: '兰亭序临摹', artist: '王羲之', type: '书法', image: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=400', desc: '临摹"天下第一行书"，笔法精妙，气韵生动。' },
        { id: 2, title: '山水小品', artist: '张大千', type: '国画', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400', desc: '泼墨山水，意境深远，尺幅之间见天地。' },
        { id: 3, title: '梅兰竹菊', artist: '齐白石', type: '国画', image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400', desc: '花鸟虫鱼，妙趣横生，尽显生活情趣。' },
        { id: 4, title: '行书习作', artist: '颜真卿', type: '书法', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400', desc: '颜筋柳骨，雄强浑厚，正大气象。' },
        { id: 5, title: '荷塘月色', artist: '徐悲鸿', type: '国画', image: 'https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?w=400', desc: '笔墨淋漓，荷花清雅，尽显君子之风。' }
    ];

    const audioTracks = [
        { id: 1, title: '诗经·关雎', reader: '张老师', duration: '3:45', plays: 1234, img: 'https://images.unsplash.com/photo-1507838153414-b4b713384ebd?w=400', desc: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。' },
        { id: 2, title: '唐诗朗诵·春江花月夜', reader: '李教授', duration: '5:20', plays: 892, img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400', desc: '春江潮水连海平，海上明月共潮生。' },
        { id: 3, title: '古琴曲·高山流水', artist: '王老师', duration: '8:15', plays: 756, img: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=400', desc: '巍巍乎志在高山，洋洋乎志在流水。' }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function initDate() {
        const today = new Date();
        const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
        const dateEl = document.getElementById('lc-daily-date');
        if (dateEl) {
            dateEl.textContent = `${months[today.getMonth()]}月${today.getDate()}日`;
        }
    }

    function renderClassicBooks() {
        const container = document.getElementById('classic-books');
        if (!container) return;
        container.innerHTML = classicBooks.map(book => `
            <div class="flex items-center p-3 bg-white rounded-xl shadow-sm cursor-pointer mb-2 hover:shadow-md transition-shadow" onclick="window.readBook(${book.id})">
                <div class="w-10 h-14 bg-[#8B4513] rounded-l-sm rounded-r mr-3 shadow-inner flex items-center justify-center border-l-2 border-[#A0522D]">
                   <span class="text-[8px] text-[#F5DEB3] writing-vertical font-serif tracking-widest">${book.title.substring(0,2)}</span>
                </div>
                <div class="flex-1">
                    <h3 class="text-sm font-bold text-[#3E4E5E]">${book.title}</h3>
                    <p class="text-xs text-gray-500">${book.author}</p>
                </div>
                <div class="text-right">
                    <span class="block text-[10px] text-[#C04851] bg-[#FFF0F0] px-1.5 py-0.5 rounded">${book.category}</span>
                    <span class="block text-[10px] text-gray-400 mt-1">${book.pages}篇</span>
                </div>
            </div>
        `).join('');
    }

    function renderModernCreations() {
        const container = document.getElementById('modern-creations');
        if (!container) return;
        container.innerHTML = modernCreations.map(creation => `
            <div class="bg-white p-4 rounded-xl shadow-sm mb-3 cursor-pointer hover:shadow-md transition-shadow" onclick="window.viewCreation(${creation.id})">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-[#3E4E5E]">${creation.author}</span>
                    <span class="text-[10px] text-gray-400">${creation.time}</span>
                </div>
                <h3 class="text-sm font-bold text-[#333] mb-1">${creation.title}</h3>
                <p class="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-2">${creation.content}</p>
                <div class="flex justify-end border-t border-gray-50 pt-2">
                    <button class="flex items-center text-xs text-gray-400 hover:text-[#C04851]">
                        <i class="far fa-heart mr-1"></i> <span>${creation.likes}</span>
                    </button>
                </div>
            </div>
        `).join('');
    }

    function renderGallery() {
        const container = document.getElementById('gallery-scroll');
        if (!container) return;
        container.innerHTML = galleryArtworks.map(artwork => `
            <div class="flex-shrink-0 w-36 mr-3 cursor-pointer group" onclick="window.viewArtwork(${artwork.id})">
                <div class="w-36 h-48 bg-white p-1 shadow-md mb-2 relative border border-[#E8E4DC]">
                    <div class="w-full h-full overflow-hidden relative">
                         <img src="${artwork.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                              onerror="this.src='https://via.placeholder.com/400x600/eee/999?text=书画'">
                    </div>
                </div>
                <div class="text-center">
                    <h3 class="text-xs font-bold text-[#3E4E5E]">${artwork.title}</h3>
                    <p class="text-[10px] text-gray-500">${artwork.artist} · ${artwork.type}</p>
                </div>
            </div>
        `).join('');
    }

    function renderAudioPlayer() {
        const container = document.getElementById('audio-player');
        if (!container) return;
        container.innerHTML = audioTracks.map(track => `
            <div class="flex items-center bg-white p-3 rounded-xl shadow-sm mb-2 cursor-pointer hover:shadow-md transition-shadow" onclick="window.playAudio(${track.id})">
                <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3 border-2 border-[#C04851] relative overflow-hidden">
                    <img src="${track.img}" class="w-full h-full object-cover opacity-80" onerror="this.style.display='none'">
                    <div class="w-2 h-2 bg-[#C04851] rounded-full absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div class="flex-1">
                    <h3 class="text-sm font-bold text-[#3E4E5E]">${track.title}</h3>
                    <p class="text-[10px] text-gray-500">
                        ${track.reader || track.artist} · ${track.duration} · ${track.plays}次播放
                    </p>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-[#C04851] active:scale-90 transition-transform">
                    <i class="fas fa-play-circle text-2xl"></i>
                </button>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================
    
    // 打开通用弹窗
    function openLiteraryModal(title, desc, imgUrl) {
        const modal = document.getElementById('literary-modal');
        if (!modal) {
            alert(`${title}\n\n${desc}`); 
            return;
        }

        const titleEl = document.getElementById('lc-modal-title');
        const descEl = document.getElementById('lc-modal-desc');
        const imgEl = document.getElementById('lc-modal-img');
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

    window.closeLiteraryModal = function() {
        const modal = document.getElementById('literary-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // Tab 切换逻辑
    window.switchReadingTab = function(tab) {
        const classicContent = document.getElementById('classic-content');
        const modernContent = document.getElementById('modern-content');
        const tabs = document.querySelectorAll('.lc-tab');

        if (!classicContent || !modernContent) return;

        // 重置样式
        tabs.forEach(t => {
            t.classList.remove('text-[#C04851]', 'border-b-2', 'border-[#C04851]', 'font-bold');
            t.classList.add('text-gray-500');
        });

        // 切换显示
        if (tab === 'classic') {
            classicContent.classList.remove('hidden');
            modernContent.classList.add('hidden');
            if(tabs[0]) {
                tabs[0].classList.add('text-[#C04851]', 'border-b-2', 'border-[#C04851]', 'font-bold');
                tabs[0].classList.remove('text-gray-500');
            }
        } else {
            classicContent.classList.add('hidden');
            modernContent.classList.remove('hidden');
            if(tabs[1]) {
                tabs[1].classList.add('text-[#C04851]', 'border-b-2', 'border-[#C04851]', 'font-bold');
                tabs[1].classList.remove('text-gray-500');
            }
        }
    };

    // 创作菜单逻辑
    window.showCreateMenu = function() {
        const menu = document.getElementById('create-menu');
        if (menu) menu.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
    };

    window.hideCreateMenu = function() {
        const menu = document.getElementById('create-menu');
        if (menu) menu.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
    };

    // 业务点击事件
    window.readBook = function(id) {
        const item = classicBooks.find(b => b.id === id);
        if(item) openLiteraryModal(item.title, `作者：${item.author}\n篇章：${item.pages}篇\n\n${item.desc}`, item.img);
    };

    window.viewCreation = function(id) {
        const item = modernCreations.find(c => c.id === id);
        if(item) openLiteraryModal(item.title, `作者：${item.author}\n时间：${item.time}\n\n${item.content}`, null);
    };

    window.viewArtwork = function(id) {
        const item = galleryArtworks.find(a => a.id === id);
        if(item) openLiteraryModal(item.title, `作者：${item.artist}\n类型：${item.type}\n\n${item.desc}`, item.image);
    };

    window.playAudio = function(id) {
        const item = audioTracks.find(t => t.id === id);
        if(item) openLiteraryModal(item.title, `▶ (正在播放音频...)\n\n朗读者/演奏：${item.reader || item.artist}\n时长：${item.duration}\n\n${item.desc}`, item.img);
    };

    window.showAllGallery = function() { 
        alert('查看全部书画作品（功能开发中）'); 
    };
    
    // 创作按钮逻辑
    window.createArticle = function() { 
        hideCreateMenu(); 
        openLiteraryModal('写文章', '文章编辑器正在加载中...\n请稍后重试。', null);
    };
    
    window.uploadImage = function() { 
        hideCreateMenu(); 
        openLiteraryModal('发图片', '图片上传功能正在维护中...', null);
    };
    
    window.uploadAudio = function() { 
        hideCreateMenu(); 
        openLiteraryModal('录音频', '录音功能需要麦克风权限，功能开发中...', null);
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initLiteraryCreationPage = function() {
        console.log('📚 文艺创作 - 数字书房初始化 (v2.0)');
        initDate();
        renderClassicBooks();
        renderModernCreations();
        renderGallery();
        renderAudioPlayer();
        console.log('✅ 所有模块加载完成');
    };

    // 自动检测并初始化
    setTimeout(() => {
        if(document.getElementById('literary-creation')) {
            window.initLiteraryCreationPage();
        }
    }, 100);

})();