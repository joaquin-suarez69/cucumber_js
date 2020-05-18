Feature: Validacion home 

    Scenario: El usuario entro al home satisfactoriamente
        Given El usuario esta en la pagina de login
        When el usuario ingresa "gap-automation-test@mailinator.com" como usuario 
        Then ingresa "12345678" como contrasena 
        Then hago click en el boton de Sign in
        And la pagina de home es cargada