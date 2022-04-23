document.getElementById("ingress").addEventListener("click", function () {
  form.classList.remove("d-none");

  form.dataset.id = "ingress";
});

document.getElementById("exit").addEventListener("click", function () {
  form.classList.remove("d-none");

  form.dataset.id = "exit";
});

document.getElementById('historialClientes').addEventListener('click', function(){
 const ui = new UI
 ui.mostrarHistorial(historialClientes);
})

class UI {
  informationTicket(datos, ejecucion, info) {
    let fecha, hora;
    if (ejecucion === "Ingreso") {
      hora = datosClientes[datos].Ingreso.hora;
      fecha = datosClientes[datos].Ingreso.fecha;
    }
    if (ejecucion === "Salida") {
      hora = datosClientes[datos].Salida.hora;
      fecha = datosClientes[datos].Salida.fecha;
    }
    const ticket = document.getElementById("ticket");
    ticket.innerHTML = "";
    const ticketContent = document.createElement("div");
    ticketContent.innerHTML = `<div class="text-success card border-success mb-2 list-group-item">
        <div class="card-header border-success d-flex justify-content-between">
          PLACA<span>${datosClientes[datos].placa}</span>
        </div>
        <div class="card-body text-success">
          <h5>Fecha ${ejecucion}</h5>
          <span>${fecha}</span>
          <h5>Hora ${ejecucion}</h5>
          <span>${hora}</span>
          <h5>Estacionamiento</h5>
          <span>${datosClientes[datos].estacionamiento}</span>
        </div>
        <div class="decor info-total border-success list-group-item">
        ${info + datosClientes[datos].cancelacion}
        </div>
      </div>`;

    ticket.appendChild(ticketContent);
    setTimeout(function(){
      ticket.innerHTML = '';
    }, 5000)
  }

  showMessage(message, cssClass) {
    const alert = document.getElementById("alert");
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-3`;
    //crear texto dentre del div
    div.appendChild(document.createTextNode(message));

    alert.appendChild(div);

    setTimeout(function(){
         div.remove()
    }, 3000)
  }

  mostrarHistorial(datos){
    const fragment = new DocumentFragment();
    const listaClientes = document.getElementById("listaClientes");
    listaClientes.innerHTML = '';
    datos.forEach(element => {
      const ticketContent = document.createElement("div");
      ticketContent.innerHTML = `<div class="text-success card border-success list-group-item m-5">
          <div class="card-header border-success d-flex justify-content-between">
            PLACA<span>${element.placa}</span>
          </div>
          <div class="card-body text-success">
            <h5>Fecha Ingreso</h5>
            <span>${element.Ingreso.fecha}</span>
            <h5>Hora Ingreso</h5>
            <span>${element.Ingreso.hora}</span>
            <h5>Fecha Salida</h5>
            <span>${element.Salida.fecha}</span>
            <h5>Hora Salida</h5>
            <span>${element.Salida.hora}</span>
            <h5>Estacionamiento</h5>
            <span>${element.estacionamiento}</span>
          </div>
          <div class="decor info-total border-success list-group-item">
          Total $ ${element.cancelacion}
          </div>
        </div>
        <div class='trazo'></div>`
        ;
     fragment.appendChild(ticketContent);
    });
    listaClientes.appendChild(fragment);
  }
}
