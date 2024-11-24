// Modo Dark/Light
const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
    document.body.classList.toggle('light');
});

/*Typing-effect*/
const textToType = "Conheça mais informações sobre\nMidoriya e outros heróis...";
let index = 0;
const typingTextElement = document.getElementById('typing-effect').querySelector('p');

function typeText() {
    if (index < textToType.length) {
        typingTextElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('typing-active');
            typeText();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const typingElement = document.getElementById('typing-effect');
observer.observe(typingElement);

/*Contact Form*/
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Por favor, insira um e-mail válido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    this.reset();
});

