Feature: Бронирование 
    Scenario: Зверополис на завтра
        Given Пользователь находится на странице "http://qamid.tmweb.ru/client/index.php"
        When Пользователь выбирает день "body > nav > a:nth-child(2)"
        When Пользователь выбирает фильм и сеанс "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a"
        When Пользователь выбирает места "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)"
        When Пользователь бронирует
        Then Места забронированы "Вы выбрали билеты:"

        Scenario: Унесенные ветром на завтра
        Given Пользователь находится на странице "http://qamid.tmweb.ru/client/index.php"
        When Пользователь выбирает день "body > nav > a:nth-child(2)"
        When Пользователь выбирает фильм и сеанс "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a"
        When Пользователь выбирает места "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(7) > span:nth-child(3)"
        When Пользователь выбирает места "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(7) > span:nth-child(4)"
        When Пользователь бронирует
        Then Места забронированы "Вы выбрали билеты:"

        Scenario: Бронирование забронированого 
        Given Пользователь находится на странице "http://qamid.tmweb.ru/client/index.php"
        When Пользователь выбирает день "body > nav > a:nth-child(2)"
        When Пользователь выбирает фильм и сеанс "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a"
        When Пользователь выбирает места "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(8)"
        When Пользователь бронирует
        Then Места забронированы "Место уже забронировано"