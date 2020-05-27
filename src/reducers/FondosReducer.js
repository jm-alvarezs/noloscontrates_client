import { FONDOS_RECIBIDOS, SET_FONDO } from "../actions/types";

const initialState = {
    fondos: null,
    fondo: null,
    page: 0,
    current: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case FONDOS_RECIBIDOS:
        const fondo = payload[0].urls.regular;
        return { ...state, fondos: payload, fondo, current: 1, page: state.page + 1 };
    case SET_FONDO:        
        if(state.fondos === null) return { ...state };
        const background = state.fondos[state.current].urls.regular;
        return { ...state, fondo: background };
    default:
        return state
    }
}
