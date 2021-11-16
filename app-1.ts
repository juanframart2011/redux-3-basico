interface Action{
    type:string,
    payload?: any;
}

const decrementadorAction:  Action = {
    type : 'DECREMENTAR'
}

const incrementadorAction:  Action = {
    type : 'INCREMENTAR'
}

const multiplicaAction:  Action = {
    type : 'MULTIPLICAR',
    payload : 3
}

const dividirAction:  Action = {
    type : 'DIVIDIR',
    payload : 2
}

function  reducer( state = 10,  action:Action ){

    switch( action.type ){

        case 'INCREMENTAR':
            return state += 1;

        case 'DECREMENTAR':
            return state -= 1;

        case 'MULTIPLICAR':
            return state * action.payload;
        
        case 'DIVIDIR':
            return state / action.payload;

        default:
            return state;
    }
}

console.log( "incrementadorAction => ", reducer( 10, incrementadorAction ) );
console.log( "decrementadorAction => ", reducer( 10, decrementadorAction ) );
console.log( "multiplicaAction => ", reducer( 10, multiplicaAction ) );
console.log( "dividirAction => ", reducer( 10, dividirAction ) );