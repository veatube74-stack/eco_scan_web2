document.addEventListener('DOMContentLoaded', () => {

  /* ======= BURGER MENU ======= */
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');

  if (burger && navMenu && navOverlay) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navMenu.classList.toggle('active');
      navOverlay.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Закрытие меню при клике на оверлей
    navOverlay.addEventListener('click', () => {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });

    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  }









//   /* ======= PROFILE DATA ======= */
//   const avatarImg = document.getElementById('avatarImg');
//   const avatarPlaceholder = document.getElementById('avatarPlaceholder');
//   const DEFAULT_AVATAR = '../images/logo-green.png';
//   const STORAGE_KEYS = {
//     avatar: 'ecoscan_avatar',
//     user: 'ecoscan_user',
//     tasks: 'ecoscan_tasks'
//   };

//   function setAvatar(dataUrl) {
//     if (!avatarImg || !avatarPlaceholder) return;
//     if (!dataUrl) {
//       avatarImg.style.display = 'none';
//       avatarPlaceholder.style.display = 'block';
//       avatarPlaceholder.querySelector('img').src = DEFAULT_AVATAR;
//     } else {
//       avatarImg.src = dataUrl;
//       avatarImg.style.display = 'block';
//       avatarPlaceholder.style.display = 'none';
//     }
//   }

//   function loadUser() {
//     let user = { firstName: '', lastName: '', email: '', level: 153, points: 543850, streak: 90 };
//     try {
//       const raw = localStorage.getItem(STORAGE_KEYS.user);
//       if (raw) user = Object.assign(user, JSON.parse(raw));
//     } catch (e) {}

//     document.getElementById('userLevel').textContent = user.level;
//     document.getElementById('streakNum').textContent = user.streak;
//     document.getElementById('profile-heading').textContent =
//       user.firstName ? `${user.firstName} ${user.lastName || ''}` : 'Name';
//     document.getElementById('userHandle').textContent =
//       user.email ? '@' + user.email.split('@')[0] : '@userName_name_1';
//   }

//   try {
//     const saved = localStorage.getItem(STORAGE_KEYS.avatar);
//     setAvatar(saved || null);
//   } catch (e) {
//     setAvatar(null);
//   }

//   loadUser();

//   /* ======= LOGOUT ======= */
//   const logoutBtn2 = document.getElementById('logoutBtn2');
//   if (logoutBtn2) {
//     logoutBtn2.addEventListener('click', () => {
//       localStorage.removeItem(STORAGE_KEYS.avatar);
//       localStorage.removeItem(STORAGE_KEYS.user);
//       localStorage.removeItem(STORAGE_KEYS.tasks);
//       window.location.href = '../main/main.html';
//     });
//   }

  /* ======= EDIT PROFILE ======= */
  const editProfile = document.getElementById('editProfile');
  if (editProfile) editProfile.addEventListener('click', () => location.href = 'user-settings.html');
});


  // TASKS logic: reporting action increases counters, progress based on streak
  const TASKS_DEFAULT = { plastic: { done:0, goal:10 }, metal:{done:0,goal:10}, tetra:{done:0,goal:10}, glass:{done:0,goal:10} };
  function loadTasks(){
    let tasks = TASKS_DEFAULT;
    try{ const raw = localStorage.getItem(STORAGE_KEYS.tasks); if(raw) tasks = JSON.parse(raw); }catch(e){}
    return tasks;
  }
  function saveTasks(tasks){ try{ localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(tasks)); }catch(e){} }

  function updateTaskUI(tasks){
    const map = { plastic: 'mp1', metal: 'mp2', tetra: 'mp3', glass: 'mp4' };
    const valMap = { plastic: 'cPlastic', metal:'cMetal', tetra:'cPaper', glass:'cGlass' };
    for(const key in map){
      const el = document.getElementById(map[key]);
      const num = document.getElementById(map[key]+'num');
      const valEl = document.getElementById(valMap[key]);
      const done = tasks[key].done || 0;
      const goal = tasks[key].goal || 10;
      const pct = Math.min(Math.round((done/goal)*100),100);
      if(el) el.style.width = pct + '%';
      if(document.getElementById(map[key]+'num')) document.getElementById(map[key]+'num').textContent = done + '/' + goal;
      if(valEl) valEl.textContent = done;
    }
  }

  document.querySelectorAll('.btn-action').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const task = e.currentTarget.getAttribute('data-task');
      if(!task) return;
      const tasks = loadTasks();
      tasks[task].done = (tasks[task].done || 0) + 1;
      let user = { points:543850, streak:90 };
      try{ const raw = localStorage.getItem(STORAGE_KEYS.user); if(raw) user = Object.assign(user, JSON.parse(raw)); }catch(e){}
      user.streak = (user.streak || 0) + 1;
      user.points = (user.points || 0) + 10;
      try{ localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user)); }catch(e){}
      saveTasks(tasks);
      updateTaskUI(tasks);
      loadUser();
    });
  });

  function loadUser(){ try{ const raw = localStorage.getItem(STORAGE_KEYS.user); if(raw){ const u = JSON.parse(raw); document.getElementById('userLevel').textContent = u.level || 153; document.getElementById('points').textContent = (u.points||0).toLocaleString('ru-RU'); document.getElementById('streakNum').textContent = u.streak||0; document.getElementById('profile-heading').textContent = (u.firstName? u.firstName + ' ' + (u.lastName||'') : 'Name'); document.getElementById('userHandle').textContent = u.email ? '@'+u.email.split('@')[0] : '@userName_name_1'; } }catch(e){ } }
  // loadUser();
  // updateTaskUI(loadTasks());