import api from "./api";

const route = "/notificaciones";

export default {
  postNotificacion: (correo, reporte, columna, valorBusqueda, valorPrevio) =>
    api.post(route, { correo, reporte, columna, valorBusqueda, valorPrevio }),    
};
