// js/literary-creation.js
(function() {
    // ==========================================
    // 1. 数据定义 (保持原样)
    // ==========================================
    const classicBooks = [
        { id: 1, title: '论语', author: '孔子', category: '儒家经典', pages: 120 },
        { id: 2, title: '道德经', author: '老子', category: '道家经典', pages: 81 },
        { id: 3, title: '诗经', author: '佚名', category: '诗歌总集', pages: 305 },
        { id: 4, title: '唐诗三百首', author: '蘅塘退士', category: '诗歌选集', pages: 300 },
        { id: 5, title: '宋词三百首', author: '朱孝臧', category: '词集', pages: 300 }
    ];

    const modernCreations = [
        { id: 1, author: '张老师', title: '秋日感怀', content: '落叶知秋意，霜降染枫林。半坡耕读乐，晚年亦芳心。', likes: 45, time: '2小时前' },
        { id: 2, author: '李教授', title: '核桃树下', content: '核桃树下话桑麻，半坡风光胜似画。退休生活多惬意，耕读传家代代夸。', likes: 67, time: '5小时前' },
        { id: 3, author: '王医师', title: '晨练偶得', content: '晨起太行云雾间，半坡景色入诗篇。养生有道身心健，耕读有伴乐无边。', likes: 38, time: '1天前' },
        { id: 4, author: '赵校长', title: '重阳登高', content: '重阳佳节登高处，太行秋色入眼来。', likes: 52, time: '2天前' }
    ];

    const galleryArtworks = [
        { id: 1, title: '兰亭序临摹', artist: '王羲之', type: '书法', image: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=400' },
        { id: 2, title: '山水小品', artist: '张大千', type: '国画', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400' },
        { id: 3, title: '梅兰竹菊', artist: '齐白石', type: '国画', image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400' },
        { id: 4, title: '行书习作', artist: '颜真卿', type: '书法', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400' },
        { id: 5, title: '荷塘月色', artist: '徐悲鸿', type: '国画', image: 'https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?w=400' }
    ];

    const audioTracks = [
        { id: 1, title: '诗经·关雎', reader: '张老师', duration: '3:45', plays: 1234 },
        { id: 2, title: '唐诗朗诵·春江花月夜', reader: '李教授', duration: '5:20', plays: 892 },
        { id: 3, title: '古琴曲·高山流水', artist: '王老师', duration: '8:15', plays: 756 }
    ];

    // ==========================================
    // 2. 渲染逻辑 (内部函数)
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
            <div class="flex items-center p-3 bg-white rounded-xl shadow-sm cursor-pointer mb-2" onclick="readBook(${book.id})">
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
            <div class="bg-white p-4 rounded-xl shadow-sm mb-3 cursor-pointer" onclick="viewCreation(${creation.id})">
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
            <div class="flex-shrink-0 w-36 mr-3 cursor-pointer group" onclick="viewArtwork(${artwork.id})">
                <div class="w-36 h-48 bg-white p-1 shadow-md mb-2 relative border border-[#E8E4DC]">
                    <div class="w-full h-full overflow-hidden relative">
                         <img src="${artwork.image}" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=400'">
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
            <div class="flex items-center bg-white p-3 rounded-xl shadow-sm mb-2 cursor-pointer" onclick="playAudio(${track.id})">
                <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3 border-2 border-[#C04851] relative overflow-hidden">
                    <div class="w-3 h-3 bg-[#C04851] rounded-full absolute"></div>
                    <div class="w-8 h-8 border border-gray-600 rounded-full absolute opacity-50"></div>
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
    
    window.switchReadingTab = function(tab) {
        const classicContent = document.getElementById('classic-content');
        const modernContent = document.getElementById('modern-content');
        const tabs = document.querySelectorAll('.lc-tab');

        if (!classicContent || !modernContent) return;

        tabs.forEach(t => {
            t.classList.remove('text-[#C04851]', 'border-b-2', 'border-[#C04851]', 'font-bold');
            t.classList.add('text-gray-500');
        });

        // 这里的 classList 操作使用了 Tailwind 样式
        if (tab === 'classic') {
            classicContent.classList.remove('hidden');
            modernContent.classList.add('hidden');
            tabs[0].classList.add('text-[#C04851]', 'border-b-2', 'border-[#C04851]', 'font-bold');
            tabs[0].classList.remove('text-gray-500');
        } else {
            classicContent.classList.add('hidden');
            modernContent.classList.remove('hidden');
            tabs[1].classList.add('text-[#C04851]', 'border-b-2', 'border-[#C04851]', 'font-bold');
            tabs[1].classList.remove('text-gray-500');
        }
    };

    window.showCreateMenu = function() {
        const menu = document.getElementById('create-menu');
        if (menu) menu.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
    };

    window.hideCreateMenu = function() {
        const menu = document.getElementById('create-menu');
        if (menu) menu.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
    };

    window.readBook = function(id) { alert(`阅读书籍 ${id}（功能开发中）`); };
    window.viewCreation = function(id) { alert(`查看创作 ${id}（功能开发中）`); };
    window.viewArtwork = function(id) { alert(`查看作品 ${id}（功能开发中）`); };
    window.playAudio = function(id) { alert(`播放音频 ${id}（功能开发中）`); };
    window.showAllGallery = function() { alert('查看全部书画作品（功能开发中）'); };
    
    window.createArticle = function() { hideCreateMenu(); alert('写文章（功能开发中）'); };
    window.uploadImage = function() { hideCreateMenu(); alert('发图片（功能开发中）'); };
    window.uploadAudio = function() { hideCreateMenu(); alert('录音频（功能开发中）'); };

    // ==========================================
    // 4. 初始化入口 (供 main.js 调用)
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

})();