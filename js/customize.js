// js/customize.js
(function () {
  // ==========================================
  // 1. 服务卡片数据（新样式）
  // ==========================================
  const services = [
    {
      id: 'one-table',
      name: '一桌餐',
      desc: '林间野趣 · 顺时而食',
      image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=200&auto=format&fit=crop',
      badge: '热推',
      badgeType: 'hot'
    },
    {
      id: 'team-meal',
      name: '团队餐',
      desc: '高端定制 · 尊贵礼遇',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=200&auto=format&fit=crop',
      badge: null
    },
    {
      id: 'leisure-tour',
      name: '休闲游览',
      desc: '行到水穷 · 坐看云起',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=200&auto=format&fit=crop',
      badge: null
    },
    {
      id: 'red-route',
      name: '红色路线',
      desc: '追寻足迹 · 薪火相传',
      image: 'https://images.unsplash.com/photo-1542226601-38275531fa43?q=80&w=200&auto=format&fit=crop',
      badge: null
    },
    {
      id: 'specialty',
      name: '半坡特产',
      desc: '太行馈赠 · 地道风味',
      image: 'https://images.unsplash.com/photo-1596913755018-80df2651475c?q=80&w=200&auto=format&fit=crop',
      badge: null
    },
    {
      id: 'family-park',
      name: '亲情乐园',
      desc: '寓教于乐 · 亲子时光',
      image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=200&auto=format&fit=crop',
      badge: null
    },
    {
      id: 'event-planning',
      name: '活动策划',
      desc: '创意无限 · 精彩纷呈',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=200&auto=format&fit=crop',
      badge: null
    },
    {
      id: 'farming',
      name: '种养认领',
      desc: '归园田居 · 悠然自得',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=200&auto=format&fit=crop',
      badge: '上新',
      badgeType: 'new'
    }
  ];

  // 2. 渲染函数
  function renderServiceGrid() {
    console.log(' 渲染定制服务模块...');
    const gridContainer = document.getElementById('service-grid');

    if (!gridContainer) {
      console.warn(' 找不到 service-grid 容器');
      return;
    }

    gridContainer.innerHTML = services.map(service => `
        <div class="customize-card" onclick="handleServiceClick('${service.id}')">
            <div class="customize-card__image">
                <img src="${service.image}" alt="${service.name}" onerror="this.src='https://via.placeholder.com/100'">
                ${service.badge ? `<span class="customize-card__badge customize-card__badge--${service.badgeType}">${service.badge}</span>` : ''}
            </div>
            <div class="customize-card__content">
                <h3 class="customize-card__title">${service.name}</h3>
                <p class="customize-card__desc">${service.desc}</p>
            </div>
            <div class="customize-card__arrow">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    `).join('');

    console.log(' 服务卡片渲染完成，共', services.length, '个服务');
  }

  // ==========================================
  // 3. 服务点击处理
  // ==========================================
  window.handleServiceClick = function (serviceId) {
    console.log('点击服务:', serviceId);

    // 映射表：服务ID -> HTML/JS文件名
    const routeMap = {
      'one-table': 'one-table-meal',
      'team-meal': 'team-meal',
      'leisure-tour': 'leisure-tour',
      'red-route': 'red-route',
      'specialty': 'specialty',
      'family-park': 'family-park',
      'event-planning': 'event-planning',
      'farming': 'farming'
    };

    if (routeMap[serviceId]) {
      if (window.loadSubPage) {
        window.loadSubPage(routeMap[serviceId]);
      } else {
        console.error('loadSubPage 函数未找到');
      }
    } else {
      alert('该服务页面开发中: ' + serviceId);
    }
  };

  // ==========================================
  // 4. 初始化入口
  // ==========================================
  window.initCustomizePage = function () {
    console.log(' 定制服务页面初始化');
    renderServiceGrid();
  };

  // 自动检测并初始化
  setTimeout(() => {
    if (document.getElementById('customize')) {
      console.log('📄 检测到customize页面，开始初始化...');
      window.initCustomizePage();
    }
  }, 100);

})();