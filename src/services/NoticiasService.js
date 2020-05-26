import api from "./api";

const route = "/buscarNoticia";

export default {
    getNoticias: busqueda => api.get(`${route}?nombre=${busqueda}`)
}