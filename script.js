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

// Função para animar todos os elementos h1 com a classe "dynamicTitle"
function animateTitles() {
    const titles = document.querySelectorAll('.dynamicTitle');
    let animationTime = 4000; // Tempo total da animação em milissegundos
    let startY = -10; // Posição inicial no eixo Y
    let startX = 0; // Posição inicial no eixo X
    let endY = 10; // Posição final no eixo Y
    let endX = 0; // Posição final no eixo X

    titles.forEach(title => {
        // Animação do título
        setInterval(() => {
            // Animação de entrada
            title.style.transition = `transform ${animationTime / 2}ms ease-in-out`;
            title.style.transform = `translate(${startX}px, ${startY}px)`;

            // Animação de saída
            setTimeout(() => {
                title.style.transition = `transform ${animationTime / 2}ms ease-in-out`;
                title.style.transform = `translate(${endX}px, ${endY}px)`;
            }, animationTime / 2);
        }, animationTime);
    });
}

// Chama a função de animação quando a página carrega
window.onload = animateTitles;
