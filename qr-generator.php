<?php
if (isset($_GET['text'])) {
    $text = $_GET['text'];
    $size = isset($_GET['size']) ? $_GET['size'] : 300;

    // Google Charts API kullanarak QR kod oluşturma
    $qrCodeUrl = "https://chart.googleapis.com/chart?chs={$size}x{$size}&cht=qr&chl=" . urlencode($text);

    // QR kodu tarayıcıya yönlendirme
    header("Content-Type: image/png");
    readfile($qrCodeUrl);
}
?>
