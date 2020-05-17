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
    ingresarNombreUsuario(usuario){
        this.nombreUsuarioField.waitForDisplayed(5000);
        this.nombreUsuarioField.setValue(usuario);
    }

    ingresarContrasena(contrasena){
        this.contrasenaField.waitForDisplayed(5000);
        this.contrasenaField.setValue(contrasena);
    }
    hacerLogin (){
        this.botonSignIn.waitForDisplayed(5000);
        this.botonSignIn.click();
    }
}

module.exports = new LoginPage();