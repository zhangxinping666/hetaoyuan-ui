(function() {
    // ==========================================
    // 1. 数据定义 (内容增强版)
    // ==========================================
    
    // 分类数据
    const categories = [
        { id: 'nut', name: '干果', image: 'https://images.unsplash.com/photo-1596627707323-c9710777db93?w=200', active: true },
        { id: 'grain', name: '杂粮', image: 'https://images.unsplash.com/photo-1615485925763-867862f80286?w=200', active: false },
        { id: 'delicacy', name: '山珍', image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=200', active: false },
        { id: 'handmade', name: '手工', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=200', active: false }
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
            unit: '/斤',
            desc: '产自半坡向阳坡地，日照充足。皮薄如纸，手捏即开。果仁饱满，口感香脆，不苦不涩，富含不饱和脂肪酸，是老少皆宜的健康零食。'
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
            unit: '/斤',
            desc: '传统的"老金谷"品种，生长周期长，米油丰富。熬出的粥色泽金黄，粘稠度高，带有浓郁的米香，养胃首选。'
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
            unit: '/袋',
            desc: '精选深山野山楂，人工去核切片，自然晾晒而成。保留了山楂原本的酸甜风味，泡水喝色泽红亮，消食健胃。'
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
            unit: '/盒',
            desc: '传统吊晒工艺，历经霜降洗礼。外层挂满白霜，内里如蜜般流心。口感软糯Q弹，甜而不腻，每一口都是时光的味道。'
        }
    ];

    let cartCount = 0;
    let cartTotal = 0.00;

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================

    function renderCategories() {
        const container = document.getElementById('sp-categories-list');
        if (!container) return;

        container.innerHTML = categories.map(cat => `
            <div class="flex flex-col items-center gap-2 min-w-[70px] cursor-pointer group" onclick="window.filterCategory('${cat.name}', this)">
                <div class="w-14 h-14 rounded-full border-2 border-dashed ${cat.active ? 'border-[#795548] bg-[#EFEBE9]' : 'border-[#795548]/30 bg-white'} p-1 group-hover:border-[#795548] transition-colors">
                    <img src="${cat.image}" class="w-full h-full rounded-full object-cover" onerror="this.src='https://via.placeholder.com/100'">
                </div>
                <span class="text-xs font-bold ${cat.active ? 'text-[#795548]' : 'text-gray-500 group-hover:text-[#795548]'}">${cat.name}</span>
            </div>
        `).join('');
    }

    function renderProducts() {
        const container = document.getElementById('sp-products-grid');
        if (!container) return;

        container.innerHTML = products.map(prod => `
            <div class="bg-white rounded-xl overflow-hidden shadow-md border border-stone-100 group cursor-pointer hover:shadow-lg transition-shadow" onclick="window.viewProductDetail(${prod.id})">
                <div class="h-36 relative overflow-hidden">
                    <img src="${prod.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://via.placeholder.com/400'">
                    ${prod.tag ? `<div class="absolute top-2 left-2 ${prod.tagColor} text-white text-[10px] px-2 py-1 rounded shadow-sm">${prod.tag}</div>` : ''}
                </div>
                <div class="p-3">
                    <h3 class="font-bold text-[#3E2723] text-sm line-clamp-1">${prod.name}</h3>
                    
                    <div class="flex items-center gap-1 mt-1">
                        ${prod.avatar ? `<img src="${prod.avatar}" class="w-4 h-4 rounded-full border border-gray-100" onerror="this.style.display='none'">` : '<i class="fas fa-store text-gray-400 text-xs"></i>'}
                        <span class="text-[10px] text-gray-500">${prod.farmer}</span>
                    </div>
                    
                    <div class="flex items-end justify-between mt-3">
                        <span class="text-[#795548] font-bold">¥${prod.price}<span class="text-xs text-gray-400 font-normal">${prod.unit}</span></span>
                        <button class="w-7 h-7 rounded-full bg-[#795548] text-white flex items-center justify-center text-xs active:scale-75 transition-transform shadow-sm" 
                                onclick="event.stopPropagation(); window.addToCart(${prod.id}, ${prod.price}, this)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function updateCartUI() {
        const countEl = document.getElementById('sp-cart-count');
        const totalEl = document.getElementById('sp-cart-total');
        const cartIcon = document.querySelector('.sp-cart-icon'); // 假设购物车图标有这个类
        
        if (countEl) {
            countEl.innerText = cartCount;
            // 数量变化时的抖动动画
            if (cartCount > 0) {
                countEl.classList.remove('hidden');
                countEl.classList.add('animate-bounce');
                setTimeout(() => countEl.classList.remove('animate-bounce'), 1000);
            } else {
                countEl.classList.add('hidden');
            }
        }
        if (totalEl) totalEl.innerText = `¥${cartTotal.toFixed(2)}`;
        
        // 购物车图标动画
        if(cartIcon) {
            cartIcon.classList.add('scale-110');
            setTimeout(() => cartIcon.classList.remove('scale-110'), 200);
        }
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================

    // 打开通用弹窗
    function openSpecialtyModal(title, desc, imgUrl, btnText = '关闭', onBtnClick = null) {
        const modal = document.getElementById('specialty-modal');
        if (!modal) {
            alert(`${title}\n\n${desc}`); 
            return;
        }

        const titleEl = document.getElementById('sp-modal-title');
        const descEl = document.getElementById('sp-modal-desc');
        const imgEl = document.getElementById('sp-modal-img');
        const imgContainer = imgEl ? imgEl.parentElement : null;
        const btnEl = document.getElementById('sp-modal-btn');

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
            // 移除旧的事件监听 (简单处理：克隆节点)
            const newBtn = btnEl.cloneNode(true);
            btnEl.parentNode.replaceChild(newBtn, btnEl);
            
            newBtn.onclick = function() {
                if(onBtnClick) onBtnClick();
                window.closeSpecialtyModal();
            };
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    window.closeSpecialtyModal = function() {
        const modal = document.getElementById('specialty-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    window.filterCategory = function(name, el) {
        // 视觉切换
        const allCats = el.parentElement.children;
        Array.from(allCats).forEach(child => {
            const circle = child.querySelector('div');
            const text = child.querySelector('span');
            circle.className = `w-14 h-14 rounded-full border-2 border-dashed border-[#795548]/30 bg-white p-1 group-hover:border-[#795548] transition-colors`;
            text.className = `text-xs font-bold text-gray-500 group-hover:text-[#795548]`;
        });

        const circle = el.querySelector('div');
        const text = el.querySelector('span');
        circle.className = `w-14 h-14 rounded-full border-2 border-dashed border-[#795548] bg-[#EFEBE9] p-1 transition-colors`;
        text.className = `text-xs font-bold text-[#795548]`;

        // 实际筛选逻辑待开发，这里仅提示
        // alert(`已切换到：${name} 分类`);
    };

    window.viewProductDetail = function(id) {
        const prod = products.find(p => p.id === id);
        if(prod) {
            openSpecialtyModal(
                prod.name, 
                `产地：${prod.farmer}\n价格：¥${prod.price}${prod.unit}\n\n${prod.desc}`, 
                prod.image,
                '加入购物车',
                () => window.addToCart(id, prod.price)
            );
        }
    };

    window.addToCart = function(id, price, btnElement) {
        cartCount++;
        cartTotal += parseFloat(price);
        updateCartUI();
        
        // 按钮动效
        if(btnElement) {
            btnElement.classList.add('bg-green-600');
            setTimeout(() => btnElement.classList.remove('bg-green-600'), 200);
        }
    };

    window.checkout = function() {
        if (cartCount === 0) {
            openSpecialtyModal('购物车是空的', '请先挑选一些喜欢的特产吧！', null);
        } else {
            openSpecialtyModal(
                '确认订单', 
                `共 ${cartCount} 件商品\n总计：¥${cartTotal.toFixed(2)}\n\n是否前往支付？`, 
                null, 
                '去支付', 
                () => alert('正在跳转支付页面...')
            );
        }
    };

    window.readStory = function() {
        openSpecialtyModal(
            '守山人的承诺', 
            '老张在半坡种了三十年核桃。他说："树是不会骗人的，你对它好，它就结好果子。"\n\n为了保证核桃的品质，他坚持不打除草剂，全靠人工除草。每年秋天，他都会精挑细选最好的核桃留给游客...', 
            'https://images.unsplash.com/photo-1596627707323-c9710777db93?w=600',
            '为匠心点赞',
            () => alert('感谢您的支持！')
        );
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

    // 自动检测并初始化
    setTimeout(() => {
        if(document.getElementById('specialty')) {
            window.initSpecialtyPage();
        }
    }, 100);

})();