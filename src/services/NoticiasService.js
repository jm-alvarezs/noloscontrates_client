import api from "./api";

const route = "/noticias";

export default {
    getNoticias: busqueda => api.get(`${route}?busqueda=${busqueda}`)
}