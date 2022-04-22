let numerosCupos = 2;
const datosClientes = [];
let placa;
const costoHora = 100; 


for (i = 0; i < numerosCupos; i++) {
    datosClientes.push({
        placa: "null",
        Ingreso: {
            fecha: "null",
            hora: "null",
        },
        Salida: {
            fecha: "null",
            hora: "null",
        },
        estacionamiento: "null",
        cancelacion: '$'
    });
};

const removePlaque = (index) =>{
    datosClientes[index].placa = "null"
    datosClientes[index].Ingreso.fecha = "null"
    datosClientes[index].Ingreso.hora = "null"
    datosClientes[index].Salida.fecha = "null"
    datosClientes[index].Salida.hora = "null"
    datosClientes[index].estacionamiento = "null"
    datosClientes[index].cancelacion = 0
};