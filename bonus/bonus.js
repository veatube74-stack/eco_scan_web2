// Бургер меню
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

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
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
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
    





    // ------- Avatar upload + localStorage persistence -------
    const avatarFile = document.getElementById('avatarFile');
    const avatarPreview = document.getElementById('avatarPreview');
    const avatarImg = document.getElementById('avatarImg');
    const avatarPlaceholder = document.getElementById('avatarPlaceholder');
    const openUpload = document.getElementById('openUpload');

    function setAvatarFromDataURL(dataUrl){
      if(!dataUrl) return;
      avatarImg.src = dataUrl;
      avatarImg.style.display = 'block';
      avatarPlaceholder.style.display = 'none';
      avatarPreview.style.background = 'transparent';
    }

    // load saved avatar
    try{
      const saved = localStorage.getItem('ecoscan_avatar');
      if(saved){ setAvatarFromDataURL(saved); }
    }catch(e){console.warn('localStorage not available',e)}

    openUpload.addEventListener('click', ()=> avatarFile.click());
    avatarPreview.addEventListener('click', ()=> avatarFile.click());

    avatarFile.addEventListener('change', async (e)=>{
      const file = e.target.files && e.target.files[0];
      if(!file) return;
      if(!file.type.startsWith('image/')){ alert('Пожалуйста, выберите изображение.'); return; }
      if(file.size > 2.2 * 1024 * 1024){ // 2.2MB
        alert('Файл слишком большой. Максимум 2 МБ.');
        return;
      }
      const reader = new FileReader();
      reader.onload = function(ev){
        const d = ev.target.result;
        setAvatarFromDataURL(d);
        try{ localStorage.setItem('ecoscan_avatar', d); }catch(err){console.warn('could not save avatar to localStorage',err)}
      }
      reader.readAsDataURL(file);
    });

    // ------- Tasks logic / progress update -------
    function calculateActivityLevel(completed, total){
      const rate = completed/total;
      if(rate >= 0.75) return {level:'excellent',emoji:'😊',msg:'Отличная работа! Ты настоящий эко-герой!',color:'#26AF61'};
      if(rate >= 0.5) return {level:'good',emoji:'🙂',msg:'Хорошая работа! Продолжай в том же духе!',color:'#FFA000'};
      return {level:'poor',emoji:'😔',msg:'Давай в следующей неделе постараемся больше!',color:'#D72221'};
    }

    function updateMotivation(){
      const checked = document.querySelectorAll('.task-checkbox:checked').length;
      const total = document.querySelectorAll('.task-checkbox').length;
      const data = calculateActivityLevel(checked,total);
      const widget = document.getElementById('motivationWidget');
      widget.innerHTML = `<div class=\"motivation-card\" style=\"border-left:6px solid ${data.color};\"><div style=\"font-size:28px\">${data.emoji}</div><div><div id=\"motivationMessage\" style=\"font-weight:700\">${data.msg}</div><div class=\"small\">Выполнено: ${checked}/${total} задач</div></div></div>`;
    }

    function updateProgressAndPoints(){
      const checkboxes = Array.from(document.querySelectorAll('.task-checkbox'));
      const completed = checkboxes.filter(cb=>cb.checked).length;
      // dynamic bonus mapping
      const base = 543850;
      const mapping = {w1:50,w2:30,w3:80,w4:40};
      const sum = checkboxes.reduce((acc,cb)=> acc + (cb.checked ? (mapping[cb.id]||0) : 0),0);
      document.getElementById('points').textContent = (base + sum).toLocaleString('ru-RU');

      // update progress bar widths and text
      const mp1 = document.getElementById('mp1'); const mp1num = document.getElementById('mp1num');
      const mp2 = document.getElementById('mp2'); const mp2num = document.getElementById('mp2num');
      const mp3 = document.getElementById('mp3'); const mp3num = document.getElementById('mp3num');
      const mp4 = document.getElementById('mp4'); const mp4num = document.getElementById('mp4num');

      // base percentages mapped to numbers
      const baseValues = {mp1:50,mp2:30,mp3:70,mp4:20};
      const bonus = completed * 6; // flexible bonus
      if(mp1) mp1.style.width = Math.min(baseValues.mp1 + bonus, 100) + '%';
      if(mp2) mp2.style.width = Math.min(baseValues.mp2 + Math.floor(bonus/2), 100) + '%';
      if(mp3) mp3.style.width = Math.min(baseValues.mp3 + Math.floor(bonus/3), 100) + '%';
      if(mp4) mp4.style.width = Math.min(baseValues.mp4 + Math.floor(bonus/4), 100) + '%';

      // update textual counters proportionally (assume /10 scale)
      if(mp1num) mp1num.textContent = Math.round((parseFloat(mp1.style.width)/100)*10) + '/10';
      if(mp2num) mp2num.textContent = Math.round((parseFloat(mp2.style.width)/100)*10) + '/10';
      if(mp3num) mp3num.textContent = Math.round((parseFloat(mp3.style.width)/100)*10) + '/10';
      if(mp4num) mp4num.textContent = Math.round((parseFloat(mp4.style.width)/100)*10) + '/10';
    }

    function onTaskChange(){ updateMotivation(); updateProgressAndPoints(); saveTasks(); }

    document.addEventListener('DOMContentLoaded', ()=>{
      document.querySelectorAll('.task-checkbox').forEach(cb=>{
        cb.addEventListener('change', onTaskChange);
      });

      // load saved tasks state
      try{
        const saved = JSON.parse(localStorage.getItem('ecoscan_tasks') || '{}');
        document.querySelectorAll('.task-checkbox').forEach(cb=>{
          if(saved[cb.id] !== undefined) cb.checked = saved[cb.id];
        });
      }catch(e){/* ignore */}

      updateMotivation(); updateProgressAndPoints();
    });

    function saveTasks(){
      const state = {};
      document.querySelectorAll('.task-checkbox').forEach(cb=> state[cb.id] = cb.checked);
      try{ localStorage.setItem('ecoscan_tasks', JSON.stringify(state)); }catch(e){console.warn('no localStorage',e)}
    }

    // accessibility: allow Enter/Space to open file when avatar focused
    avatarPreview.addEventListener('keydown', (ev)=>{
      if(ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); avatarFile.click(); }
    });

  