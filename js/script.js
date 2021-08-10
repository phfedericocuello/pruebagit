let masServicios = true; // el boton dice más servicios


let aBotonServicios = document.getElementById("aBotonServicios");



const cambiar = () => {
    if (masServicios == true) {
        aBotonServicios.innerHTML = "Ver menos servicios";
        masServicios = false;
        $('.acercaDe').css('margin-top', '110%');
    } else {
        aBotonServicios.innerHTML = "Ver más servicios";
        masServicios = true;
        $('.acercaDe').css('margin-top', '10%');
    }
}

aBotonServicios.addEventListener("click", cambiar);