interface Action{
    type:string,
    payload?: any;
}

const incrementadorAction:  Action = {
    type = 'INCREMENTAR'
}

function  reducer( state = 10,  action:Action ){

    if( action.typ === 'INCREMENTAR' ){

        return state += 1;
    }

    return state;
}

reducer( 10,"Mesi" );