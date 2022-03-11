<?php
    header('Location: http://www.babjiglobalexports.com/');
    // $to = 'badnawarwalataher@gmail.com';
    $to = 'mkanchwala5@gmail.com';
    $firstname = $_POST["fname"];
    $email= $_POST["email"];
    $text= $_POST["message"];
    $phone= $_POST["phone"];
    

	$headers .='Reply-To: '. $to . "\r\n" ;
    $headers .='X-Mailer: PHP/' . phpversion();
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


    $message ='<table style="width:100%">
        <tr>
            <td><b style="text-transform: capitalize;">'.$firstname.'  '.$laststname.'</b></td>
        </tr>
        <tr><td><b>Email:</b> '.$email.'</td></tr>
        <tr><td><b>phone:</b> '.$phone.'</td></tr>
        <tr><td><b>Text:</b> '.$text.'</td></tr>
        
    </table>';

    if (@mail($to, $email, $message, $headers))
    {
       echo 'The message has been sent.';
    }else{
        echo 'failed';
    }

?>
