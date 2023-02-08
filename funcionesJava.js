let idAnterior ="";

function aparecer (elemento) {
    document.getElementById(elemento).style.display="block";    
}

function  infoDatos (ID) {
    let ids = ["fechaNacimiento", "correo", "telefono", "domicilio"];
    let info ="";

    if(ID == "fechaNacimiento") {
        info = "Fecha de nacimiento: 25/05/1810";
    } else if (ID == "correo") {
        info = "E-mail: darren@gmail.com";
    } else if (ID == "telefono") {
        info = "Telefono: (011) 555-5555";
    } else if (ID == "domicilio") {
        info = "Domicilio: Calle falsa 1234";
    }
 /*   
    for(let i=0; i<4; i++){        
        document.getElementById(ids[i]+"Info").style.display = 'none';    
    }
  */  
    if(idAnterior != ID){
        document.getElementById("informacion").style.display="flex";
        document.getElementById("informacion").style.height = "40px"
        idAnterior = ID;
    } else {
        document.getElementById("informacion").style.display="none";
        document.getElementById("informacion").style.height = "40px"
        idAnterior = "";
    }
    
    document.getElementById("informacion").innerHTML = info;
}