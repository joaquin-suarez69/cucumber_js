import { Then } from "cucumber";
import crearEmpleadoPage from "../../pages/CrearEmpleadoPage";
import homePage from "../../pages/HomePage";

Then(/^Ingresa los datos del nuevo usuario "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, (primerNombre,apellido,email,id,fechaIngreso,lider) =>{
    crearEmpleadoPage.llenarDatosEmpleadoNuevo(primerNombre,apellido,email,id,fechaIngreso,lider);
})

Then("hace click en el boton Create Employee",() => {
    const botonCrearEmpl = crearEmpleadoPage.botonCrearEmpleado();
    crearEmpleadoPage.hacerClick(botonCrearEmpl);
})

Then("vuelve a la lista de usuarios",() => {
    const link=homePage.linkPorTexto("Employees Information");
    homePage.clickEnLink(link);
})