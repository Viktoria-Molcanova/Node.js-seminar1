const http = require('http');
const url = require('url');

let homePageViews = 0;
let aboutPageViews = 0;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);


    if (parsedUrl.pathname === '/') {
        homePageViews++;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html lang="">
                <head> 
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#fafafa">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

                <meta charset="UTF-8">
                
                <title>Главная страница</title>
                </head>
                <body>
                    <h1>Добро пожаловать на главную страницу </h1>
                    <p>Количество просмотров  ${homePageViews}</p>
                    <a href="/about">Перейти на страницу "О нас"</a>
                </body>
            </html>
        `);
    } else if (parsedUrl.pathname === '/about') {
        aboutPageViews++;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html lang="">
                <head>
                <meta name="theme-color" content="#fafafa">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
                <meta charset="UTF-8">
                
                <title>Страница "О нас"</title>
                </head>
                <body>
                    <h1>Это страница "О нас"</h1>
                    <p>Количество просмотров  ${aboutPageViews}</p>
                    <a href="/">Вернуться на главную страницу</a>
                </body>
            </html>
        `);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <html lang="">
                <head>
                <meta charset="UTF-8">
               <meta name="theme-color" content="#fafafa">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
                <title>404 Не найдено</title>
                </head>
                <body>
                    <h1>404 Страница не найдена</h1>
                    <p>Запрашиваемая страница не существует</p>
                </body>
            </html>
        `);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});