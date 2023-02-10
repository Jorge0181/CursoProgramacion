let idAnterior = "";

/*function aparecer (elemento) {
    document.getElementById(elemento).style.display="block";    
}*/

// Funcion que se usa para mostrar los datos personales en la seccion de informacion personal 
function  infoDatos (ID) {
    let mensaje = {fechaNacimiento:"Fecha de nacimiento: 25/05/1810", correo:"E-mail: darren@gmail.com",telefono: "Telefono: (11) 5555-7777", domicilio:"Domicilio: Calle falsa 1234"};
    let info = mensaje[ID];
    console.log(info);
 
    if(idAnterior != ID){
        document.getElementById("informacion").style.display="flex";
        document.getElementById("informacion").style.height = "40px";
        idAnterior = ID;
    } else {
        document.getElementById("informacion").style.display="none";
        document.getElementById("informacion").style.height = "40px";
        idAnterior = "";
    }
    
    document.getElementById("informacion").innerHTML = info;
}


// Funcion que simula el envio del formulario
document.addEventListener("click", function(e) {
    let campo = ["nombre", "apellido", "email", "numTelefono", "mensaje"];
    let mensaje = "";
    let cont=document.getElementById("contenedor-mensaje");
    let targ = e.target;
    console.log(e);
    
    if(cont.style.display == "block" && targ != document.getElementById("btnEnviar")) {
        console.log("oculta");
        cont.style.display = "none";
    } else if(targ == document.getElementById("btnEnviar")) {
        for (let i=0; i<5; i++) {
            if(document.getElementById(campo[i]).value == "") {
                mensaje = "Debes completar el campo "+campo[i];
                i=5;
            } else {
                mensaje = "El mensaje ha sido enviado exitosamente";
            }
        }

        if(mensaje == "El mensaje ha sido enviado exitosamente") {
            for (let i=0; i<5; i++) {
                document.getElementById(campo[i]).value = " ";
            }
        }
        
        document.getElementById("mensajeForm").innerHTML = mensaje;
        cont.style.display = "block";
        console.log("se ve el div");      
    }
});