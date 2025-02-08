document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const downloadBtn = document.getElementById("downloadBtn");
    const qrResult = document.getElementById("qrResult");
    const qrText = document.getElementById("qrText");

    generateBtn.addEventListener("click", function () {
        if (qrText.value.trim() === "") {
            alert("Lütfen geçerli bir metin girin!");
            return;
        }

        // QR kodu oluştur
        qrResult.innerHTML = `<img src="qr-generator.php?text=${encodeURIComponent(qrText.value)}" alt="QR Kod">`;
        downloadBtn.style.display = "block";
    });

    downloadBtn.addEventListener("click", function () {
        let qrImage = document.querySelector("#qrResult img");
        let downloadLink = document.createElement("a");
        downloadLink.href = qrImage.src;
        downloadLink.download = "qr-code.png";
        downloadLink.click();
    });
});
