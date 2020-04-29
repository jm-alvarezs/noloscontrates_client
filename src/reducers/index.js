import { combineReducers } from "redux";
import NoticiasReducer from "./NoticiasReducer";
import ExpedientesReducer from "./ExpedientesReducer";

export default combineReducers({
    expedientes: ExpedientesReducer,
    noticias: NoticiasReducer
});