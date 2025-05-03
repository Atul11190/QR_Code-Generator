function generateQR() {
    let qrText = document.getElementById("qrText").value;
    let qrCodeDiv = document.getElementById("qrCode");
    qrCodeDiv.innerHTML = ""; // Clear previous QR code

    if (qrText.trim() !== "") {
        let qrCode = new QRCode(qrCodeDiv, {
            text: qrText,
            width: 500, // Higher resolution QR code
            height: 500
        });

        setTimeout(() => {
            document.getElementById("downloadBtn").style.display = "block";
        }, 500);
    } else {
        alert("Please enter a valid text or URL!");
    }
}

function downloadQR() {
    let qrCanvas = document.querySelector("#qrCode canvas");
    if (qrCanvas) {
        let qrImage = qrCanvas.toDataURL("image/png"); // Convert canvas to image
        let downloadLink = document.createElement("a");
        downloadLink.href = qrImage;
        downloadLink.download = "QRCode.png";
        downloadLink.click();
    }
}
