import FondosService from "../services/FondosService";

export const getFondos = () => dispatch => {
    FondosService.getFondos().then(res => {
        console.log(res.data);
    }).catch(error => {
        console.log(error);
    })
};