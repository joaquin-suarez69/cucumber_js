import {Given, When, Then} from "cucumber";
import loginPage from "../../pages/LoginPage";
import homePage from "../../pages/HomePage";


Given("El usuario esta en la pagina de login", () => {
    loginPage.cargarUrlBase();
});

When(/^el usuario ingresa "(.*)" como usuario$/, (usuario) => {
    loginPage.ingresarNombreUsuario(usuario);
});

Then(/^ingresa "(.*)" como contrasena$/, (contrasena) => {
    loginPage.ingresarContrasena(contrasena);
});

Then ("hago click en el boton de Sign in", () => {
    loginPage.hacerClickEnBotonDeLogin();
    expect(homePage.bannerPagina).toBePresent();
    expect(homePage.logoPrincipal).toBePresent();
    expect(homePage.usuarioLogueadoLabel).toBePresent();
});
