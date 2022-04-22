document.getElementById("ingress").addEventListener("click", function () {
  form.classList.remove("d-none");

  form.dataset.id = "ingress";
});

document.getElementById("exit").addEventListener("click", function () {
  form.classList.remove("d-none");

  form.dataset.id = "exit";
});

// class de mas ya por utilizarlo
class UI {

  informationTicket(datos, ejecucion, info) {
    let fecha, hora;
    if (ejecucion === 'Ingreso'){
      hora = datosClientes[datos].Ingreso.hora
      fecha = datosClientes[datos].Ingreso.fecha
    }
    if(ejecucion === 'Salida'){
      hora = datosClientes[datos].Salida.hora
      fecha = datosClientes[datos].Salida.fecha
    }
    const ticket = document.getElementById("ticket");
    ticket.innerHTML = '';
    const ticketContent = document.createElement("div");
    ticketContent.innerHTML = `<div class="text-success card border-success mb-3 list-group-item">
        <div class="card-header border-success d-flex justify-content-between">
          PLACA<span>5PK3J</span>
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

      ticket.appendChild(ticketContent)
  }
  
}
