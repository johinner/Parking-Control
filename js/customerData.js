let numerosCupos = 2;
const datosClientes = [];
let placa;
const costoHora = 100; 
const historialClientes = [];

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

const copiaDatosClientes = (indice) => {
    historialClientes.push({
        placa: datosClientes[indice].placa,
        Ingreso: {
            fecha: datosClientes[indice].Ingreso.fecha,
            hora: datosClientes[indice].Ingreso.hora,
        },
        Salida: {
            fecha: datosClientes[indice].Salida.fecha,
            hora: datosClientes[indice].Salida.hora,
        },
        estacionamiento: datosClientes[indice].estacionamiento,
        cancelacion: 00
    });

}
