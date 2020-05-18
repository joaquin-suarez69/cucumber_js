
class HomePage{

    get logoPrincipal(){
        return  $("div#logo");
    }

    get usuarioLogueadoLabel(){
        return $("ul#user_information > span");
    }

    get bannerPagina(){
        return $(".flash_notice");
    }

    get obtenerFilaEmpleados(){
        return $$("tbody tr");
    }

    obtenerEmpleadoEspecifico(numFila){
        return $("tbody tr:nth-of-type("+numFila+")");
    }

    linkPorTexto(textLink){
        $("="+textLink).waitForDisplayed(5000);
        return $("="+textLink);
    }
    
    homeCargaCompleta(){
        this.logoPrincipal.waitForDisplayed(5000);
        this.usuarioLogueadoLabel.waitForDisplayed(5000);
        this.bannerPagina.waitForDisplayed(5000);
    }

    clickEnLink(link){
        link.click();
    }

    verificarNuevoRegistroFueAgregado(primerNombre,apellido,id,fechaIngreso,lider){
        const empleados = this.obtenerFilaEmpleados;
        var cuenta = 1;
        var index = 0;
        empleados.forEach(element => {
            var empleado = element.$$("td");
            for (let i=0; i<empleado.length; i++){
                if(empleado[i].getText() === lider){
                    index = cuenta;
                    if(empleado[0].getText() === primerNombre && empleado[1].getText() === apellido && empleado[2].getText() === id && empleado[4].getText() === fechaIngreso){
                        browser.config.numFila=String(index);
                        return index;
                    } 
                }   
            }
            cuenta = cuenta+1;
        });
    }

    botonEliminarEmpleado(numFila){
        const empleado = this.obtenerEmpleadoEspecifico(numFila);
        return empleado.$("td:nth-of-type(9) a");
    }

    aceptarAlertas(){
        browser.acceptAlert();
    }
}

module.exports = new HomePage();