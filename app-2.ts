import { decrementadorAction, dividirAction, incrementadorAction, multiplicaAction, resetAction } from './contador/contador.actions';
import { reducer } from './contador/contador.reducer';
import { Action } from  './ngrx-fake/ngrx';



console.log( "incrementadorAction => ", reducer( 10, incrementadorAction ) );
console.log( "decrementadorAction => ", reducer( 10, decrementadorAction ) );
console.log( "multiplicaAction => ", reducer( 10, multiplicaAction ) );
console.log( "dividirAction => ", reducer( 10, dividirAction ) );
console.log( "resetAction => ", reducer( 10, resetAction ) );