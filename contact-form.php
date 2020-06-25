﻿<?php
if (isset($_POST['ITEM'])) {$item = $_POST['ITEM'];}
if (isset($_POST['FIO'])) {$name = $_POST['FIO'];}
if (isset($_POST['PHONE'])) {$phone = $_POST['PHONE'];}

 
$address = 'yourmail@gmail.com';
$sub = "Обратная связь";
$mes = "Устройство: $item \nФИО: $name \nНомер телефона: $phone ";
$verify = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8");
if ($verify == 'true')
{
	$json = array(); 
echo json_encode($json); 
		die();
}
else 
{
echo "<p>Сообщение не отправлено";
}
?>