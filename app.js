let user = "admin"
let password = 1234
function identificacion (user,password) {
    switch (true){
        case user == "admin" && password == 1234:
            console.log ("Bienvenido a nuestro sitio");
            break;
            case user != "admin" && password == 1234:
                console.log("Usuario Incorrecto");
                break;
                case user != "admin" && password != 1234:
                    console.log("Usuario y Constraseña incorrectos");
                    break;
                    case user == null && password == null:
                        console.log ("Debe ingresar los datos requeridos");
                        break;
    }
}
identificacion("admin",1234)