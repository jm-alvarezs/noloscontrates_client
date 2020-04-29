import api from "./api";

const route = "/buscar";

export default {
    getExpedientes: busqueda => api.get(`${route}?buscar=${busqueda}`)
}