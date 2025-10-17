document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.bonus-sidebar li');
  const sections = document.querySelectorAll('.bonus-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // убрать активные
      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      // активировать выбранный
      tab.classList.add('active');
      const sectionId = `section-${tab.dataset.section}`;
      document.getElementById(sectionId).classList.add('active');
    });
  });
});
