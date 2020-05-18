import {Given, When, Then} from "cucumber";
import homePage from "../../pages/HomePage";
import loginPage from "../../pages/LoginPage";

var numFila;

Then("la pagina de home es cargada", () => {
    homePage.homeCargaCompleta();
});

Given(/^El usuario hace login con "(.*)" y contrasena "(.*)"$/, (usuario, contrasena) => {
    loginPage.cargarUrlBase();
    loginPage.ingresarNombreUsuario(usuario);
    loginPage.ingresarContrasena(contrasena);
    loginPage.hacerClickEnBotonDeLogin();
    expect(homePage.bannerPagina).toBePresent();
});

Given(/^el usuario hace click en el link "(.*)"$/, (textLink) => {
    const link=homePage.linkPorTexto(textLink);
    homePage.clickEnLink(link);
});

Then(/^verifica que esten los valores "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" del nuevo registro$/, (primerNombre,apellido,id,fechaIngreso,lider) => {
    homePage.verificarNuevoRegistroFueAgregado(primerNombre,apellido,id,fechaIngreso,lider);
});

Then("el usuario hace click en delete en la fila del nuevo registro", () => {
    expect(homePage.botonEliminarEmpleado(browser.config.numFila)).toBeClickable();
    //homePage.botonEliminarEmpleado(browser.config.numFila).scrollIntoView();
    homePage.botonEliminarEmpleado(browser.config.numFila).click();
    homePage.aceptarAlertas();
    homePage.linkPorTexto("Employees Information");
});

