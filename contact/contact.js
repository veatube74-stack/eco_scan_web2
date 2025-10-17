document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
      company: form.companyName.value.trim(),
      fullName: form.fullName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      address: form.address.value.trim(),
      comment: form.comment.value.trim()
    };

    if (!data.company || !data.fullName || !data.email || !data.phone || !data.address) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    // Пока просто выводим данные
    console.log('Заявка отправлена:', data);
    alert('Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.');

    form.reset();
  });
});
