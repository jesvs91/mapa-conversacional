function mostrarMapa(){
                document.querySelectorAll('.nodo-principal').forEach(function(element){
                    element.style.display='block';
                })
            }

            function regresarAlMapa(){
                document.querySelectorAll('.nodo-principal').forEach(function(element){
                    element.style.display='none';
                })
                    document.querySelectorAll('.detalle').forEach(function(element){
                    element.style.display='none';
                })
            }

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                   let targetId=this.getAttribute("href")
                     document.querySelectorAll('.detalle').forEach(function(element){
                       element.style.display='none';
                    })

                    document.querySelector(targetId).style.display='block';

                });
            });