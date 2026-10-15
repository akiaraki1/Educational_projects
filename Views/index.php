<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Учебные проекты</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <header>
        <h1>Учебные проекты</h1>
    </header>

    <main>
        <section>
            <h2>PHP</h2>

            <div class="card">
                <h3>Гостевая книга</h3>
                <a href="GuestBookView/index.php">
                    <img src="images/Гостевая книга.png" alt="Гостевая книга">
                </a>
                <p>Проект сделан на примитивном MVC. Гостевая книга с формой для оставления отзывов. Записи сохраняются в базе данных MySQL и выводятся списком на главной странице.</p>
            </div>

            <div class="card">
                <h3>Фото галерея</h3>
                <a href="Photo-gallery/photo-gallery.php">
                    <img src="images/Фотогалерея.png" alt="Фото галерея">
                </a>
                <p>Фото-галерея с загрузкой изображений, валидацией файлов, защитой от XSS</p>
            </div>

            <div class="card">
                <h3>Веб-страница «Портал пользователя»</h3>
                <a href="MainProfileView/index.php">
                    <img src="images/Регистрация и авторизация.png" alt="Скриншот проекта Каталог товаров">
                </a>
                <p>Веб-страница с MVC: система регистрации и авторизации пользователей, личный кабинет. Реализована валидация форм на сервере, защита от XSS, сессионная авторизация и разграничение доступа к страницам.</p>
            </div>
        </section>

        <section>
            <h2>JavaScript</h2>

            <div class="card">
                <h3>Меню кухни</h3>
                <a href="JavaSctipt Projects/Веб-сайт меню еды/index.html">
                    <img src="Images/Меню кухни.png" alt="Меню кухни">
                </a>
                <p>Веб-страница кухни с интерактивностью кнопок меню и заказать.</p>
            </div>

            <div class="card">
                <h3>Пароль</h3>
                <a href="JavaSctipt Projects/Пароль/index.html">
                    <img src="Images/Пароль.png" alt="Пароль">
                </a>
                <p>Форма создания пароля с валидацией</p>
            </div>
        </section>

    </main>

    <footer>
        <p>Учебные проекты — портфолио</p>
    </footer>
</body>
</html>