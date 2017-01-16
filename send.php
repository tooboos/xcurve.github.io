<?
    $to = 'tooboos123@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Сообщение с сайта'; //Загаловок сообщения
    $message =         
        '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_GET['name'].'</p>
                        <p>E-mail: '.$_GET['email'].'</p>
                        <p>Сообщение: '.$_GET['massage'].'</p> 
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: 2boos@ukr.net"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>