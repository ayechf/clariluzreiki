// Sliders
(function(){
    
    const sliders = [...document.querySelectorAll('.cuerpo_opiniones')];
    const botonAdelante = document.querySelector('#adelante');
    const botonAtras = document.querySelector('#atras');
    let valor;   

    botonAdelante.addEventListener('click', ()=>{
        cambioPosicion(1); 
    });

    botonAtras.addEventListener('click', ()=>{
        cambioPosicion(-1);
    });

    const cambioPosicion = (add)=>{
        const actualOpinion = document.querySelector('.cuerpo_opiniones_muestra').dataset.id;
        valor = Number(actualOpinion);
        valor+= add;


        sliders[Number(actualOpinion)-1].classList.remove('cuerpo_opiniones_muestra');
        if(valor === sliders.length+1 || valor === 0){
            valor = valor === 0 ? sliders.length  : 1;
        }

        sliders[valor-1].classList.add('cuerpo_opiniones_muestra');

    }

})();

// Prompt Suscribirse

prompt("Si queres recibir novedades, dejanos tu mail!")