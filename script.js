const roleConfig = {
    employee: {
        name: "Alex Carter",
        avatar: "AC",
        badgeText: "Internal",
        badgeClass: "badge-internal",
        nav: ["Home", "News & Announcements", "Documents", "Knowledge / Wiki", "Calendar", "Projects", "Reports & Dashboards"]
    },
    dealteam: {
        name: "Jamie Lee",
        avatar: "JL",
        badgeText: "Deal Team",
        badgeClass: "badge-dealteam",
        nav: ["Home", "News & Announcements", "Documents", "Knowledge / Wiki", "Calendar", "Projects", "Reports & Dashboards", "Data Room", "Control Centre"]
    },
    partya: {
        name: "Taylor Morgan",
        avatar: "TM",
        badgeText: "Guest",
        badgeClass: "badge-guest",
        nav: ["Home"]
    },
    admin: {
        name: "Morgan Davis",
        avatar: "MD",
        badgeText: "Administrator",
        badgeClass: "badge-admin",
        nav: ["Home", "Administration", "Audit"]
    }
};

function switchRole(roleKey) {
    const config = roleConfig[roleKey];
    if (!config) return;

    // 1. Update Suite Bar Info
    document.getElementById('user-name').innerText = config.name;
    document.getElementById('user-avatar').innerText = config.avatar;
    const badge = document.getElementById('user-badge');
    badge.innerText = config.badgeText;
    badge.className = 'user-role-badge ' + config.badgeClass;

    // 2. Trim Navigation Items
    const navContainer = document.getElementById('mainNav');
    navContainer.innerHTML = '';
    config.nav.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'nav-item' + (index === 0 ? ' active' : '');
        li.innerHTML = `<a href="#">${item}</a>`;
        navContainer.appendChild(li);
    });

    // 3. Switch Visible View
    document.querySelectorAll('.role-view').forEach(view => view.classList.remove('active'));
    const targetView = document.getElementById('view-' + roleKey);
    if (targetView) targetView.classList.add('active');
}

function setLanguage(lang) {
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-vi').classList.toggle('active', lang === 'vi');
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = el.getAttribute('data-' + lang);
    });
}

// Initialize Employee View
window.addEventListener('DOMContentLoaded', () => {
    switchRole('employee');
});