// js/specialty.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    
    // 分类数据
    const categories = [
        { name: '干果', image: 'https://images.unsplash.com/photo-1596627707323-c9710777db93?w=200', active: true },
        { name: '杂粮', image: 'https://images.unsplash.com/photo-1615485925763-867862f80286?w=200' },
        { name: '山珍', image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=200' },
        { name: '手工', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=200' }
    ];

    // 商品列表数据
    const products = [
        {
            id: 1,
            name: '半坡·薄皮核桃',
            tag: '今年新果',
            tagColor: 'bg-[#558B2F]', // 鲜绿
            image: 'https://images.unsplash.com/photo-1596627707323-c9710777db93?w=400',
            farmer: '老张自家种',
            avatar: 'https://i.pravatar.cc/100?img=33',
            price: '35',
            unit: '/斤'
        },
        {
            id: 2,
            name: '太行·黄金小米',
            tag: '有机',
            tagColor: 'bg-amber-400',
            image: 'https://images.unsplash.com/photo-1615485925763-867862f80286?w=400',
            farmer: '农社直供',
            avatar: 'https://i.pravatar.cc/100?img=12',
            price: '12',
            unit: '/斤'
        },
        {
            id: 3,
            name: '手工切片山楂干',
            tag: '无添加',
            tagColor: 'bg-[#795548]', // 栗壳色
            image: 'https://images.unsplash.com/photo-1632977346124-7729b71900a3?w=400',
            farmer: '山里红',
            avatar: null, // 无头像
            price: '25',
            unit: '/袋'
        },
        {
            id: 4,
            name: '流心吊柿饼',
            tag: '抢手',
            tagColor: 'bg-red-500',
            image: 'https://images.unsplash.com/photo-1636209865188-757041539250?w=400',
            farmer: '李奶奶手作',
            avatar: 'https://i.pravatar.cc/100?img=59',
            price: '38',
            unit: '/盒'
        }
    ];

    let cartCount = 2;
    let cartTotal = 47.00;

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderCategories() {
        const container = document.getElementById('sp-categories-list');
        if (!container) return;

        container.innerHTML = categories.map(cat => `
            <div class="flex flex-col items-center gap-2 min-w-[70px] cursor-pointer group" onclick="filterCategory('${cat.name}')">
                <div class="w-14 h-14 rounded-full border-2 border-dashed ${cat.active ? 'border-[#795548]' : 'border-[#795548]/30'} p-1 bg-white group-hover:border-[#795548] transition-colors">
                    <img src="${cat.image}" class="w-full h-full rounded-full object-cover">
                </div>
                <span class="text-xs font-bold ${cat.active ? 'text-[#795548]' : 'text-gray-500 group-hover:text-[#795548]'}">${cat.name}</span>
            </div>
        `).join('');
    }

    function renderProducts() {
        const container = document.getElementById('sp-products-grid');
        if (!container) return;

        container.innerHTML = products.map(prod => `
            <div class="bg-white rounded-xl overflow-hidden shadow-md border border-stone-100 group cursor-pointer" onclick="viewProductDetail(${prod.id})">
                <div class="h-36 relative overflow-hidden">
                    <img src="${prod.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://via.placeholder.com/400'">
                    ${prod.tag ? `<div class="absolute top-2 left-2 ${prod.tagColor} text-white text-[10px] px-2 py-1 rounded shadow-sm">${prod.tag}</div>` : ''}
                </div>
                <div class="p-3">
                    <h3 class="font-bold text-[#3E2723] text-sm line-clamp-1">${prod.name}</h3>
                    
                    <div class="flex items-center gap-1 mt-1">
                        ${prod.avatar ? `<img src="${prod.avatar}" class="w-4 h-4 rounded-full border border-gray-100">` : ''}
                        <span class="text-[10px] text-gray-500">${prod.farmer}</span>
                    </div>
                    
                    <div class="flex items-end justify-between mt-3">
                        <span class="text-[#795548] font-bold">¥${prod.price}<span class="text-xs text-gray-400 font-normal">${prod.unit}</span></span>
                        <button class="w-6 h-6 rounded-full bg-[#795548] text-white flex items-center justify-center text-xs active:scale-90 transition-transform shadow-sm" 
                                onclick="event.stopPropagation(); addToCart(${prod.id}, ${prod.price})">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function updateCartUI() {
        const countEl = document.getElementById('sp-cart-count');
        const totalEl = document.getElementById('sp-cart-total');
        
        if (countEl) {
            countEl.innerText = cartCount;
            // 简单的动画效果
            countEl.classList.remove('animate-bounce');
            void countEl.offsetWidth; // 触发重绘
            countEl.classList.add('animate-bounce');
        }
        if (totalEl) totalEl.innerText = `¥${cartTotal.toFixed(2)}`;
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    window.filterCategory = function(name) {
        // 这里仅做演示，实际应更新 categories 状态并重新渲染
        alert(`切换分类: ${name}`);
    };

    window.viewProductDetail = function(id) {
        alert(`查看商品详情: ${id} (功能开发中)`);
    };

    window.addToCart = function(id, price) {
        cartCount++;
        cartTotal += parseFloat(price);
        updateCartUI();
        // 可以添加一个飞入购物车的动画
    };

    window.checkout = function() {
        alert(`去结算，共 ${cartCount} 件商品，总计 ¥${cartTotal.toFixed(2)}`);
    };

    window.readStory = function() {
        alert('阅读农人故事：守山人的承诺...');
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initSpecialtyPage = function() {
        console.log('🥜 半坡特产页面初始化');
        renderCategories();
        renderProducts();
        updateCartUI();
    };

})();