Feature: Creacion, validacion y eliminacion de un usuario

Background:
Given El usuario hace login con "gap-automation-test@mailinator.com" y contrasena "12345678"

    Scenario: El usuario ingresa un nuevo registro y valida que este en la tabla 
        When el usuario hace click en el link "Create a new employee"
        Then Ingresa los datos del nuevo usuario "James" "smith" "random-email@mailinator.com" "123456890" "21-01-2015" "Joaquin"
        Then hace click en el boton Create Employee
        Then vuelve a la lista de usuarios
        Then verifica que esten los valores "James" "smith" "123456890" "01/21/2015" "Joaquin" del nuevo registro
        Then el usuario hace click en delete en la fila del nuevo registro



