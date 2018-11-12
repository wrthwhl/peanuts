import { actionTypes } from '../actions';

const initialState = {
  doables: [
    {
      id: 0,
      name: 'get almond milk',
      notes: 'http://amzn.eu/d/0KIJc45',
      isResult: false,
      area: '',
      context: '',
      deadline: '',
      schedule: '',
      reminder: '',
      createdAt: Date.now()
    },
    {
      id: 1,
      name: 'rule the world',
      notes: '',
      isResult: false,
      area: 'personal',
      context: '',
      deadline: '',
      schedule: '',
      reminder: '',
      createdAt: Date.now()
    },
    {
      id: 2,
      name: 'call mom',
      notes: '+41 44 761 69 49',
      isResult: false,
      area: '',
      context: '',
      deadline: '',
      schedule: '',
      reminder: '',
      createdAt: Date.now()
    }
  ],
  areas: {
    personal: {
      name: 'Personal'
    }
  },
  contexts: {
    codeworks: {
      name: 'Office'
    },
    home: {
      name: 'Home'
    },
    commute: {
      name: 'Commute'
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_DOABLE:
      let doables;
      if ('id' in action.doable) { // checking if property id exist
        doables = state.doables.map( doable => doable.id !== action.doable.id ? doable : action.doable )
      } else doables = [
        ...state.doables,
          { id: state.doables.length, ...action.doable, createdAt: Date.now() }
      ]
      return ({
        ...state,
          doables
      })

    case actionTypes.COMPLETE_DOABLE:
      return ({...state, doables: state.doables.map( doable => doable.id !== +action.id ? doable : {...doable, status: 'complete'})});

    case actionTypes.CREATE_OPTION:
      const {option, type} = action.data;
      return {...state, [`${type}s`]: {...state[`${type}s`], ...option} };

    default:
      return state;
  }
}
