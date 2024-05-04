function SaveData() {
    let userData = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        age: document.getElementById("age").value,
        city: document.getElementById("city").value,
        region: document.getElementById("region").value,
        streetAddress: document.getElementById("address").value
    }

    // Проверка наличия значений в полях
    if (userData.name && userData.email && userData.password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Преобразование объекта в JSON и сохранение в localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Добавление нового пользователя в массив
        users.push(userData);

        // Сохранение массива пользователей в localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Save Data!');    
        // Перенаправление на главную страницу
        window.location.href = '../index.html';
    } else {
        alert('Oops, what happened wrong!');
    }
}



function login() {
    // Получение сохраненных пользователей из локального хранилища
    let storedUsers = JSON.parse(localStorage.getItem('users'));

    // Проверка наличия сохраненных пользователей и их количества
    if (storedUsers && storedUsers.length > 0) {
        // Получение введенного имени пользователя и пароля
        let enteredUsername = document.getElementById('username').value;
        let enteredPassword = document.getElementById('password').value;

        // Поиск пользователя по введенным данным в сохраненных пользователях
        let foundUser = storedUsers.find(user =>
            user.name.toLowerCase() === enteredUsername.toLowerCase() &&
            user.password === enteredPassword
        );

        // Проверка наличия найденного пользователя
        if (foundUser) {
            // Скрыть форму входа и показать профиль пользователя
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('section__sign').style.display = 'none';
            document.getElementById('profile').style.display = 'block';

            // Отобразить имя пользователя в профиле
            document.getElementById('user').innerText = enteredUsername;

            // Сохранить имя пользователя в локальное хранилище для профиля
            localStorage.setItem('profileName', enteredUsername);
        } else {
            // В случае неверных учетных данных показать сообщение об ошибке
            alert('Invalid credentials. Please try again.');
        }
    } else {
        // Если пользовательские данные не найдены, показать сообщение о необходимости регистрации
        alert("The user's data was not found. Please register first.");
    }

    // Установка флага "loggedIn" в локальное хранилище после успешного входа
    localStorage.setItem('loggedIn', 'true');
};


document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    // Высов функцей сохронение данных
    SaveData();
});

