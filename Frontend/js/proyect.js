const formulario = document.getElementById('gasto-form');
const listaMovimientos = document.getElementById('movimientos-lista');


let movimientos = [
    { id: 1, monto: 250000, categoria: 'Salario', color: '#10b981' },
    { id: 2, monto: 60000, categoria: 'Comida', color: '#f97316' }
];


function mostrarMovimientos() {
    listaMovimientos.innerHTML = '';
    
    movimientos.forEach(mov => {
        const item = document.createElement('div');
        item.classList.add('movimiento-item');
        item.style.borderLeftColor = mov.color;

        item.innerHTML = `
            <div class="movimiento-info">
                <div class="monto" style="color: ${mov.color}">$${Number(mov.monto).toLocaleString()}</div>
                <div class="categoria">${mov.categoria}</div>
            </div>
            <button class="btn-eliminar" onclick="eliminarMovimiento(${mov.id})">🗑</button>
        `;

        listaMovimientos.appendChild(item);
    });
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const montoInput = document.getElementById('monto').value;
    const categoriaInput = document.getElementById('categoria').value;

    const nuevoMovimiento = {
        id: Date.now(),
        monto: parseFloat(montoInput),
        categoria: categoriaInput,
        color: categoriaInput === 'Salario' ? '#10b981' : '#f97316'
    };

    movimientos.push(nuevoMovimiento);
    mostrarMovimientos();
    
    formulario.reset();
});

function eliminarMovimiento(id) {
    movimientos = movimientos.filter(mov => mov.id !== id);
    mostrarMovimientos();
}


mostrarMovimientos();