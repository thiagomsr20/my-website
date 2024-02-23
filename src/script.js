// Seleciona todos os cartões de projetos
var projetos = document.querySelectorAll('.projeto');

// Seleciona o overlay e o pop-up
var overlay = document.getElementById('overlay');
var popup = document.getElementById('popup');

// Adiciona um evento de clique a cada cartão de projeto
projetos.forEach(function (projeto) {
    projeto.addEventListener('click', function () {
        // Cria um clone do cartão de projeto
        var clone = this.cloneNode(true);

        // Mostra as informações adicionais no clone
        var infoAdicional = clone.querySelector('.info-adicional');
        infoAdicional.style.display = 'block';

        // Adiciona o clone ao pop-up
        popup.innerHTML = '';
        popup.appendChild(clone);

        // Mostra o overlay e o pop-up
        overlay.style.display = 'flex';
    });
});

// Adiciona um evento de clique ao overlay para ocultá-lo
overlay.addEventListener('click', function () {
    this.style.display = 'none';
});

// Efeito de horizontal scrolling nos cartões de projetos
var projetos = document.getElementById('projetos');

projetos.addEventListener('mousemove', function (e) {
    var percentage = e.clientX / window.innerWidth;
    var difference = projetos.scrollWidth - projetos.offsetWidth;
    projetos.scrollLeft = difference * percentage;
});