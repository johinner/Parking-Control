const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // input del DOM => e.path[0][0].value
  placa = e.path[0][0].value;
  form.classList.add("d-none");
  const ui = new UI();

  if (form.dataset.id === "ingress") {
    const index = datosClientes.findIndex((item) => item.placa === "null");

    if (index != -1) {
      datosClientes[index].placa = placa;
      datosClientes[index].Ingreso.fecha = mostrarFecha();
      datosClientes[index].Ingreso.hora = monstrarHora();
      datosClientes[index].estacionamiento = index + 1;

      ui.informationTicket(index, "Ingreso", "valor x hora " + costoHora);
    } else {
      //alert.alertObject('no hay cupos');
    }
  }
  if (form.dataset.id === "exit") {
    const index = datosClientes.findIndex(
      (item) => item.placa === e.path[0][0].value
    );

    if (index != -1) {
      datosClientes[index].Salida.fecha = mostrarFecha();
      datosClientes[index].Salida.hora = monstrarHora();
      ui.informationTicket(index, "Salida", "Total $");
      removePlaque(index);
    } else {
      //alert.alertObject('placa no registrada');
    }
  }
  console.log(datosClientes);
});
