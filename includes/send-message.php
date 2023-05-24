<?
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' && !empty($_POST['name'])) {
    $message = '<p>Пользователь сайта: <strong>' . $_POST['name'] . '</strong></p> ';
    $message .= '<p>Его e-mail: <strong>' . $_POST['mail'] . '</strong></p>';
    $message .= '<p>Оставил заявку на услуги на: <strong>' . $_POST['date'] . '</strong></p>';
    if(!empty($_POST['message'])) {
        $message .= '<p>Оставил(-ла) для Вас сообщение через форму обратной связи на сайте:</p> ';
        $message .= '<p>Пожалуйста не оставляйте без ответа обращения посетителей вашего сайта!</p> ';
    }
    $mailTo = "kostyan.babushkin@list.ru"; // Ваш e-mail
    $subject = "Обратная связь с сайта studiya-dabro.ru"; // Тема сообщения
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From:  dabro-studiya@mail.ru <dabro-studiya@mail.ru>\r\n";
    if(mail($mailTo, $subject, $message, $headers)) {
        echo "<p>Спасибо, ".$_POST['name']."!</p>
        <p>Ваше сообщение успешно отправлено!Наши специалисты ответят вам в ближайшее время.</p>"; 
    } else {
        echo "Сообщение не отправлено!"; 
    }
}
?>
