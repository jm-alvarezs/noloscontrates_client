import api from "./api";

const fondos = "/fondos";

export default {
    getFondos: page => api.get(`${fondos}?page=${page}`)
}