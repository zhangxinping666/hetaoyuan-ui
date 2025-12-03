// js/bainong.js
(function() {
    // ==========================================
    // 1. 数据定义
    // ==========================================
    const alumniData = [
        { name: '李**' }, { name: '张**' }, { name: '王**' }, { name: '刘**' },
        { name: '陈**' }, { name: '杨**' }, { name: '赵**' }, { name: '黄**' },
        { name: '周**' }, { name: '吴**' }
    ];

    const departments = [
        { id: 'agriculture', name: '农学系', subtitle: '麦穗飘香', icon: 'seedling' },
        { id: 'mechanical', name: '机械系', subtitle: '齿轮转动', icon: 'cog' },
        { id: 'economics', name: '经济系', subtitle: '商道智慧', icon: 'chart-line' },
        { id: 'literature', name: '文学系', subtitle: '诗书传承', icon: 'book' },
        { id: 'biology', name: '生物系', subtitle: '生命探索', icon: 'dna' },
        { id: 'computer', name: '计算机系', subtitle: '科技创新', icon: 'laptop-code' }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================
    function renderAlumniWall() {
        const container = document.getElementById('alumni-scroll');
        if (!container) return;

        let html = alumniData.map(alumni => `
            <div class="alumni-item">
                <div class="alumni-item__avatar"><i class="fas fa-user"></i></div>
                <span class="alumni-item__name">${alumni.name}</span>
            </div>
        `).join('');

        html += `
            <div class="alumni-item alumni-item--more" onclick="showAllAlumni()">
                <div class="alumni-item__avatar"><i class="fas fa-ellipsis-h"></i></div>
                <span class="alumni-item__name">查看全部</span>
            </div>
        `;
        container.innerHTML = html;
    }

    function renderBambooList() {
        const container = document.getElementById('bamboo-list');
        if (!container) return;

        container.innerHTML = departments.map(dept => `
            <div class="bamboo-item" onclick="showDepartmentDetail('${dept.id}')">
                <div class="bamboo-item__icon"><i class="fas fa-${dept.icon}"></i></div>
                <div class="bamboo-item__content">
                    <div class="bamboo-item__title">${dept.name}</div>
                    <div class="bamboo-item__subtitle">${dept.subtitle}</div>
                </div>
                <div class="bamboo-item__arrow"><i class="fas fa-chevron-right"></i></div>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数 (挂载到 window)
    // ==========================================
    window.showLandmarkDetail = function(id) { alert(`查看地标详情: ${id} (功能开发中)`); };
    window.showAllAlumni = function() { alert('查看所有校友名单 (功能开发中)'); };
    window.showDepartmentDetail = function(id) { alert(`查看院系介绍: ${id} (功能开发中)`); };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initBainongPage = function() {
        console.log('🌾 百农篇页面初始化');
        renderAlumniWall();
        renderBambooList();
    };
})();