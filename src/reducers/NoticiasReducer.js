import { NOTICIAS_RECIBIDAS } from "../actions/types";

const INITIAL_STATE = {
    noticias: null
};


export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case NOTICIAS_RECIBIDAS:
            return { ...state, noticias: payload };
        default:
            return {...state};
    }
}