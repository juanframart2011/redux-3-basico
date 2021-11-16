import { Action } from  '../ngrx-fake/ngrx';

export const decrementadorAction:  Action = {
    type : 'DECREMENTAR'
}

export const incrementadorAction:  Action = {
    type : 'INCREMENTAR'
}

export const multiplicaAction:  Action = {
    type : 'MULTIPLICAR',
    payload : 3
}

export const dividirAction:  Action = {
    type : 'DIVIDIR',
    payload : 2
}

export const resetAction:  Action = {
    type : 'RESET'
}