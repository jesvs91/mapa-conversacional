document.querySelectorAll('.nodo-principal').forEach(nodo => {
    nodo.addEventListener('click', function(e) {
       if(e.target.classList.contains('opcion')) return;
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);

          document.querySelectorAll('.nodo-principal').forEach(nodo => {
            nodo.classList.remove('active');
        });
         document.getElementById(targetId).classList.add('active');
      document.querySelectorAll('.detalle-container').forEach(detalle => {
            detalle.style.display = 'none';
        });
         const detailContainer = document.getElementById(`${targetId}-detalle`);
          if(detailContainer)detailContainer.style.display = 'block';

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
