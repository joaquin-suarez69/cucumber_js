class LoginPage{

    get nombreUsuarioField(){
        return  $("input#user_email");
    }

    get contrasenaField(){
        return $("input#user_password");
    }

    get botonSignIn(){
        return $("input[name='commit']");
    }

    cargarUrlBase(){
        browser.url("/");
    }

    ingresarNombreUsuario(usuario){
        this.nombreUsuarioField.waitForDisplayed(5000);
        this.nombreUsuarioField.setValue(usuario);
    }

    ingresarContrasena(contrasena){
        this.contrasenaField.waitForDisplayed(5000);
        this.contrasenaField.setValue(contrasena);
    }
    hacerClickEnBotonDeLogin (){
        this.botonSignIn.waitForDisplayed(5000);
        this.botonSignIn.click();
    }
}

module.exports = new LoginPage();