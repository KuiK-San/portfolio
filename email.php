<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem'];
$telefone = $_POST['telefone'];
$data = date('d/m/y');
$hora = date('H:i:s');


/* corpo e-mail */
$arquivo = "
<style type='text/css'>
body {
margin:0px;
font-family:Verdane;
font-size:12px;
color: #666666;
}
a{
color: #666666;
text-decoration: none;
}
a:hover {
color: #FF0000;
text-decoration: none;
}
</style>
  <html>
      <table width='510' border='1' cellpadding='1' cellspacing='1' bgcolor='#CCCCCC'>
          <tr>
            <td>
<tr>
               <td width='500'>Nome:$nome</td>
              </tr>
              <tr>
                <td width='320'>E-mail:<b>$email</b></td>
   </tr>
    <tr>
                <td width='320'>Telefone:<b>$telefone</b></td>
              </tr>
   <tr>
                <td width='320'>Opções:$assunto</td>
              </tr>
              <tr>
                <td width='320'>Mensagem:$nome</td>
              </tr>
          </td>
        </tr>
        <tr>
          <td>Este e-mail foi enviado em <b>$data=</b> às <b>$hora</b></td>
        </tr>
      </table>
  </html>
";

$destino = "thegui4000@gmail.com";
$assunto = "contato pelo site";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: $nome <$email>';

$enviar = mail($destino, $assunto, $arquivo, $headers);

if($enviar){
    $mgm = "E-MAIL ENVIADO COM SUCESSO! <br> Entraremos em contato em breve";

}else{
    echo "erro ao enviar";
}
?>