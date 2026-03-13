<?php
// public/contact.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Adatok megtisztítása
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    // CÍMZETT: Ide kapod meg a levelet
    $recipient = "lbukai@gmail.com";

    // TÁRGY
    $subject = "Weboldal üzenet: $name";

    // FELADÓ (Kritikus a kézbesítéshez):
    // Ide a saját domainedet írd (pl. noreply@bukailaci.hu),
    // hogy a szerver ne higgye azt, hogy más nevében akarsz levelet küldeni.
    $from_email = "bukailaci@bukailaci.eu";

    // TARTALOM
    $email_content = "Név: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Üzenet:\n$message\n";

    // FEJLÉCEK (Ettől nem megy a spamba)
    $headers = "From: Bukai Laci Web <$from_email>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n"; // Ha a válaszra nyomsz, a feladónak megy!
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // KÜLDÉS (Az 5. paraméter segít a hitelesítésben)
    if (mail($recipient, $subject, $email_content, $headers, "-f$from_email")) {
        header("Location: /kapcsolat?success=1");
    } else {
        header("Location: /kapcsolat?error=1");
    }
} else {
    header("Location: /kapcsolat");
}
?>