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

  /* ======= AVATAR UPLOAD (localStorage) ======= */
  const avatarFile = document.getElementById('avatarFile');
  const avatarPreview = document.getElementById('avatarPreview');
  const avatarImg = document.getElementById('avatarImg');
  const avatarPlaceholder = document.getElementById('avatarPlaceholder');
  const openUpload = document.getElementById('openUpload');

  function setAvatarFromDataURL(dataUrl) {
    if (!avatarImg || !avatarPreview || !avatarPlaceholder) return;
    if (!dataUrl) {
      avatarImg.style.display = 'none';
      avatarPlaceholder.style.display = 'block';
      avatarImg.src = '';
      return;
    }
    avatarImg.src = dataUrl;
    avatarImg.style.display = 'block';
    avatarPlaceholder.style.display = 'none';
    avatarPreview.style.background = 'transparent';
  }

  // load saved avatar
  try {
    if (localStorage) {
      const saved = localStorage.getItem('ecoscan_avatar');
      if (saved) setAvatarFromDataURL(saved);
    }
  } catch (e) {
    console.warn('localStorage not available', e);
  }

  // Open file dialog
  if (openUpload && avatarFile) {
    openUpload.addEventListener('click', (ev) => {
      ev.stopPropagation();
      avatarFile.click();
    });
  }
  if (avatarPreview && avatarFile) {
    avatarPreview.addEventListener('click', () => avatarFile.click());
  }

  if (avatarFile) {
    avatarFile.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      if (!file.type || !file.type.startsWith('image/')) {
        alert('Пожалуйста, выберите изображение.');
        return;
      }
      // Ограничение размера (2.2 MB)
      const maxBytes = 2.2 * 1024 * 1024;
      if (file.size > maxBytes) {
        alert('Файл слишком большой. Максимум 2 МБ.');
        return;
      }

      const reader = new FileReader();
      reader.onload = function (ev) {
        const dataUrl = ev.target.result;
        setAvatarFromDataURL(dataUrl);
        try {
          localStorage.setItem('ecoscan_avatar', dataUrl);
        } catch (err) {
          console.warn('could not save avatar to localStorage', err);
        }
      };
      reader.readAsDataURL(file);
    });
  }

  // Accessibility: Enter/Space opens uploader when avatar is focused
  if (avatarPreview && avatarFile) {
    avatarPreview.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        avatarFile.click();
      }
    });
  }

  /* ======= TASKS AND PROGRESS ======= */
  function calculateActivityLevel(completed, total) {
    const rate = total === 0 ? 0 : (completed / total);
    if (rate >= 0.75) return { level: 'excellent', emoji: '😊', msg: 'Отличная работа! Ты настоящий эко-герой!', color: '#26AF61' };
    if (rate >= 0.5) return { level: 'good', emoji: '🙂', msg: 'Хорошая работа! Продолжай в том же духе!', color: '#FFA000' };
    return { level: 'poor', emoji: '😔', msg: 'Давай в следующей неделе постараемся больше!', color: '#D72221' };
  }

  function updateMotivation() {
    const checked = document.querySelectorAll('.task-checkbox:checked').length;
    const total = document.querySelectorAll('.task-checkbox').length;
    const data = calculateActivityLevel(checked, total);
    const widget = document.getElementById('motivationWidget');
    if (!widget) return;
    widget.innerHTML = `
      <div class="motivation-card" style="border-left:6px solid ${data.color};">
        <div style="font-size:28px">${data.emoji}</div>
        <div>
          <div id="motivationMessage" style="font-weight:700">${data.msg}</div>
          <div class="small">Выполнено: ${checked}/${total} задач</div>
        </div>
      </div>`;
  }

  function updateProgressAndPoints() {
    const checkboxes = Array.from(document.querySelectorAll('.task-checkbox'));
    const completed = checkboxes.filter(cb => cb.checked).length;
    const base = 543850;
    const mapping = { w1: 50, w2: 30, w3: 80, w4: 40 };
    const sum = checkboxes.reduce((acc, cb) => acc + (cb.checked ? (mapping[cb.id] || 0) : 0), 0);
    const pointsEl = document.getElementById('points');
    if (pointsEl) pointsEl.textContent = (base + sum).toLocaleString('ru-RU');

    const mp1 = document.getElementById('mp1'), mp1num = document.getElementById('mp1num');
    const mp2 = document.getElementById('mp2'), mp2num = document.getElementById('mp2num');
    const mp3 = document.getElementById('mp3'), mp3num = document.getElementById('mp3num');
    const mp4 = document.getElementById('mp4'), mp4num = document.getElementById('mp4num');

    const baseValues = { mp1: 50, mp2: 30, mp3: 70, mp4: 20 };
    const bonus = completed * 6;
    if (mp1) mp1.style.width = Math.min(baseValues.mp1 + bonus, 100) + '%';
    if (mp2) mp2.style.width = Math.min(baseValues.mp2 + Math.floor(bonus / 2), 100) + '%';
    if (mp3) mp3.style.width = Math.min(baseValues.mp3 + Math.floor(bonus / 3), 100) + '%';
    if (mp4) mp4.style.width = Math.min(baseValues.mp4 + Math.floor(bonus / 4), 100) + '%';

    if (mp1num && mp1 && mp1.style.width) mp1num.textContent = Math.round((parseFloat(mp1.style.width) / 100) * 10) + '/10';
    if (mp2num && mp2 && mp2.style.width) mp2num.textContent = Math.round((parseFloat(mp2.style.width) / 100) * 10) + '/10';
    if (mp3num && mp3 && mp3.style.width) mp3num.textContent = Math.round((parseFloat(mp3.style.width) / 100) * 10) + '/10';
    if (mp4num && mp4 && mp4.style.width) mp4num.textContent = Math.round((parseFloat(mp4.style.width) / 100) * 10) + '/10';
  }

  function saveTasks() {
    const state = {};
    document.querySelectorAll('.task-checkbox').forEach(cb => state[cb.id] = cb.checked);
    try { localStorage.setItem('ecoscan_tasks', JSON.stringify(state)); } catch (e) { console.warn('no localStorage', e); }
  }

  function onTaskChange() {
    updateMotivation();
    updateProgressAndPoints();
    saveTasks();
  }

  // attach change handlers to checkboxes
  document.querySelectorAll('.task-checkbox').forEach(cb => {
    cb.addEventListener('change', onTaskChange);
  });

  // load saved tasks state
  try {
    const saved = JSON.parse(localStorage.getItem('ecoscan_tasks') || '{}');
    document.querySelectorAll('.task-checkbox').forEach(cb => {
      if (saved[cb.id] !== undefined) cb.checked = saved[cb.id];
    });
  } catch (e) { /* ignore */ }

  // initial render
  updateMotivation();
  updateProgressAndPoints();

}); // end DOMContentLoaded