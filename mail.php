<?php
	$c = true;
	$admin_email  = "litvinov_yuriy@inbox.ru";

	$form_subject = "Связаться";

	foreach ( $_POST as $key => $value ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
	}
	$message = "<table style='width: 100%;'>$message</table>";

	$headers  = "From: noreply < noreply@".$_SERVER["HTTP_HOST"]." >\n";
	$headers .= "Cc: noreply < noreply@".$_SERVER["HTTP_HOST"]." >\n";
	$headers .= "X-Sender: noreply < noreply@".$_SERVER["HTTP_HOST"]." >\n";
	$headers .= 'X-Mailer: PHP/' . phpversion();
	$headers .= "X-Priority: 1\n";
	$headers .= "Return-Path: noreply@".$_SERVER["HTTP_HOST"]."\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=utf-8\n";
	mail($admin_email, 'Заявка с сайта '.$_SERVER["HTTP_HOST"], $message, $headers);
?>