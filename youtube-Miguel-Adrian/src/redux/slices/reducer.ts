const EstadoInicial = [];

export const reducer = (state=EstadoInicial,action)=> {
    if(action.type === 'add'){
        return action.payload
    }
    return state
}