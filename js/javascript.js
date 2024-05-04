//* Навигационное меню: показать/скрыть
const burger = document.querySelector('.toggle__btn'); // Получаем кнопку бургера
const menu = document.querySelector('.menu') // Получаем меню

burger.onclick = function () {
  menu.classList.toggle('open') // Переключаем класс для открытия/закрытия меню
}

//* Обработка нажатия кнопки "Log In"
const btnReg = document.querySelector('.action__btn'); // Получаем кнопку "Log In"
const bordRed = document.querySelector('.reg-block') // Получаем блок регистрации

btnReg.onclick = function () {
  bordRed.classList.toggle('open__reg') // Переключаем класс для отображения/скрытия блока регистрации
}


//* --------------------------------- STAR BACKROUND SCRIPT -----------------------------------------------
// Создание звезд в зависимости от размера экрана с случайным размером в заданном диапазоне
for (let i = 1; i < 101; i++) {
  let stars = document.createElement('div');
  stars.classList.add('star');

  // Генерация случайного размера в заданном диапазоне (от 1 до 3)
  let size = Math.random() * (3 - 1) + 1;
  stars.style.width = size + 'px';
  stars.style.height = size + 'px';

  stars.style.left = Math.random() * window.innerWidth + 'px';
  stars.style.top = Math.random() * window.innerHeight + 'px';
  document.querySelector('.sec').appendChild(stars);
}

// Анимация звезд
function animateStars() {
  let AllStars = document.querySelectorAll('.star');
  let num = Math.floor(Math.random() * AllStars.length);
  AllStars[num].classList.toggle('animate');
}
// Анимация цветление звезд
setInterval(animateStars, 800);

//*------- Owl Carousel ---------------
// Copy - Past 
$(document).ready(function () {
  $("#myCarousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 2 // Количество карточек при ширине экрана >= 992px
      }
    }
  });
});



// *----  Проверка, выполнил ли пользователь вход  -------
window.onload = function() {
  let loggedIn = localStorage.getItem('loggedIn');

  if (loggedIn === 'true') {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('profile').style.display = 'block';
    } 
};

//* ------ Обработчик для выхода ------
// Получаем кнопку logout
const logoutButton = document.getElementById('logoutBtn');

// Назначаем обработчик для кнопки logout
logoutButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Очищаем информацию о профиле 
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('profileName');

    // Перенаправление на страницу входа
    window.location.href = '../pages/sign_up.html'; 
});


document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  // Высов функцей сохронение данных
  SaveData();
});


