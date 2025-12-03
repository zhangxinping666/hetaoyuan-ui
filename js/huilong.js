// js/huilong.js
(function() {
    // ==========================================
    // 交互函数
    // ==========================================
    
    // 为了防止和视频模块冲突，可以起个特有的名字，或者保持原样
    window.playHuilongVideo = function() {
        console.log('播放回龙天路视频');
        alert('正在加载回龙天路纪录片...');
    };

    window.showHuilongDetail = function(id) {
        console.log('显示回龙详情:', id);
        alert(`查看详情: ${id} (功能开发中)`);
    };

    // 如果 HTML 里写的是 playVideo 和 showDetail，这里也做个兼容映射
    // 但建议在 HTML 里改成 onclick="playHuilongVideo()"
    window.playVideo = window.playVideo || window.playHuilongVideo;
    window.showDetail = window.showDetail || window.showHuilongDetail;

    // ==========================================
    // 初始化入口
    // ==========================================
    window.initHuilongPage = function() {
        console.log('🐉 回龙篇页面初始化');
        // 这里可以添加后续的渲染逻辑，例如回龙精神的时间轴渲染等
    };
})();