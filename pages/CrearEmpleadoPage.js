class CrearEmpleadoPage{

    get primerNombreField(){
        
        return $("input#employee_first_name");
    }

    get apellidoField(){
        return $("input#employee_last_name");
    }

    get emailField(){
        return $("input#employee_email");
    }

    get identificacionField(){
        return $("input#employee_identification");
    }

    get liderNameField(){
        return $("input#employee_leader_name");
    }

    botonCrearEmpleado(){
        return $("input[name='commit']");
    }

    get selectAnioStartWorking(){
        return $("select[name='employee[start_working_on(1i)]']")
    }

    get selectMesStartWorking(){
        return $("select[name='employee[start_working_on(2i)]']")
    }

    get selectDiaStartWorking(){
        return $("select[name='employee[start_working_on(3i)]']")
    }

    llenarDatosEmpleadoNuevo(nombre,apellido,email,id,fechaIngreso,lider){
        const fechas=fechaIngreso.split("-");
        this.primerNombreField.waitForDisplayed(5000);
        this.primerNombreField.setValue(nombre);
        this.apellidoField.waitForDisplayed(5000);
        this.apellidoField.setValue(apellido);
        this.identificacionField.waitForDisplayed(5000);
        this.identificacionField.setValue(id);
        this.liderNameField.waitForDisplayed(5000);
        this.liderNameField.setValue(lider);
        this.selectAnioStartWorking.waitForDisplayed(5000);
        const nombreMes = this.determinarMes(fechas[1]);
        this.emailField.setValue(email)
        this.selectAnioStartWorking.selectByVisibleText(String(fechas[2]));
        this.selectMesStartWorking.selectByVisibleText(nombreMes);
        this.selectDiaStartWorking.selectByVisibleText(String(fechas[0]));
    }
    
    hacerClick(boton){
        boton.click();
    }

    determinarMes(numeroMes){
        switch(numeroMes.toString()){
            case "01":
                return "January";
            case "02": 
                return "February";
            case "03": 
                return "March";
            case "04":
                return "April";
            case "05":
                return "May";
            case "06":
                return "June";
            case "07":
                return "July";
            case "08": 
                return "August";
            case "09":
                return "September";
            case "10":
                return "October";
            case "11":
                return "November";
            case "12":
                return "December";
        }
    }
}

module.exports = new CrearEmpleadoPage();
