function generateQRCode() {
    const qrText = document.getElementById("qrText").value;
    const qrCodeContainer = document.getElementById("qrcode");

    // Clear any previous QR code
    qrCodeContainer.innerHTML = "";

    if (qrText) {
        new QRCode(qrCodeContainer, {
            text: qrText,
            width: 200,
            height: 200,
        });
    } else {
        alert("Please enter some text to generate a QR code.");
    }
}
