const header = document.querySelector('.site-header');
const backTop = document.querySelector('.back-top');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const langSwitch = document.querySelector('.lang-switch');
const memberList = document.getElementById('member-list');
const peopleTabs = [...document.querySelectorAll('.people-tab')];

let language = localStorage.getItem('lyu-lang') || 'zh';
let activePeopleGroup = 'pi';

// ===== Team member data =====
// To add a new member, copy one object and edit its fields.
// group options: pi / postdoc / phd / master / undergrad / alumni
const teamMembers = [
  {
    group: 'pi',
    nameZh: '吕之阳 教授',
    nameEn: 'Prof. Zhiyang Lyu',
    roleZh: '课题组负责人',
    roleEn: 'Principal Investigator',
    photo: 'https://me.seu.edu.cn/_upload/article/images/42/de/14f5181f4744ba4e7e53b40e7daa/06c4f21f-17b6-4e7d-9d0a-0fb72f307fd7_s.jpg',
    interestsZh: '3D/4D打印 · 结构材料 · 能源器件 · 数据驱动设计',
    interestsEn: '3D/4D printing · structural materials · energy devices · data-driven design',
    metaZh: '东南大学机械工程学院',
    metaEn: 'School of Mechanical Engineering, Southeast University',
    email: 'zhiyanglyu@seu.edu.cn'
  },
  {
    group: 'master',
    nameZh: '黄振',
    nameEn: 'Zhen Huang',
    roleZh: '硕士研究生 · 2025级',
    roleEn: "Master's Student · Class of 2025",
    photo: 'assets/huang-zhen.jpg',
    interestsZh: '机械超材料 · 物理信息驱动机器学习 · 逆向设计 · 有限元仿真',
    interestsEn: 'Mechanical metamaterials · physics-informed machine learning · inverse design · finite-element simulation',
    metaZh: '机械工程｜代表成果：可编程拉伸超材料的物理信息驱动混合专家逆向设计',
    metaEn: 'Mechanical Engineering | Representative work: physics-informed mixture-of-experts inverse design of programmable tensile metamaterials',
    email: '220250331@seu.edu.cn'
  }
];

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[ch]));
}

function renderMembers(){
  if(!memberList) return;
  const members = teamMembers.filter(member => member.group === activePeopleGroup);

  if(!members.length){
    memberList.innerHTML = `<div class="member-empty">${language === 'zh' ? '成员信息待更新' : 'Member information coming soon'}</div>`;
    return;
  }

  memberList.innerHTML = members.map(member => {
    const name = language === 'zh' ? member.nameZh : member.nameEn;
    const role = language === 'zh' ? member.roleZh : member.roleEn;
    const interests = language === 'zh' ? member.interestsZh : member.interestsEn;
    const meta = language === 'zh' ? member.metaZh : member.metaEn;
    const emailLink = member.email
      ? `<a class="member-email" href="mailto:${escapeHtml(member.email)}">${escapeHtml(member.email)}</a>`
      : '';

    return `
      <article class="member-card">
        <div class="member-avatar">
          <img src="${escapeHtml(member.photo)}" alt="${escapeHtml(name)}" />
          <div class="member-avatar-fallback" aria-hidden="true">${escapeHtml(name.slice(0, 1))}</div>
        </div>
        <div class="member-copy">
          <p class="member-role">${escapeHtml(role).toUpperCase()}</p>
          <h3>${escapeHtml(name)}</h3>
          <p class="member-interests">${escapeHtml(interests)}</p>
          <p class="member-meta">${escapeHtml(meta)}</p>
          ${emailLink}
        </div>
      </article>`;
  }).join('');

  memberList.querySelectorAll('.member-avatar img').forEach(img => {
    img.addEventListener('error', () => { img.style.display = 'none'; });
  });
}

function setLanguage(lang){
  language = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  if(langSwitch) langSwitch.textContent = lang === 'zh' ? 'EN' : '中';
  localStorage.setItem('lyu-lang', lang);
  renderMembers();
}

peopleTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    activePeopleGroup = tab.dataset.group;
    peopleTabs.forEach(item => item.classList.toggle('active', item === tab));
    renderMembers();
  });
});

setLanguage(language);

langSwitch?.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle?.setAttribute('aria-expanded', 'false');
}));

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 24);
  backTop?.classList.toggle('show', window.scrollY > 650);
}, {passive:true});

backTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

const yearNode = document.getElementById('year');
if(yearNode) yearNode.textContent = new Date().getFullYear();

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Remote/local portrait fallback.
document.querySelectorAll('.pi-photo').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
});


// ===== Hero research carousel =====
const paperSlides = [...document.querySelectorAll('.paper-slide')];
const paperDots = [...document.querySelectorAll('.paper-dot')];
let paperSlideIndex = 0;
let paperSlideTimer = null;

function showPaperSlide(index){
  if(!paperSlides.length) return;

  paperSlideIndex = (index + paperSlides.length) % paperSlides.length;

  paperSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === paperSlideIndex);
  });

  paperDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === paperSlideIndex);
  });
}

function startPaperCarousel(){
  if(paperSlides.length <= 1) return;

  clearInterval(paperSlideTimer);
  paperSlideTimer = setInterval(() => {
    showPaperSlide(paperSlideIndex + 1);
  }, 5000);
}

paperDots.forEach((dot, index) => {
  dot.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    showPaperSlide(index);
    startPaperCarousel();
  });
});

const paperShowcase = document.querySelector('.paper-showcase');

paperShowcase?.addEventListener('mouseenter', () => {
  clearInterval(paperSlideTimer);
});

paperShowcase?.addEventListener('mouseleave', () => {
  startPaperCarousel();
});

showPaperSlide(0);
startPaperCarousel();
