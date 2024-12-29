document.querySelectorAll('#mapa-index a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);

        document.querySelectorAll('#mapa-index a').forEach(a => {
            a.classList.remove('active');
        });
        this.classList.add('active');

        document.querySelectorAll('.detalle-container').forEach(detalle => {
            detalle.style.display = 'none';
        });

        document.querySelectorAll('.nodo-principal').forEach(nodo => {
            nodo.classList.remove('active');
        });

        const detailContainer = document.getElementById(`${targetId}-detalle`);
        const nodoPrincipal = document.getElementById(targetId);
        if(detailContainer) detailContainer.style.display = 'block';
        if(nodoPrincipal) nodoPrincipal.classList.add('active');
        const mapaFlujo = document.getElementById('mapa-flujo');
        if(mapaFlujo) mapaFlujo.scrollLeft = nodoPrincipal.offsetLeft - 100;
    });
});

document.querySelectorAll('.nodo-principal').forEach(nodo => {
    nodo.addEventListener('click', function(e) {
        if(e.target.classList.contains('opcion') || e.target.nodeName=="A") return;

        const target = this.getAttribute('data-target');
        const detailContainer = document.getElementById(target);

        document.querySelectorAll('.detalle-container').forEach(detalle => {
            detalle.style.display = 'none';
        });
        document.querySelectorAll('.nodo-principal').forEach(nodo => {
            nodo.classList.remove('active');
        });

        this.classList.add('active');
        detailContainer.style.display = 'block';
    });
});

function regresar() {
    document.querySelectorAll('.detalle-container').forEach(detalle => {
        detalle.style.display = 'none';
    });
    document.querySelectorAll('.nodo-principal').forEach(nodo => {
        nodo.classList.remove('active');
    });
}

