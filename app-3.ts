import { contadorReducer } from './contador/contador.reducer';
import { Reducer, Action } from './ngrx-fake/ngrx';

class Store<T>{
    
    //private state:  T;

    constructor(
            private reducer: Reducer<T>,
            private state: T
        ){

    }

    getState(){

        return this.state;
    }

    dispatch( action:Action ){

        this.state = this.reducer( this.state, action );
    }
}

const store  = new Store( contadorReducer, 10 );

console.log( "store => ", store.getState() );