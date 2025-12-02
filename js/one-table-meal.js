// 一桌餐 - One Table Meal

// 菜品数据
const dishes = [
    {
        id: 1,
        name: '太行炖土鸡',
        image: 'https://images.unsplash.com/photo-1625938145744-e38051524294?q=80&w=400&auto=format&fit=crop',
        description: '选用半坡散养走地鸡，慢火煨制4小时，汤色金黄，肉质鲜嫩。',
        tags: ['招牌', '滋补']
    },
    {
        id: 2,
        name: '核桃仁拌野菜',
        image: 'https://images.unsplash.com/photo-1560155016-bd4879ae8f21?q=80&w=400&auto=format&fit=crop',
        description: '当季新鲜野菜搭配核桃苑自产鲜核桃，清爽解腻，营养丰富。',
        tags: ['素食', '时令']
    },
    {
        id: 3,
        name: '手工杂粮面',
        image: 'https://images.unsplash.com/photo-1606214300755-a50d28731b6e?q=80&w=400&auto=format&fit=crop',
        description: '石磨面粉手工擀制，配以特制肉臊，一口回到小时候的味道。',
        tags: ['主食']
    },
    {
        id: 4,
        name: '红烧半坡鱼',
        image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=400&auto=format&fit=crop',
        description: '水库活鱼现杀现做，肉质细嫩，酱香浓郁。',
        tags: ['招牌', '鲜活']
    },
    {
        id: 5,
        name: '农家小炒肉',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=400&auto=format&fit=crop',
        description: '土猪五花肉配青椒，火候恰到好处，下饭神器。',
        tags: ['家常']
    }
];

// 服务清单数据
const services = [
    { icon: 'fa-door-open', title: '专属雅间', description: '私密空间，山景视窗' },
    { icon: 'fa-mug-hot', title: '茶艺服务', description: '太行毛尖，专人冲泡' },
    { icon: 'fa-music', title: '背景雅乐', description: '古琴/轻音乐伴餐' },
    { icon: 'fa-gift', title: '伴手礼', description: '每桌赠送时令特产' }
];

// 渲染菜品
function renderDishes() {
    const container = document.getElementById('dishes-container');
    if (!container) return;

    container.innerHTML = dishes.map(dish => `
        <div class="snap-center shrink-0 w-[260px] bg-white rounded-xl overflow-hidden shadow-card group">
            <div class="h-40 overflow-hidden relative">
                <img src="${dish.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                     onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'">
                <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span class="absolute bottom-2 left-3 text-white font-serif text-lg font-bold">${dish.name}</span>
            </div>
            <div class="p-3">
                <p class="text-xs text-gray-500 line-clamp-2">${dish.description}</p>
                <div class="mt-2 flex gap-1">
                    ${dish.tags.map(tag => {
                        const isSignature = tag === '招牌';
                        return `<span class="text-[10px] ${isSignature ? 'border border-amber-gold text-amber-gold' : 'bg-gray-100 text-gray-500'} px-1 rounded">${tag}</span>`;
                    }).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// 渲染服务清单
function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;

    container.innerHTML = services.map(service => `
        <div class="flex gap-3 items-start">
            <div class="w-8 h-8 rounded-full bg-soup flex items-center justify-center text-amber-600 shrink-0">
                <i class="fa-solid ${service.icon} text-xs"></i>
            </div>
            <div>
                <h4 class="font-bold text-sm">${service.title}</h4>
                <p class="text-[10px] text-gray-400 mt-0.5">${service.description}</p>
            </div>
        </div>
    `).join('');
}

// 立即预订
function bookNow() {
    alert('预订功能开发中\n\n请拨打电话：0351-1234567\n或添加微信：banpo-dining');
}

// 返回
function goBack() {
    window.history.back();
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('🥢 一桌餐初始化');
    renderDishes();
    renderServices();
    console.log('✅ 加载完成');
});

