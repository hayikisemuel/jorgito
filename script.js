// 1. Lógica del corazón
document.getElementById('miCorazon').onclick = () => {
    alert("¡Que tal lo hice Goito!");
};

// 2. Crear luciérnagas dinámicamente
const escenario = document.getElementById('escenario');
for (let i = 0; i < 20; i++) {
    const luciernaga = document.createElement('div');
    luciernaga.className = 'luciernaga';
    
    // Posición aleatoria
    luciernaga.style.top = Math.random() * 100 + 'vh';
    luciernaga.style.left = Math.random() * 100 + 'vw';
    // Velocidad aleatoria
    luciernaga.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    escenario.appendChild(luciernaga);
}