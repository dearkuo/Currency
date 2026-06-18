document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const generateBtn = document.getElementById('generateBtn');
    const qrcodeContainer = document.getElementById('qrcodeContainer');

    generateBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();

        if (url) {
            // 清除之前的 QR Code
            qrcodeContainer.innerHTML = '';

            // 生成新的 QR Code
            new QRCode(qrcodeContainer, {
                text: url,
                width: 200,
                height: 200,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        } else {
            qrcodeContainer.innerHTML = '<p style="color: red;">請輸入一個有效的網址！</p>';
        }
    });
});