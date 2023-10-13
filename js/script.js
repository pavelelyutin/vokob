// фиксирование меню при прокрутке стриницы
// window.addEventListener('scroll', function () {
//     let scrollWindow = window.scrollY;
//     let scrollHeaderBottom = document.querySelector('.header-top').scrollHeight;
//     console.log(scrollWindow);
//     console.log(scrollHeaderBottom);

//     if (scrollWindow > scrollHeaderBottom) {
//         this.document.querySelector('.header-bottom').classList.add('fixed');
//     } else {
//         this.document.querySelector('.header-bottom').classList.remove('fixed');
//     }
// });


// window.scroll(function () {
//     let top = window.document.scrollTop();
//     if (top > topPos) {
//         topPos.addClass('fixed');
//     } else {
//         topPos.removeClass('fixed');
//     }
// });

// $(function () {
//     var topPos = $('.header-bottom').first().offset().top;
//     $(window).scroll(function () {
//         var top = $(document).scrollTop();
//         if (top > topPos) $('.header-bottom').addClass('fixed');
//         else $('.my_class_name').removeClass('fixed');
//     });
// });

// alert('dsflfdf')

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
const modalLogin = document.getElementById('modal');
const modalWindowLogin = document.querySelector('.modal__window');
const modalBtnClose = document.querySelector('.modal__btn-close');

// Открытие модального окна по клику на кнопку "Личный кабинет"
btnCabinet.addEventListener('click', function() {
  modalLogin.classList.add('open');
  // document.body.classList.add('body-hidden');
})

// Закрытие модального окна по клику на кнопку-крестик
modalBtnClose.addEventListener('click', () => {
  modalLogin.classList.remove('open');
})

// Закрытие модального окна по нажатию на кнопку Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalLogin.classList.remove('open');
    // document.body.classList.remove('body-hidden');
  }
})

// Закрытие модального окна при клике вне его
modalWindowLogin.addEventListener('click', (e) => {
  e._isClickWithInModal = true;
  console.log('asfasdfasfdasfd')
})

modalLogin.addEventListener('click', (e) => {
  if (e._isClickWithInModal) {
    return;
  }
  e.currentTarget.classList.remove('open');
  // document.body.classList.remove('body-hidden');
})
