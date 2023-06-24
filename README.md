# mitrasoft-test
Необходимо реализовать SPA (single page application) на React.
 
Ключевые технологии, которые необходимо использовать
1.	React
2.	React-bootstrap
3.	React-router
4.	Axios
5.	Redux
6.	Redux-saga
7.	Git

Описание задачи
Нужно создать сайт с постами, где будут присутствовать 3 страницы (роута):
1. Список постов (главная страница), где будут располагаться все посты.
2. Обо мне, где будет располагаться краткая информация о Вас.
3. Подробности о пользователе (куда необходимо вывести информацию о пользователе и список его постов)
Получить данные необходимо через фейковое api https://jsonplaceholder.typicode.com.
 
Подробное описание
1. Список постов (главная страница)
* Должна содержать список всех постов
* Каждый пост состоит из заголовка, текста, аватара автора и списка комментариев
* Заголовок и текст брать из api
* Аватар должен быть одним изображением для всех пользователей, но при клике на него, должен происходить переход на страницу Подробности о пользователе.
* Список комментариев изначально скрыт, доступна лишь кнопка Комментарии
* При нажатии на кнопку Комментарии, должен грузиться из api и показываться список комментариев к данному посту. При повторном нажатии список должен скрываться
*  Комментарий состоит из заголовка(email) и текста
* При загрузке данных с сервера нужно отобразить сперва лоадер, а только потом подгруженный контент (создайте дополнительно искусственную задержку в 0.5 секунд чтобы лоадер повисел подольше).
* Должен присутствовать хэдер с «меню-бургером». При нажатии на него слева должно всплывать навигационное меню, где будет присутствовать 2 ссылки (Список постов и Обо мне), а также отображаться ваш аватар, имя и почтовый адрес.
2. Обо мне
* Здесь всё просто, расскажите немного о себе. Сделайте эту страницу отдельным роутом, сохранив при этом хэдер и «меню-бургер».
3. Подробности о пользователе (переход при нажатии по аватару у поста)
* Необходимо создать карточку, куда вывести краткую информацию о пользователе. Информация должна соответствовать автору поста.
* Отобразить список постов принадлежащих только данному пользователю, структура самих постов полностью идентична с п.1.2.
* Добавить лоадер по аналогии с п.1.8.
* Сделать кнопку «Назад», при нажатии на которую произойдет переход на главную страницу.
