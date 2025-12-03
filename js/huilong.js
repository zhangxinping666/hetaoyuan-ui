// js/huilong.js
(function() {
    // ==========================================
    // 1. 定义详情数据
    // ==========================================
    const detailsData = {
        'old-village': {
            title: '昔日回龙',
            desc: '上世纪90年代以前，回龙村被悬崖峭壁包围，村民进出山只能攀爬绝壁上的“老爷梯”。贫困与闭塞曾是这里的代名词，但并未困住回龙人向往美好生活的决心。',
            img: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=600'
        },
        'road-building': {
            title: 'S型挂壁公路',
            desc: '1997年至2000年，回龙村党支部书记张荣锁带领党员群众，在无电力、无机械的情况下，腰系麻绳下到悬崖峭壁，用钢钎铁锤凿出了一条长1000多米的S型隧道，创造了筑路史上的奇迹。',
            img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600'
        },
        'new-village': {
            title: '生态新村',
            desc: '路通了，回龙村依托得天独厚的自然资源，大力发展红色旅游和生态旅游。如今的回龙村，别墅林立，游客如织，绿水青山真正变成了金山银山。',
            img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600'
        }
    };

    // ==========================================
    // 2. 交互函数 (挂载到 window)
    // ==========================================
    
    // 打开详情弹窗
    window.showHuilongDetail = function(id) {
        const modal = document.getElementById('huilong-modal');
        const data = detailsData[id];

        if (!modal || !data) {
            console.warn('未找到弹窗或数据:', id);
            return;
        }

        // 填充数据
        document.getElementById('hl-modal-title').innerText = data.title;
        document.getElementById('hl-modal-desc').innerText = data.desc;
        document.getElementById('hl-modal-img').src = data.img;

        // 显示弹窗
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    };

    // 关闭详情弹窗
    window.closeHuilongDetail = function() {
        const modal = document.getElementById('huilong-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // 播放视频逻辑 (模拟)
    window.playHuilongVideo = function() {
        // 这里可以换成打开视频弹窗的逻辑
        // 简单演示：
        window.showHuilongDetail('road-building'); 
        document.getElementById('hl-modal-title').innerText = "回龙精神纪录片";
        document.getElementById('hl-modal-desc').innerText = "（此处应播放视频）张荣锁书记带领村民感天动地的筑路历程...";
        // 实际开发中，可以将 img 替换为 video 标签
    };

    // ==========================================
    // 3. 初始化入口
    // ==========================================
    window.initHuilongPage = function() {
        console.log('🐉 回龙篇页面初始化完成');
        // 如果有动态加载的内容写在这里
    };
    
    // 自动尝试初始化
    setTimeout(() => {
        if(document.getElementById('huilong')) {
            window.initHuilongPage();
        }
    }, 100);

})();