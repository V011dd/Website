document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactform');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const clickCountElement = document.getElementById('clickCountElement');
    let clickCount = 0;

    contactForm.addEventListener('submit' , function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert('terima kasih, ${name}! pesan anda telah dikirim.');
        contactForm.reset();
    });

    changeColorBtn.addEventListener('click', function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = '#' + randomColor;

        clickCount++;
        clickCountElement.textContent = 'anda telah mengklik tombol ${clickCount} kali.';
    });
});
