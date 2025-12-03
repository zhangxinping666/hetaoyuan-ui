// js/bainong.js
(function () {
    // ==========================================
    // 1. 数据定义 (您可以随时修改这里的数据)
    // ==========================================

    // 校友数据：混合了有头像和没头像的情况，用于测试
    const alumniData = [
        { name: '李教授', img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' },
        { name: '张院士', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100' },
        { name: '王所长', img: '' }, // 测试没有图片的情况
        { name: '刘博士', img: 'bad_link.jpg' }, // 测试图片坏了的情况
        { name: '陈先生' }, { name: '杨女士' }, { name: '赵**' }, { name: '黄**' },
        { name: '周**' }, { name: '吴**' }
    ];

    const departments = [
        { id: 'agriculture', name: '农学系', subtitle: '麦穗飘香', icon: 'seedling', content: '农学系专注于作物遗传育种与栽培生理研究...' },
        { id: 'mechanical', name: '机械系', subtitle: '齿轮转动', icon: 'cog', content: '机械系致力于农业机械化与智能化装备研发...' },
        { id: 'economics', name: '经济系', subtitle: '商道智慧', icon: 'chart-line', content: '经济系培养具备现代经济管理理论的高级人才...' },
        { id: 'literature', name: '文学系', subtitle: '诗书传承', icon: 'book', content: '传承国学经典，弘扬人文精神...' },
        { id: 'biology', name: '生物系', subtitle: '生命探索', icon: 'dna', content: '探索生命奥秘，推动生物技术创新...' },
        { id: 'computer', name: '计算机系', subtitle: '科技创新', icon: 'laptop-code', content: '聚焦大数据、人工智能与智慧农业...' }
    ];

    // ==========================================
    // 2. 渲染逻辑
    // ==========================================
    function renderAlumniWall() {
        const container = document.getElementById('alumni-scroll');
        if (!container) return;

        let html = alumniData.map(alumni => {
            // 智能判断：如果有图且链接不为空，显示图片；否则显示图标
            // 关键：onerror 处理，如果图片挂了，自动回退到图标
            const hasImg = alumni.img && alumni.img.length > 0;

            return `
            <div class="alumni-card">
                <div class="alumni-avatar">
                    ${hasImg
                    ? `<img src="${alumni.img}" alt="${alumni.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                           <i class="fas fa-user" style="display:none; line-height:56px; color:#ccc;"></i>`
                    : `<i class="fas fa-user" style="line-height:56px; color:#ccc;"></i>`
                }
                </div>
                <span class="alumni-name">${alumni.name}</span>
            </div>
            `;
        }).join('');

        // 添加"查看全部"按钮
        html += `
            <div class="alumni-card" onclick="window.showAllAlumni()">
                <div class="alumni-avatar" style="background:#f0f0f0;">
                    <i class="fas fa-ellipsis-h" style="line-height:56px; color:#666;"></i>
                </div>
                <span class="alumni-name">查看全部</span>
            </div>
        `;
        container.innerHTML = html;
    }

    function renderBambooList() {
        const container = document.getElementById('bamboo-list');
        if (!container) return;

        // 注意：这里更新了 HTML 结构，使用了 bamboo-header-left 容器
        container.innerHTML = departments.map((dept, index) => `
            <div class="bamboo-item" id="bamboo-item-${index}">
                <div class="bamboo-header" onclick="window.toggleBamboo(${index}, this)">
                    
                    <div class="bamboo-header-left">
                        <i class="fas fa-${dept.icon} bamboo-icon"></i>
                        <div class="bamboo-text-group">
                            <div class="bamboo-title">${dept.name}</div>
                            <div class="bamboo-subtitle">${dept.subtitle}</div>
                        </div>
                    </div>

                    <i class="fas fa-chevron-down bamboo-arrow"></i>
                </div>
                
                <div class="bamboo-content" id="dept-content-${index}" style="display:none;">
                    ${dept.content}
                </div>
            </div>
        `).join('');
    }

    // ==========================================
    // 3. 交互函数 (必须挂载到 window 供 HTML 调用)
    // ==========================================

    // 打开详情弹窗 (配合 HTML 中的 #landmark-modal)
    window.showLandmarkDetail = function (id, title, desc) {
        const modal = document.getElementById('landmark-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const modalImg = document.getElementById('modal-img');

        if (!modal) {
            alert('详情: ' + (title || id)); // 降级处理
            return;
        }

        // 设置内容
        if (modalTitle) modalTitle.innerText = title || '景点详情';
        if (modalDesc) modalDesc.innerText = desc || '暂无详细描述...';

        // 模拟不同景点的图片 (实际项目中可以用 id 去查数据库或对象)
        const imgMap = {
            'zhiqilin': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
            'zhiqilou': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600',
            'zhanlanguan': 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=600'
        };

        if (modalImg) {
            modalImg.src = imgMap[id] || 'https://placehold.co/600x400/eee/999?text=暂无图片';
        }

        // 显示弹窗
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    };

    // 关闭详情弹窗
    window.closeLandmarkDetail = function () {
        const modal = document.getElementById('landmark-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // 展开/收起竹简列表
    window.toggleBamboo = function (index, headerDom) {
        const content = document.getElementById(`dept-content-${index}`);
        const parentItem = document.getElementById(`bamboo-item-${index}`); // 获取父容器
        const arrow = headerDom.querySelector('.bamboo-arrow');

        // 简单的排他逻辑：如果你希望一次只展开一个，可以取消注释下面这段
        /*
        document.querySelectorAll('.bamboo-content').forEach(el => {
            if(el.id !== `dept-content-${index}`) el.style.display = 'none';
        });
        document.querySelectorAll('.bamboo-arrow').forEach(el => {
             // 重置其他箭头...
        });
        */

        if (content.style.display === 'none' || content.style.display === '') {
            // 展开
            content.style.display = 'block';
            if (parentItem) parentItem.classList.add('active'); // 激活样式

            // 箭头处理：旋转180度
            if (arrow) {
                arrow.style.transform = 'rotate(180deg)';
                arrow.style.color = '#8b1e1e'; // 箭头变红
            }
        } else {
            // 收起
            content.style.display = 'none';
            if (parentItem) parentItem.classList.remove('active'); // 移除样式

            // 箭头处理：恢复原状
            if (arrow) {
                arrow.style.transform = 'rotate(0deg)';
                arrow.style.color = '#ccc'; // 箭头变灰
            }
        }
    };

    window.showAllAlumni = function () {
        alert('正在加载完整校友名录...');
    };

    // ==========================================
    // 4. 初始化入口
    // ==========================================
    window.initBainongPage = function () {
        console.log('🌾 百农篇页面初始化...');
        renderAlumniWall();
        renderBambooList();
    };

    // 自动尝试初始化（为了防止 main.js 没调用的情况）
    // 使用 setTimeout 确保 DOM 已经插入页面
    setTimeout(() => {
        if (document.getElementById('bainong')) {
            window.initBainongPage();
        }
    }, 100);

})();