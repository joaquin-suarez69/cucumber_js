import {Given, When, Then} from "cucumber";
import loginPage from "../../pages/LoginPage"


Given("El usuario esta en la pagina de login", () => {
    browser.url("/");
    /*$("input#user_email").waitForDisplayed(5000); //campo nombre de usuario
    $("input#user_password").waitForDisplayed(5000); //campo contrasena
    $("input[name='commit']").waitForDisplayed(5000); //boton sign in*/
});

When(/^el usuario ingresa "(.*)" como usuario$/, (usuario) => {
    //$("input#user_email").setValue(usuario);
    loginPage.ingresarNombreUsuario(usuario);
});

Then(/^ingresa "(.*)" como contrasena$/, (contrasena) => {
    //$("input#user_password").setValue(contrasena);
    loginPage.ingresarContrasena(contrasena);
});

Then ("hago click en el boton de Sign in", () => {
    //$("input[name='commit']").click();
    loginPage.hacerLogin();
});
