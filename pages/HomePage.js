class HomePage{

    get logoPrincipal(){
        return  $("div#logo");
    }

    get usuarioLogueadoLabel(){
        return $("ul#user_information > span");
    }

    get bannerPagina(){
        return $("img[alt='GAP Vacations Management']");
    }
    
    homeCargaCompleta(){
        this.logoPrincipal.waitForDisplayed(5000);
        this.usuarioLogueadoLabel.waitForDisplayed(5000);
        this.bannerPagina.waitForDisplayed(5000);
    }
}

module.exports = new HomePage();