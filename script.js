//Contador
// Definir a data inicial (06/02/18)
const dataInicial = new Date("2018-02-06T00:00:00Z");

function atualizarContador() {
    // Data atual
    const dataAtual = new Date();

    // Calcular a diferença entre as datas em milissegundos
    const diffEmMs = dataAtual - dataInicial;

    // Calcular os valores em dias, horas, minutos e segundos
    const dias = Math.floor(diffEmMs / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diffEmMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diffEmMs % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diffEmMs % (1000 * 60)) / 1000);

    // Atualizar o texto do contador
  
    document.getElementById("counter").innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;

}

// Atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);

//Criando a chuva de corações
document.addEventListener('DOMContentLoaded', () => {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    setInterval(createHeart, 100);
});
