// 核桃园 - 应用初始化

// 应用初始化：在所有页面内容加载完成后，执行默认页面展示与基础状态更新
function initializeApp() {
    // 防重复初始化
    if (window.__appInitialized) return;

    let attempts = 0;
    const maxAttempts = 40;

    function tryInit() {
        const pagesContainer = document.getElementById("pages-container");
        const hasPages = pagesContainer && pagesContainer.querySelector(".page");
        const bottomNav = document.querySelector(".bottom-nav");

        if (hasPages) {
            const lastPage = localStorage.getItem("currentPage") || "home";

            try {
                showPage(lastPage);
            } catch (err) {
                console.error("初始化显示页面失败，回退到首页:", err);
                showPage("home");
            }

            if (typeof updateTime === "function") {
                updateTime();
            }

            window.__appInitialized = true;
            return;
        }

        if (attempts < maxAttempts) {
            attempts += 1;
            setTimeout(tryInit, 50);
            return;
        }

        console.warn("等待页面加载超时，执行兜底初始化");
        try {
            showPage(localStorage.getItem("currentPage") || "home");
        } catch (err) {
            console.error("兜底初始化失败:", err);
        }
        window.__appInitialized = true;
    }

    if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(tryInit);
    } else {
        setTimeout(tryInit, 0);
    }
}

// 更新状态栏时间
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeString = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;

    const timeElements = document.querySelectorAll(".status-bar span:first-child");
    timeElements.forEach((el) => {
        el.textContent = timeString;
    });
}

// 更新导航活跃状态
function updateNavActiveState(pageId) {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
        item.classList.remove("active");
        item.classList.add("text-gray-500");
        item.style.color = "";
    });

    let activeNavId = null;
    if (pageId === "home") {
        activeNavId = "b-nav-home";
    } else if (pageId === "classics") {
        activeNavId = "b-nav-classics";
    } else if (pageId === "discussion") {
        activeNavId = "b-nav-discussion";
    } else if (pageId === "customize") {
        activeNavId = "b-nav-customize";
    } else if (pageId === "profile") {
        activeNavId = "b-nav-profile";
    }

    if (activeNavId) {
        const activeNav = document.getElementById(activeNavId);
        if (activeNav) {
            activeNav.classList.add("active");
            activeNav.classList.remove("text-gray-500");
            activeNav.style.color = "#C04851";
        }
    }
}

// 显示页面
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add("active");
    }

    const navButtons = document.querySelectorAll(".prototype-btn");
    navButtons.forEach((btn) => {
        btn.classList.remove("active");
        if (btn.dataset.page === pageId) {
            btn.classList.add("active");
        }
    });

    // 控制底部导航显示
    setTimeout(() => {
        const bottomNav = document.querySelector(".bottom-nav");
        if (bottomNav) {
            if (pageId === "home" || pageId === "classics" || 
                pageId === "discussion" || pageId === "customize" || pageId === "profile") {
                bottomNav.style.display = "flex";
            } else {
                bottomNav.style.display = "none";
            }
        }
    }, 100);

    if (typeof updateNavActiveState === "function") {
        updateNavActiveState(pageId);
    }

    localStorage.setItem("currentPage", pageId);

    document.dispatchEvent(
        new CustomEvent("pageShown", {
            detail: { pageId: pageId },
        })
    );
}

// 当DOM加载完成后初始化应用
document.addEventListener("DOMContentLoaded", function () {
    initializeApp();
});

