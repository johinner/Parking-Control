console.log("vinculado");
const form = document.getElementById("form");
const tike = document.getElementById("tike");
const alertName = document.getElementById("alertName")
const datosModif = document.querySelectorAll(
    ".form-control, .container span, .info-fecha, .info-hora, .info-total"
);
let totalCancelacion = "";
let ingreso_salida = "";
let numerosCupos = 3;
const datosClientes = [];
const historialClientes = [];

const monstrarHora = () => {
    let hoy = new Date();
    let hr = hoy.getHours();
    if (hoy.getMinutes() < 10) {
        hr = "0" + hoy.getMinutes();
    }
    let min = hoy.getMinutes();
    let seg = hoy.getSeconds();
    return `${hr}:${min}:${seg}`;
};
const mostrarFecha = () => {
    let hoy = new Date();
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let diaSemana = dias[hoy.getDay()];
    let dia = hoy.getDate();
    let mes = meses[hoy.getMonth()];
    let año = hoy.getFullYear();
    return `${diaSemana}, ${dia} ${mes} ${año}`;
};

for (i = 0; i < numerosCupos; i++) {
    datosClientes.push({
        Placa: "null",
        ingreso: {
            Fecha: "null",
            Hora: "null",
        },
        salida: {
            Fecha: "null",
            Hora: "null",
        },
        estacionamiento: "null",
        cancelacion: 00
    });
}

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
};
const btnSalida = () => {
    ingreso_salida = "Salida";
    form.classList.remove("d-none");
    tike.classList.add("d-none");
    alertName.classList.add("d-none")
    datosModif[0].classList.remove("is-invalid")


};

const alerta = () => {
        datosModif[0].classList.add("is-invalid")
        form.classList.remove("d-none");
        alertName.classList.remove("d-none")
        alertName.textContent = "Error a validar la placa"
    
}

const btnConfir = (e) => {
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
            datosModif[7].textContent = `TOTAL CANCELACION ${totalCancelacion}`
            mostarTike();
            borrarDatosClientes(indice)
        }else{
            datosModif[0].classList.add("is-invalid")
            form.classList.remove("d-none");
            alertName.classList.remove("d-none")
            alertName.textContent = "Placa No Registrada en el Sistema"
        }
    }
};

const borrarDatosClientes = (indice) => {
    temporar = datosClientes[indice];
    historialClientes.push(temporar);

    datosClientes[indice].Placa = "null"
    datosClientes[indice].ingreso.Fecha = "null"
    datosClientes[indice].ingreso.Hora = "null"
    datosClientes[indice].salida.Fecha = "null"
    datosClientes[indice].salida.Hora = "null"
    datosClientes[indice].estacionamiento = "null"
    datosClientes[indice].cancelacion = 0

    console.log(temporar);
}
