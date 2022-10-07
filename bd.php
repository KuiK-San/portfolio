<?php
if(!isset($_SESSION)){
    session_start(); //verificar se tem seção ativa, se não starta a sessão;
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem'];
$telefone = $_POST['telefone'];

include('conection.php');

$query = "INSERT INTO `contato`(`nome`, `email`, `assunto`, `mensagem`, `telefone`) VALUES ('$nome','$email','$assunto','$mensagem','$telefone')";

$sql = mysqli_query($conexao, $query);

$_SESSION['feito'];

header('location: index.php');

?>