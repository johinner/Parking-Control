const monstrarHora = () => {
    let hoy = new Date();
    let hr = hoy.getHours();
    // if (hoy.getMinutes() < 10) {
    //     hr = "0" + hoy.getMinutes();
    // }
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