document.querySelectorAll('.nodo-principal').forEach(nodo => {
    nodo.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const detailContainer = document.getElementById(target);
        document.querySelectorAll('.detalle-container').forEach(detalle => {
            detalle.style.display = 'none';
        });
        detailContainer.style.display = 'block';
    });
});
function regresar(){
        document.querySelectorAll('.detalle-container').forEach(detalle => {
             detalle.style.display = 'none';
        });
}