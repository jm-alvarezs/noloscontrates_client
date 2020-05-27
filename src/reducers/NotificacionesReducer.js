import { CREAR_ALERTA, SET_PROPIEDAD_ALERTA } from "../actions/types";

const initialState = {
    alerta: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case CREAR_ALERTA:
        return { ...state, alerta: payload };
    case SET_PROPIEDAD_ALERTA:
        const { key, value } = payload;
        const alerta = {...state.alerta};
        alerta[key] = value;
        return { ...state, alerta };
    default:
        return state
    }
}
