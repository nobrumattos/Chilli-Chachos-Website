document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".backToTop");

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) { // Se a rolagem for maior que 300px
            button.classList.add("visible");
        } else {
            button.classList.remove("visible");
        }
    });

    button.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Adiciona a rolagem suave
        });
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Mostra ou oculta o botão dependendo da posição do scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// Selecione todas as imagens dentro dos parágrafos
const imagens = document.querySelectorAll('p a img');

// Adicione um evento de mouseover e mouseout para cada imagem
imagens.forEach(imagem => {
    // Defina as propriedades de estilo padrão
    const estiloPadrao = {
        transform: 'scale(1)',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
    };

    // Defina as propriedades de estilo ao passar o mouse
    const estiloMouseover = {
        transform: 'scale(1.1)',
        borderRadius: '20px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)'
    };

    // Adicione um evento de mouseover para aumentar a imagem
    imagem.addEventListener('mouseover', () => {
        Object.assign(imagem.style, estiloMouseover); // Aplica as propriedades de estilo ao passar o mouse
    });

    // Adicione um evento de mouseout para retornar ao tamanho original
    imagem.addEventListener('mouseout', () => {
        Object.assign(imagem.style, estiloPadrao); // Retorna ao tamanho e estilo original ao retirar o mouse
    });
});