console.log("vinculado");
const form = document.getElementById("form");
const tike = document.getElementById("tike");
const template = document.getElementById("template");
const listaClientes = document.getElementById("listaClientes");
const fragment = new DocumentFragment();
const alertName = document.getElementById("alertName")
const datosModif = document.querySelectorAll(
    ".form-control, .container span, .info-fecha, .info-hora, .info-total, .total"
);
let totalCancelacion = 0;
let costoXhora = 1000;
let ingreso_salida = "";


const historialClientes = [];

document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-outline-success")) {
        btnIngreso();
    }
    if (e.target.matches(".btn-outline-danger")) {
        btnSalida();
    }
    if (e.target.matches(".col-auto .btn")) {
        btnConfir(e);
    }
    if(e.target.matches("#historialClientes")){
        mostrarHistorial();
        tike.classList.add("d-none");
        console.log(datosClientes);
        console.log(historialClientes);
        console.log(datosModif)
    }
});

const mostarTike = () => {

    datosModif[2].textContent = `Fecha ${ingreso_salida}`;
    datosModif[4].textContent = `Hora ${ingreso_salida}`;
    datosModif[3].textContent = mostrarFecha();
    datosModif[5].textContent = monstrarHora();
    tike.classList.remove("d-none");
}

const btnIngreso = () => {
    ingreso_salida = "Ingreso";
    form.classList.remove("d-none");
    tike.classList.add("d-none");
    alertName.classList.add("d-none")
    datosModif[0].classList.remove("is-invalid")
    listaClientes.textContent = "";
};
const btnSalida = () => {
    ingreso_salida = "Salida";
    form.classList.remove("d-none");
    tike.classList.add("d-none");
    alertName.classList.add("d-none")
    datosModif[0].classList.remove("is-invalid")
    listaClientes.textContent = "";


};

const alerta = () => {
        datosModif[0].classList.add("is-invalid")
        form.classList.remove("d-none");
        alertName.classList.remove("d-none")
        alertName.textContent = "Error a validar la placa"
    
}

const cambiarNombre = (event) => {
    if (event.key === "Enter") {
        btnConfir()
    }
}

const btnConfir = () => {
    const copiaPlaca = datosClientes.findIndex((item) => item.Placa === datosModif[0].value)
    if(datosModif[0].value === ""){
       alerta();
       console.log("vacio")
       return
    }  
    
    if (ingreso_salida === "Ingreso") {
        if(copiaPlaca != -1){
            datosModif[0].classList.add("is-invalid")
            form.classList.remove("d-none");
            alertName.classList.remove("d-none")
            alertName.textContent = "Esta Placa Se Encuentra Registrada"
            return
        }
    }
    
    form.classList.add("d-none");
    if (ingreso_salida === "Ingreso") {
        const indice = datosClientes.findIndex((item) => item.Placa === "null");
        if (indice != -1) {
            datosClientes[indice].Placa = datosModif[0].value;
            datosModif[1].textContent = datosClientes[indice].Placa;
            datosClientes[indice].ingreso.Fecha = mostrarFecha();
            datosClientes[indice].ingreso.Hora = monstrarHora();
            datosModif[7].textContent = `Costo X Hora $${costoXhora}`

            let estacion = () => {
                if (indice < 9){
                    return `0${indice+1}`
                }return indice+1
            }
            datosClientes[indice].estacionamiento = estacion();
            datosModif[6].textContent = datosClientes[indice].estacionamiento;
            
            mostarTike();
        } else{
            datosModif[0].classList.add("is-invalid")
            form.classList.remove("d-none");
            alertName.classList.remove("d-none")
            alertName.textContent = "No Hay Estacionamiento Disponible"
        }
       
       
    }

    if (ingreso_salida === "Salida") {
        const indice = datosClientes.findIndex((item) => item.Placa === datosModif[0].value)
        if(indice != -1){     
            datosModif[1].textContent = datosClientes[indice].Placa;
            datosClientes[indice].salida.Fecha = mostrarFecha();
            datosClientes[indice].salida.Hora = monstrarHora();
            datosModif[6].textContent = datosClientes[indice].estacionamiento;
            datosModif[7].textContent = `Total Cancelacion $${datosClientes[indice].cancelacion}`
            mostarTike();
            copiaDatosClientes(indice);
            borrarDatosClientes(indice);
        }else{
            datosModif[0].classList.add("is-invalid");
            form.classList.remove("d-none");
            alertName.classList.remove("d-none");
            alertName.textContent = "Placa No Registrada en el Sistema"
        }
    }
};

const copiaDatosClientes = (indice) => {
    historialClientes.push({
        Placa: datosClientes[indice].Placa,
        ingreso: {
            Fecha: datosClientes[indice].ingreso.Fecha,
            Hora: datosClientes[indice].ingreso.Hora,
        },
        salida: {
            Fecha: datosClientes[indice].salida.Fecha,
            Hora: datosClientes[indice].salida.Hora,
        },
        estacionamiento: datosClientes[indice].estacionamiento,
        cancelacion: 00
    });

}

const borrarDatosClientes = (indice) => {
    datosClientes[indice].Placa = "null"
    datosClientes[indice].ingreso.Fecha = "null"
    datosClientes[indice].ingreso.Hora = "null"
    datosClientes[indice].salida.Fecha = "null"
    datosClientes[indice].salida.Hora = "null"
    datosClientes[indice].estacionamiento = "null"
    datosClientes[indice].cancelacion = 0
}

const mostrarHistorial = () => {
    listaClientes.textContent = "";
    historialClientes.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".placaIngreso").textContent = item.Placa;
        clone.querySelector(".placaSalida").textContent = item.Placa;
        clone.querySelector(".fechaIngreso").textContent = item.ingreso.Fecha;
        clone.querySelector(".horaIngreso").textContent = item.ingreso.Hora;
        clone.querySelector(".fechaSalida").textContent = item.salida.Fecha;
        clone.querySelector(".horaSalida").textContent = item.salida.Hora;
        clone.querySelector(".estacionIngreso").textContent = item.estacionamiento;
        clone.querySelector(".estacionSalida").textContent = item.estacionamiento;
        clone.querySelector(".infoCosto").textContent =`Costo X Hora $${costoXhora}`;
        clone.querySelector(".infoTotal").textContent = `Total Cancelacion $${item.cancelacion}`
        fragment.appendChild(clone);
    })
    listaClientes.appendChild(fragment);
}