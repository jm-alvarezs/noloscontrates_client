import api from "./api";

const route = "/buscarNoticias";

export default {
    getNoticias: busqueda => api.get(`${route}?busqueda=${busqueda}`)
}