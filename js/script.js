// ===== TABS =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 1. Прибираємо клас active у всіх кнопок і блоків
        tabBtns.forEach(item => item.classList.remove('active'));
        tabContents.forEach(item => item.classList.remove('active'));

        // 2. Додаємо клас active поточній кнопці
        btn.classList.add('active');

        // 3. Знаходимо блок, який відповідає кнопці, і показуємо його
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
// ===== /TABS =====

// ===== MODAL =====
const modal = document.getElementById('my-modal');
const openBtn = document.getElementById('open-modal-btn');
const closeBtn = document.querySelector('.close-modal');
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

function closeModal() {
    modal.classList.remove('open');
}

// Відкрити
openBtn.addEventListener('click', () => {
    form.hidden = false;
    successMsg.hidden = true;
    modal.classList.add('open');
});

// Закрити (хрестик)
closeBtn.addEventListener('click', closeModal);

// Закрити (клік поза вікном, на затемнений фон)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Закрити (клавіша Escape)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Надсилання форми (демо: без сервера)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    form.hidden = true;
    successMsg.hidden = false;
    setTimeout(closeModal, 2500);
});
// ===== /MODAL =====
