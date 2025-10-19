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

  /* ======= USER SETTINGS PAGE SCRIPT ======= */
  // const STORAGE_KEYS = {
  //   avatar: 'ecoscan_avatar',
  //   user: 'ecoscan_user'
  // };
  // const DEFAULT_AVATAR = '../images/logo-green.png';

  // const avatarFile = document.getElementById('avatarFileSettings');
  // const avatarImg = document.getElementById('avatarImgSettings');
  // const avatarPlaceholder = document.getElementById('avatarPlaceholderSettings');
  // const openUpload = document.getElementById('openUploadSettings');
  // const settingsForm = document.getElementById('settingsForm');

  // function setAvatar(dataUrl) {
  //   if (!avatarImg || !avatarPlaceholder) return;
  //   if (!dataUrl) {
  //     avatarImg.style.display = 'none';
  //     avatarPlaceholder.style.display = 'block';
  //     avatarPlaceholder.querySelector('img').src = DEFAULT_AVATAR;
  //   } else {
  //     avatarImg.src = dataUrl;
  //     avatarImg.style.display = 'block';
  //     avatarPlaceholder.style.display = 'none';
  //   }
  // }

  // function loadUser() {
  //   try {
  //     const raw = localStorage.getItem(STORAGE_KEYS.user);
  //     if (raw) {
  //       const user = JSON.parse(raw);
  //       document.getElementById('firstName').value = user.firstName || '';
  //       document.getElementById('lastName').value = user.lastName || '';
  //       document.getElementById('email').value = user.email || '';
  //     }
  //   } catch (e) {}

  //   try {
  //     const saved = localStorage.getItem(STORAGE_KEYS.avatar);
  //     setAvatar(saved || null);
  //   } catch (e) {
  //     setAvatar(null);
  //   }
  // }

  // loadUser();

//   if (openUpload && avatarFile) {
//     openUpload.addEventListener('click', () => avatarFile.click());
//     avatarFile.addEventListener('change', (e) => {
//       const file = e.target.files && e.target.files[0];
//       if (!file) return;

//       if (!file.type.startsWith('image/')) return alert('Выберите изображение');
//       if (file.size > 2.5 * 1024 * 1024) return alert('Файл больше 2.5 МБ');

//       const reader = new FileReader();
//       reader.onload = (ev) => {
//         const dataUrl = ev.target.result;
//         localStorage.setItem(STORAGE_KEYS.avatar, dataUrl);
//         setAvatar(dataUrl);
//       };
//       reader.readAsDataURL(file);
//     });
//   }

//   if (settingsForm) {
//     settingsForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const user = {
//         firstName: document.getElementById('firstName').value.trim(),
//         lastName: document.getElementById('lastName').value.trim(),
//         email: document.getElementById('email').value.trim()
//       };
//       localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
//       location.href = 'profile.php';
//     });
//   }
});