const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // input del DOM => e.path[0][0].value
  placa = e.path[0][0].value;
  const ui = new UI();
  if (placa === "") {
    return ui.showMessage("Placa no visible", "danger");
  }
  form.classList.add("d-none");

  if (form.dataset.id === "ingress") {
    let index = datosClientes.findIndex((item) => item.placa === placa);
    if (index != -1) {
      return ui.showMessage("Placa ya validada", "danger");
    }

    index = datosClientes.findIndex((item) => item.placa === "null");
    if (index != -1) {
      datosClientes[index].placa = placa;
      datosClientes[index].Ingreso.fecha = mostrarFecha();
      datosClientes[index].Ingreso.hora = monstrarHora();
      datosClientes[index].estacionamiento = index + 1;
      ui.showMessage("Proceso exitoso", "info");
      ui.informationTicket(index, "Ingreso", "valor x hora " + costoHora);
    } else {
      ui.showMessage("NO hay puesto disponibles", "danger");
    }
  }

  if (form.dataset.id === "exit") {
    const index = datosClientes.findIndex((item) => item.placa === placa);
    if (index != -1) {
      datosClientes[index].Salida.fecha = mostrarFecha();
      datosClientes[index].Salida.hora = monstrarHora();
      ui.informationTicket(index, "Salida", "Total $");
      ui.showMessage(
        `Estacionamiento ${datosClientes[index].estacionamiento} disponible`,
        "info"
      );
      copiaDatosClientes(index);
      removePlaque(index);
    } else {
      ui.showMessage("PLACA no encontrada", "danger");
    }
  }
  console.log(datosClientes);
});
