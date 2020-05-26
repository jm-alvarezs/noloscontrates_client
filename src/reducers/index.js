import { combineReducers } from "redux";
import NoticiasReducer from "./NoticiasReducer";
import ExpedientesReducer from "./ExpedientesReducer";
import ModalReducer from "./ModalReducer";
import NotificacionesReducer from "./NotificacionesReducer";
import FondosReducer from "./FondosReducer";

export default combineReducers({
    expedientes: ExpedientesReducer,
    noticias: NoticiasReducer,
    modal: ModalReducer,
    alertas: NotificacionesReducer,
    fondos: FondosReducer
});