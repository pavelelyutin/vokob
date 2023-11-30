// фиксирование меню при прокрутке стриницы
window.addEventListener('scroll', function () {
    let scrollWindow = window.scrollY;
    let scrollHeaderBottom = document.querySelector('.header-top').scrollHeight;

    if (scrollWindow > scrollHeaderBottom) {
        this.document.querySelector('.header-bottom').classList.add('fixed');
        this.document.querySelector('main').style.margin = '90px 0 0 0';
    } else {
        this.document.querySelector('.header-bottom').classList.remove('fixed');
        this.document.querySelector('main').style.margin = '0';
    }
});

// Аккордион в секции с популярными вопросами
let accordionBtn = document.getElementsByClassName("accordion__button");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var textPanel = this.nextElementSibling;
    if (textPanel.style.maxHeight) {
      textPanel.style.maxHeight = null;
    } else {
      textPanel.style.maxHeight = textPanel.scrollHeight + "px";
    }
  });
}

// МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ
const btnCabinet = document.getElementById('btn-login');
const modalLogin = document.getElementById('login');
const modalRegistration = document.getElementById('registration');
const modalWindowLogin = document.querySelector('.modal__window');
const modalBtnClose = document.querySelectorAll('.modal__btn-close');

// Открытие модального окна по клику на кнопку "Личный кабинет"
btnCabinet.addEventListener('click', function() {
  modalLogin.classList.add('open');
  // document.body.classList.add('body-hidden');
})

// Закрытие модального окна по клику на кнопку-крестик
modalBtnClose.forEach((w) => {
  w.addEventListener('click', () => {
    modalLogin.classList.remove('open');
    modalRegistration.classList.remove('open');
  })
})

// Закрытие модального окна по нажатию на кнопку Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalLogin.classList.remove('open');
    modalRegistration.classList.remove('open');
    // document.body.classList.remove('body-hidden');
  }
})

// Закрытие модального окна при клике вне его
// modalWindow.addEventListener('click', (e) => {
//   e._isClickWithInModal = true;
// })

// modalLogin.addEventListener('click', (e) => {
//   if (e._isClickWithInModal) {
//     return;
//   }
//   e.currentTarget.classList.remove('open');
//   // document.body.classList.remove('body-hidden');
// })

// modalRegistration.addEventListener('click', (e) => {
//   if (e._isClickWithInModal) {
//     return;
//   }
//   e.currentTarget.classList.remove('open');
//   // document.body.classList.remove('body-hidden');
// })

// Закрытие модального окна авторизации при открытии модального окна регистрации и наоборот
const registrationModalLink = document.querySelector('.modal-form__registration-link');
const loginModalLink = document.querySelector('.modal-form__login-link')

registrationModalLink.addEventListener('click', function(e) {
  e.preventDefault();
  modalLogin.classList.remove('open');
  modalRegistration.classList.add('open');
})

loginModalLink.addEventListener('click', function(e) {
  e.preventDefault();
  modalRegistration.classList.remove('open');
  modalLogin.classList.add('open');
})


