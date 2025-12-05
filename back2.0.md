**Role:** 资深 UI/UX 设计师 & 前端工程师 (Expert WeChat Mini-Program Developer)

**Task:** 基于 V2.1 架构，进一步优化首页设计，实现 **V2.2 版本**。

**🔥 核心变更 (V2.2 Requirements):**

1. **首页搜索栏升级 (Aesthetic Search Bar):**
    
    - **位置:** 悬浮在顶部 Hero 图片之上 (Fixed/Sticky)。
        
    - **样式:** 采用 **毛玻璃效果 (Glassmorphism)** 的胶囊形状。半透明白色背景，带有模糊效果，阴影柔和。
        
    - **布局:** 左侧显示 Logo/地点，中间是宽大的搜索输入框（带“搜索景点、美食...”提示），右侧是“导航”图标。
        
2. **首页新增“核桃苑文化”板块 (Culture Section):**
    
    - **位置:** 放在 Hero 轮播图下方，经典展示之前。
        
    - **内容 1 (价值观卡片):** 展示愿景、使命、价值观。
        
        - _愿景:_ 让食材回归本真的味道，让生命绽放积极的价值。
            
        - _价值观:_ 舍得、归真、开创、学习、智慧、健康、合作、坦然。
            
    - **内容 2 (半坡等闲序):** 展示那段优美的序言。
        
        - **设计:** 采用 **新中式竖排 (Vertical Text)** 布局，背景使用淡淡的山水墨迹。
            
        - _交互:_ 由于文字较长，默认只展示前几句（如“太行奔腾而来...”），提供“展开阅读”或弹窗查看全文的功能。
            
3. **其他保持不变:**
    
    - 底部的 3 Tab 架构 (`讲谈` - `首页` - `定制`)。
        
    - `讲谈` 和 `定制` 页面的内容结构。
        
    - 电话联系模态框逻辑。
        

**🎨 视觉风格 (Visual Style):**

- **配色:** 朱砂红 (`#B83B3B`) + 暖米白 (`#F7F5F2`) + 墨色 (`#2D2D2D`)。
    
- **字体:** 标题使用宋体 (Serif)，正文使用黑体 (Sans-serif)。
    
- **氛围:** 雅致、文化厚重感、透气。
    

**Technical Constraints:**

- Output: Single HTML file with Tailwind CSS.
    
- Use `backdrop-blur` for the search bar.
    
- Ensure text readability on the culture section.

```html
<!DOCTYPE html>

<html lang="zh-CN">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <title>核桃苑 V2.2</title>

    <script src="https://cdn.tailwindcss.com"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <script>

        tailwind.config = {

            theme: {

                extend: {

                    colors: {

                        'vermilion': '#B83B3B',     /* 朱砂红 */

                        'rice-paper': '#F7F5F2',    /* 米白背景 */

                        'ink-dark': '#2D2D2D',      /* 墨黑 */

                        'ink-light': '#5D5D5D',     /* 浅墨 */

                        'gold-accent': '#C5A065',   /* 鎏金 */

                    },

                    fontFamily: {

                        'serif': ['"Songti SC"', '"SimSun"', '"Noto Serif SC"', 'serif'],

                        'sans': ['"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],

                        'calligraphy': ['"Kaiti"', '"STKaiti"', 'serif'],

                    },

                    boxShadow: {

                        'soft': '0 8px 30px -5px rgba(184, 59, 59, 0.1)',

                        'floating': '0 -4px 15px rgba(0,0,0,0.03)',

                        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',

                    },

                    backgroundImage: {

                        'ink-texture': "url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E')",

                    }

                }

            }

        }

    </script>

    <style>

        .hide-scrollbar::-webkit-scrollbar { display: none; }

        .view-section { display: none; animation: fadeIn 0.4s ease; }

        .view-section.active { display: block; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* 竖排文字 */

        .writing-vertical {

            writing-mode: vertical-rl;

            text-orientation: upright;

            letter-spacing: 0.15em;

        }

  

        /* 底部导航凸起装饰 */

        .nav-center-bg {

            position: absolute;

            top: -25px;

            left: 50%;

            transform: translateX(-50%);

            width: 70px;

            height: 70px;

            background: #F7F5F2;

            border-radius: 50%;

            z-index: -1;

            box-shadow: 0 -4px 10px rgba(0,0,0,0.05);

        }

    </style>

</head>

<body class="bg-rice-paper text-ink-dark font-sans h-screen flex flex-col select-none overflow-hidden">

  

    <!-- ================= VIEW 1: 首页 (HOME) ================= -->

    <div id="view-home" class="view-section active flex-1 overflow-y-auto relative bg-ink-texture">

        <!-- 1. Aesthetic Search Bar (悬浮毛玻璃搜索栏) -->

        <div class="fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300" id="search-bar">

            <div class="bg-white/70 backdrop-blur-md rounded-full shadow-glass border border-white/40 p-2 flex items-center justify-between">

                <!-- Logo Area -->

                <div class="flex items-center gap-2 pl-2">

                    <div class="w-8 h-8 bg-vermilion rounded-full flex items-center justify-center text-white font-serif font-bold shadow-sm">

                        核

                    </div>

                </div>

                <!-- Search Input Trigger -->

                <div class="flex-1 mx-3 h-9 bg-white/50 rounded-full flex items-center px-4 gap-2 cursor-text border border-gray-100/50" onclick="alert('触发搜索功能')">

                    <i class="fa-solid fa-magnifying-glass text-gray-400 text-xs"></i>

                    <span class="text-xs text-gray-400">搜索景点、美食、文化...</span>

                </div>

  

                <!-- Navigation Action -->

                <button class="w-9 h-9 rounded-full bg-vermilion text-white flex items-center justify-center shadow-lg shadow-red-200 active:scale-90 transition-transform" onclick="alert('打开地图导航')">

                    <i class="fa-solid fa-location-arrow text-xs"></i>

                </button>

            </div>

        </div>

  

        <!-- 2. Hero Image -->

        <div class="relative h-72 w-full overflow-hidden">

            <img src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover">

            <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-rice-paper"></div>

            <!-- Slogan Overlay -->

            <div class="absolute bottom-10 left-6 text-white text-shadow-sm">

                <p class="font-serif text-lg tracking-[0.3em] opacity-90 mb-1">半坡等闲</p>

                <h1 class="font-serif text-3xl font-bold tracking-widest">品味传统 · 悦享生活</h1>

            </div>

        </div>

  

        <!-- 3. Culture Section (新增：核桃苑文化) -->

        <section class="px-4 -mt-6 relative z-10 mb-8">

            <div class="bg-white rounded-2xl p-5 shadow-soft border-t-2 border-vermilion/20 relative overflow-hidden">

                <!-- 背景水印 -->

                <div class="absolute top-0 right-0 opacity-5 pointer-events-none">

                     <i class="fa-solid fa-scroll text-9xl"></i>

                </div>

  

                <!-- 核心价值观 (Grid) -->

                <div class="grid grid-cols-4 gap-2 mb-5 pb-5 border-b border-dashed border-gray-200">

                    <div class="text-center">

                        <div class="w-10 h-10 mx-auto bg-red-50 text-vermilion rounded-full flex items-center justify-center font-serif font-bold mb-1 shadow-sm">舍</div>

                        <span class="text-[10px] text-gray-500">舍得</span>

                    </div>

                    <div class="text-center">

                        <div class="w-10 h-10 mx-auto bg-red-50 text-vermilion rounded-full flex items-center justify-center font-serif font-bold mb-1 shadow-sm">真</div>

                        <span class="text-[10px] text-gray-500">归真</span>

                    </div>

                    <div class="text-center">

                        <div class="w-10 h-10 mx-auto bg-red-50 text-vermilion rounded-full flex items-center justify-center font-serif font-bold mb-1 shadow-sm">智</div>

                        <span class="text-[10px] text-gray-500">智慧</span>

                    </div>

                    <div class="text-center">

                        <div class="w-10 h-10 mx-auto bg-red-50 text-vermilion rounded-full flex items-center justify-center font-serif font-bold mb-1 shadow-sm">和</div>

                        <span class="text-[10px] text-gray-500">合作</span>

                    </div>

                </div>

  

                <!-- 序言摘要 (Vertical Text) -->

                <div class="flex justify-between items-start">

                    <div class="flex-1 pr-4">

                        <h3 class="text-vermilion font-serif font-bold mb-2 text-sm flex items-center gap-2">

                            <span class="w-1 h-4 bg-vermilion rounded-full"></span>

                            愿景与使命

                        </h3>

                        <p class="text-xs text-ink-light leading-relaxed text-justify">

                            让食材回归本真的味道，让生命绽放积极的价值。倡导勤奋的生活态度，创造温馨的交流平台。

                        </p>

                    </div>

                    <!-- 竖排文字装饰 -->

                    <div class="bg-rice-paper p-2 rounded-lg border border-gray-100 h-32 w-20 flex items-center justify-center cursor-pointer relative group" onclick="document.getElementById('cultureModal').classList.remove('hidden')">

                         <div class="writing-vertical font-calligraphy text-ink-dark text-xs leading-6 opacity-70 group-hover:opacity-100 transition-opacity">

                             太行奔腾而来<br>关山回转拔地

                         </div>

                         <div class="absolute bottom-1 right-1 text-[8px] text-vermilion">

                             <i class="fa-solid fa-book-open"></i> 全文

                         </div>

                    </div>

                </div>

            </div>

        </section>

  

        <!-- 4. Featured: 悬空民宿 -->

        <section class="px-4 mb-8">

            <div class="flex items-center justify-between mb-3">

                <h2 class="text-lg font-bold font-serif text-ink-dark flex items-center gap-2">

                    <i class="fa-solid fa-hotel text-vermilion text-sm"></i> 悬空民宿

                </h2>

                <span class="text-xs text-gray-400">太行绝壁 · 枕梦空间</span>

            </div>

            <div class="bg-white rounded-2xl overflow-hidden shadow-sm relative active:scale-[0.99] transition-transform group" onclick="showContactModal('悬空民宿')">

                <div class="h-44 overflow-hidden relative">

                    <img src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">

                    <div class="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-vermilion shadow-sm">

                        热门推荐

                    </div>

                </div>

                <div class="p-3 flex justify-between items-center">

                    <div>

                        <h3 class="font-bold text-ink-dark">云端·悬崖客栈</h3>

                        <div class="flex gap-1 mt-1">

                            <i class="fa-solid fa-star text-[10px] text-gold-accent"></i>

                            <i class="fa-solid fa-star text-[10px] text-gold-accent"></i>

                            <i class="fa-solid fa-star text-[10px] text-gold-accent"></i>

                            <i class="fa-solid fa-star text-[10px] text-gold-accent"></i>

                            <i class="fa-solid fa-star text-[10px] text-gold-accent"></i>

                        </div>

                    </div>

                    <button class="bg-vermilion text-white px-4 py-1.5 rounded-full text-xs shadow-md shadow-red-100">

                        预订

                    </button>

                </div>

            </div>

        </section>

  

        <!-- 5. Grid: 经典展示 -->

        <section class="px-4 pb-24">

            <div class="flex items-center justify-between mb-3">

                <h2 class="text-lg font-bold font-serif text-ink-dark flex items-center gap-2">

                    <i class="fa-solid fa-mountain-sun text-vermilion text-sm"></i> 经典展示

                </h2>

            </div>

            <div class="grid grid-cols-2 gap-3">

                <!-- Card -->

                <div class="relative h-32 rounded-xl overflow-hidden shadow-sm group">

                    <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=300&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">

                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    <span class="absolute bottom-3 left-3 text-white font-serif font-bold text-lg tracking-widest">百农篇</span>

                </div>

                <!-- Card -->

                <div class="relative h-32 rounded-xl overflow-hidden shadow-sm group">

                    <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=300&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">

                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    <span class="absolute bottom-3 left-3 text-white font-serif font-bold text-lg tracking-widest">关山篇</span>

                </div>

                <!-- Card -->

                <div class="relative h-32 rounded-xl overflow-hidden shadow-sm group">

                    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=300&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">

                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    <span class="absolute bottom-3 left-3 text-white font-serif font-bold text-lg tracking-widest">回龙篇</span>

                </div>

                <!-- Card -->

                <div class="relative h-32 rounded-xl overflow-hidden shadow-sm group">

                    <img src="https://images.unsplash.com/photo-1533227293521-8f69d351b897?q=80&w=300&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">

                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    <span class="absolute bottom-3 left-3 text-white font-serif font-bold text-lg tracking-widest">抗战篇</span>

                </div>

            </div>

        </section>

    </div>

  

    <!-- ================= VIEW 2: 讲谈 (DISCUSSION) ================= -->

    <div id="view-discussion" class="view-section flex-1 overflow-y-auto bg-white hidden">

        <div class="sticky top-0 z-40 bg-white/90 backdrop-blur-md px-4 py-4 shadow-sm border-b border-gray-100 flex items-center justify-center">

            <h2 class="font-serif text-xl font-bold text-ink-dark">半坡讲谈</h2>

        </div>

        <div class="p-4 space-y-4 pb-24">

             <!-- 餐饮 -->

             <div class="flex gap-4 p-4 rounded-xl bg-rice-paper border border-gray-100 shadow-sm active:scale-[0.99] transition-transform">

                <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=200&auto=format&fit=crop" class="w-24 h-24 rounded-lg object-cover">

                <div class="flex-1 flex flex-col justify-between">

                    <div>

                        <div class="flex justify-between">

                            <h3 class="font-bold text-lg text-ink-dark">半坡餐饮</h3>

                            <span class="text-[10px] text-vermilion border border-vermilion/30 px-1.5 py-0.5 rounded">养生</span>

                        </div>

                        <p class="text-xs text-gray-500 mt-2 line-clamp-2">食在半坡，寻古溯源。品尝黄帝内经中的养生智慧。</p>

                    </div>

                    <span class="text-xs text-vermilion font-bold mt-2">阅读详情 <i class="fa-solid fa-arrow-right ml-1"></i></span>

                </div>

            </div>

             <!-- 讲谈 -->

             <div class="flex gap-4 p-4 rounded-xl bg-rice-paper border border-gray-100 shadow-sm active:scale-[0.99] transition-transform">

                <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=200&auto=format&fit=crop" class="w-24 h-24 rounded-lg object-cover">

                <div class="flex-1 flex flex-col justify-between">

                    <div>

                        <div class="flex justify-between">

                            <h3 class="font-bold text-lg text-ink-dark">大家讲谈</h3>

                            <span class="text-[10px] text-vermilion border border-vermilion/30 px-1.5 py-0.5 rounded">文化</span>

                        </div>

                        <p class="text-xs text-gray-500 mt-2 line-clamp-2">医学讲座与书画课堂的思维碰撞，老友相聚的话题中心。</p>

                    </div>

                    <span class="text-xs text-vermilion font-bold mt-2">阅读详情 <i class="fa-solid fa-arrow-right ml-1"></i></span>

                </div>

            </div>

             <!-- 文艺 -->

             <div class="flex gap-4 p-4 rounded-xl bg-rice-paper border border-gray-100 shadow-sm active:scale-[0.99] transition-transform">

                <img src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=200&auto=format&fit=crop" class="w-24 h-24 rounded-lg object-cover">

                <div class="flex-1 flex flex-col justify-between">

                    <div>

                        <div class="flex justify-between">

                            <h3 class="font-bold text-lg text-ink-dark">文艺创作</h3>

                            <span class="text-[10px] text-vermilion border border-vermilion/30 px-1.5 py-0.5 rounded">艺术</span>

                        </div>

                        <p class="text-xs text-gray-500 mt-2 line-clamp-2">乐在半坡，歌咏畅欢。经典名篇与有声欣赏。</p>

                    </div>

                    <span class="text-xs text-vermilion font-bold mt-2">阅读详情 <i class="fa-solid fa-arrow-right ml-1"></i></span>

                </div>

            </div>

             <!-- 耕读 -->

             <div class="flex gap-4 p-4 rounded-xl bg-rice-paper border border-gray-100 shadow-sm active:scale-[0.99] transition-transform">

                <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=200&auto=format&fit=crop" class="w-24 h-24 rounded-lg object-cover">

                <div class="flex-1 flex flex-col justify-between">

                    <div>

                        <div class="flex justify-between">

                            <h3 class="font-bold text-lg text-ink-dark">耕读有伴</h3>

                            <span class="text-[10px] text-vermilion border border-vermilion/30 px-1.5 py-0.5 rounded">社群</span>

                        </div>

                        <p class="text-xs text-gray-500 mt-2 line-clamp-2">劳在半坡，晴耕雨读。加入我们的退休耕读社群。</p>

                    </div>

                    <span class="text-xs text-vermilion font-bold mt-2">阅读详情 <i class="fa-solid fa-arrow-right ml-1"></i></span>

                </div>

            </div>

        </div>

    </div>

  

    <!-- ================= VIEW 3: 定制 (CUSTOMIZATION) ================= -->

    <div id="view-customization" class="view-section flex-1 overflow-y-auto bg-rice-paper hidden">

        <div class="sticky top-0 z-40 bg-vermilion px-4 py-8 rounded-b-[2rem] shadow-soft mb-6">

            <h2 class="font-serif text-2xl font-bold text-white text-center mb-1">专属定制</h2>

            <p class="text-white/80 text-xs text-center">一站式服务 · 电话直连管家</p>

        </div>

        <div class="px-4 pb-24">

            <div class="grid grid-cols-2 gap-4">

                 <!-- Items similar to previous version -->

                <div class="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform" onclick="showContactModal('一桌餐')">

                    <div class="w-12 h-12 rounded-full bg-red-50 text-vermilion flex items-center justify-center text-xl"><i class="fa-solid fa-bowl-rice"></i></div>

                    <div>

                        <h4 class="font-bold text-ink-dark">一桌餐</h4>

                        <p class="text-[10px] text-gray-400">家庭聚会首选</p>

                    </div>

                </div>

                <!-- ... other items ... -->

                 <div class="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform" onclick="showContactModal('团队餐')">

                    <div class="w-12 h-12 rounded-full bg-red-50 text-vermilion flex items-center justify-center text-xl"><i class="fa-solid fa-users"></i></div>

                    <div>

                        <h4 class="font-bold text-ink-dark">团队餐</h4>

                        <p class="text-[10px] text-gray-400">团建会议</p>

                    </div>

                </div>

                 <div class="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform" onclick="showContactModal('休闲游览')">

                    <div class="w-12 h-12 rounded-full bg-red-50 text-vermilion flex items-center justify-center text-xl"><i class="fa-solid fa-mountain-sun"></i></div>

                    <div>

                        <h4 class="font-bold text-ink-dark">休闲游览</h4>

                        <p class="text-[10px] text-gray-400">慢节奏路线</p>

                    </div>

                </div>

                 <div class="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform" onclick="showContactModal('红色路线')">

                    <div class="w-12 h-12 rounded-full bg-red-50 text-vermilion flex items-center justify-center text-xl"><i class="fa-solid fa-flag"></i></div>

                    <div>

                        <h4 class="font-bold text-ink-dark">红色路线</h4>

                        <p class="text-[10px] text-gray-400">爱国主义教育</p>

                    </div>

                </div>

                 <div class="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform" onclick="showContactModal('半坡特产')">

                    <div class="w-12 h-12 rounded-full bg-red-50 text-vermilion flex items-center justify-center text-xl"><i class="fa-solid fa-gift"></i></div>

                    <div>

                        <h4 class="font-bold text-ink-dark">半坡特产</h4>

                        <p class="text-[10px] text-gray-400">带得走的美味</p>

                    </div>

                </div>

                 <div class="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform" onclick="showContactModal('亲情乐园')">

                    <div class="w-12 h-12 rounded-full bg-red-50 text-vermilion flex items-center justify-center text-xl"><i class="fa-regular fa-face-smile"></i></div>

                    <div>

                        <h4 class="font-bold text-ink-dark">亲情乐园</h4>

                        <p class="text-[10px] text-gray-400">祖孙同乐</p>

                    </div>

                </div>

                 <div class="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform" onclick="showContactModal('活动策划')">

                    <div class="w-12 h-12 rounded-full bg-red-50 text-vermilion flex items-center justify-center text-xl"><i class="fa-regular fa-calendar-check"></i></div>

                    <div>

                        <h4 class="font-bold text-ink-dark">活动策划</h4>

                        <p class="text-[10px] text-gray-400">金婚/寿宴</p>

                    </div>

                </div>

                 <div class="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 active:scale-[0.98] transition-transform" onclick="showContactModal('种养认领')">

                    <div class="w-12 h-12 rounded-full bg-red-50 text-vermilion flex items-center justify-center text-xl"><i class="fa-solid fa-seedling"></i></div>

                    <div>

                        <h4 class="font-bold text-ink-dark">种养认领</h4>

                        <p class="text-[10px] text-gray-400">云上农场</p>

                    </div>

                </div>

            </div>

        </div>

    </div>

  

    <!-- ================= BOTTOM TABBAR ================= -->

    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 h-20 flex items-center justify-around z-50 shadow-floating text-gray-400">

        <div class="nav-center-bg"></div>

        <div class="flex flex-col items-center gap-1 w-20 cursor-pointer nav-item group" onclick="switchTab('discussion', this)">

            <i class="fa-regular fa-comments text-2xl group-hover:text-vermilion transition-colors"></i>

            <span class="text-[10px]">讲谈</span>

        </div>

  

        <div class="relative -top-6 flex flex-col items-center gap-1 w-20 cursor-pointer nav-item active" onclick="switchTab('home', this)">

            <div class="w-16 h-16 bg-vermilion rounded-full flex items-center justify-center text-white shadow-lg shadow-red-200 border-[6px] border-[#F7F5F2] transform transition-transform group-hover:scale-105" id="home-icon-bg">

                <i class="fa-solid fa-house text-2xl"></i>

            </div>

            <span class="text-[10px] font-bold text-vermilion" id="home-text">首页</span>

        </div>

  

        <div class="flex flex-col items-center gap-1 w-20 cursor-pointer nav-item group" onclick="switchTab('customization', this)">

            <i class="fa-solid fa-pen-ruler text-2xl group-hover:text-vermilion transition-colors"></i>

            <span class="text-[10px]">定制</span>

        </div>

    </div>

  

    <!-- Culture Modal (Full Text) -->

    <div id="cultureModal" class="fixed inset-0 bg-black/60 z-[60] hidden flex items-center justify-center p-6 backdrop-blur-sm opacity-0 transition-opacity duration-300">

        <div class="bg-rice-paper w-full max-w-md h-[80vh] rounded-xl overflow-hidden shadow-2xl relative flex flex-col transform scale-95 transition-transform duration-300 modal-content-anim">

            <button class="absolute top-4 right-4 text-gray-400 hover:text-vermilion z-10" onclick="closeCultureModal()">

                <i class="fa-solid fa-xmark text-xl"></i>

            </button>

            <div class="p-6 border-b border-gray-200 bg-white">

                <h3 class="font-serif font-bold text-xl text-center text-vermilion">半坡等闲 · 序</h3>

            </div>

            <div class="flex-1 overflow-y-auto p-6 bg-ink-texture">

                <div class="writing-vertical font-calligraphy text-ink-dark text-sm leading-8 mx-auto h-full tracking-wider">

                    <p>太行奔腾而来 关山回转 拔地云端 向南滑塌成坡</p>

                    <p>东西夹流两河 崖高峰峻 丛林森森 先人依势而居</p>

                    <p>乱石薄土 生息 赓续先德有知 勿忘半坡桑梓</p>

                    <br>

                    <p>人生逆水行舟 半坡未就 不进则惆 少壮立志展翅</p>

                    <p>老来奋斗不迟 时不待人 运在勤奋 最数修身齐家</p>

                    <p>胸怀四海为大 如若骄心疲行 铭记半坡叩醒</p>

                    <br>

                    <p>闲居东坡躬耕不儡 流放僻远焚膏继晷 荣辱不惊</p>

                    <p>医民扶众 天下为托 其华灼灼 见贤思齐莫及</p>

                    <p>羞言半坡仰止 苍耳对酒 敬拜咨诹</p>

                    <br>

                    <p>金玉满堂莫之能守 安居乐俗舍得为缘 知足常乐</p>

                    <p>小满则安 花成花 树成树</p>

                </div>

            </div>

        </div>

    </div>

  

    <!-- Contact Modal -->

    <div id="contactModal" class="fixed inset-0 bg-black/50 z-[60] hidden flex items-center justify-center p-6 backdrop-blur-sm opacity-0 transition-opacity duration-300">

        <div class="bg-white w-full max-w-sm rounded-2xl p-6 text-center shadow-2xl transform scale-95 transition-transform duration-300" id="modalContent">

            <div class="w-16 h-16 bg-red-50 text-vermilion rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">

                <i class="fa-solid fa-phone-volume"></i>

            </div>

            <h3 class="text-xl font-bold text-ink-dark mb-2">联系半坡管家</h3>

            <p class="text-sm text-gray-500 mb-6">您正在咨询“<span id="modalTarget" class="text-vermilion font-bold"></span>”服务</p>

            <a href="tel:13800000000" class="block w-full bg-vermilion text-white py-3 rounded-full font-bold shadow-lg shadow-red-200 mb-3 active:scale-95 transition-transform">立即拨打</a>

            <button class="text-gray-400 text-sm" onclick="closeContactModal()">暂不联系</button>

        </div>

    </div>

  

    <script>

        // Tab Logic

        function switchTab(viewId, el) {

            document.querySelectorAll('.view-section').forEach(v => { v.classList.remove('active'); v.classList.add('hidden'); });

            const target = document.getElementById('view-' + viewId);

            target.classList.remove('hidden');

            target.classList.add('active');

  

            // Reset Icons

            document.querySelectorAll('.nav-item i').forEach(i => { if(!i.parentElement.id.includes('home-icon-bg')) i.classList.remove('text-vermilion'); });

            document.querySelectorAll('.nav-item span').forEach(s => { s.classList.remove('text-vermilion', 'font-bold'); });

  

            // Home Icon Logic

            const homeBg = document.getElementById('home-icon-bg');

            if(viewId === 'home') {

                homeBg.classList.replace('bg-gray-400', 'bg-vermilion');

                document.getElementById('home-text').classList.add('text-vermilion', 'font-bold');

            } else {

                homeBg.classList.replace('bg-vermilion', 'bg-gray-400');

                document.getElementById('home-text').classList.remove('text-vermilion', 'font-bold');

                if (el) {

                    el.querySelector('i').classList.add('text-vermilion');

                    el.querySelector('span').classList.add('text-vermilion', 'font-bold');

                }

            }

        }

  

        // Contact Modal Logic

        const modal = document.getElementById('contactModal');

        const modalContent = document.getElementById('modalContent');

        function showContactModal(targetName) {

            document.getElementById('modalTarget').innerText = targetName;

            modal.classList.remove('hidden');

            setTimeout(() => { modal.classList.remove('opacity-0'); modalContent.classList.remove('scale-95'); modalContent.classList.add('scale-100'); }, 10);

        }

        function closeContactModal() {

            modal.classList.add('opacity-0');

            modalContent.classList.remove('scale-100');

            modalContent.classList.add('scale-95');

            setTimeout(() => { modal.classList.add('hidden'); }, 300);

        }

  

        // Culture Modal Logic

        const cModal = document.getElementById('cultureModal');

        const cContent = cModal.querySelector('.modal-content-anim');

        function closeCultureModal() {

            cModal.classList.add('opacity-0');

            cContent.classList.remove('scale-100');

            cContent.classList.add('scale-95');

            setTimeout(() => { cModal.classList.add('hidden'); }, 300);

        }

        // Auto open culture modal on trigger click

        document.getElementById('cultureModal').addEventListener('click', (e) => {

            if(e.target === cModal) closeCultureModal();

        });

        // Override the onclick in HTML to add animation

        const trigger = document.querySelector('[onclick*="cultureModal"]');

        if(trigger) {

            trigger.onclick = () => {

                cModal.classList.remove('hidden');

                setTimeout(() => { cModal.classList.remove('opacity-0'); cContent.classList.remove('scale-95'); cContent.classList.add('scale-100'); }, 10);

            };

        }

    </script>

</body>

</html>
```