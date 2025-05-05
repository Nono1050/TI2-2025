<?php
# view/guestbookView.php
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TI2 | Livre d'or</title>
    <link rel="icon" type="image/png" href="img/favicon.png">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container">
<h1>TI2 | Livre d'or</h1>


<?php
$error = "";
$thanks ="";
if(isset($insert)){
    if($insert===true) {
        $thanks = "Message bien envoyé";
    }else{
        $error ="Pas inséré côté serveur";
    }
}
 ?>
<h3 class="merci"><?=$thanks?></h3>
<h3 class="erreur"><?=$error?></h3>
<div class="signup-container">
<img src="../img/sign-up-amico.png" alt="Sign Up" class="signup-image">
<form action="" method="post">

<div id="prenom">
        <label for="prenomID">Prénom*</label>
        <input type="text" id="prenomID" name="prénom" placeholder="Entrez votre prénom" >
        <span class="error-message" id="PrenomError"></span>
    </div>

    <div id="name">
        <label for="NomID">Nom*</label>
        <input type="text" id="NomID" name="nom" placeholder="Entrez votre nom" required>
        <span class="error-message" id="NomError"></span>
    </div>

    <div id="email">
        <label for="emailID">E-mail*</label>
        <input type="email" id="emailID" name="email" placeholder="Entrez votre email" required>
        <span class="error-message" id="EmailError"></span>
    </div>
    <div id="codepostal">
        <label for="postalID">c/postal*</label>
        <input type="text" id="postalID" name="postal" placeholder="Entrez votre code postal" required>
        <span class="error-message" id="PostalError"></span>
    </div>

    <div id="telephone">
        <label for="telephoneID">Portable*</label>
        <input type="text" id="telephoneID" name="telephone" placeholder="Entrez votre téléphone" required>
        <span class="error-message" id="TelephoneError"></span>
    </div>

    <div id="message">
        <label for="messageID">Message*</label>
        <textarea id="messageID" name="message" rows="11" placeholder="Entrez votre message" required></textarea>
        <span class="error-message" id="MessageError"></span>
    </div>
    <button type="submit" id="btn">Envoyer</button>
    
        
    
</form>

<?php

$nbInfoUtilisateur = count($select);

if(empty($nbInfoUtilisateur)): ?>

    <div class="nomessage">
        <h2>Pas de message</h2>
        <p>Veuillez consulter cette page plus tard</p>
    </div>
    <?php else:
         $pluriel = $nbInfoUtilisateur>1? "s" : "";
        ?>
    <div class="messages">
        <h2>Il y a <?= $nbInfoUtilisateur?> message<?=$pluriel?></h2>
      
    
        <?php foreach ($select as $item): ?>
        <div class="afiche">
            <h5><?= $item['firstname'] ?> <?= $item['lastname'] ?> à écrit ce message le <?= $item['datemessage'] ?> </h5>
            <h5><?= $item['message'] ?></h5>
        </div>
        <?php endforeach; ?>
    </div>
    <?php endif; ?>
</div>
</div>
 

<script src="js/validation.js"></script>
</body>
</html>

