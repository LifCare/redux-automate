export function createActionTypes(key) {
  return {
    [key.toUpperCase()]: key.toUpperCase(),
    [(key + "_success").toUpperCase()]: (key + "_success").toUpperCase(),
    [(key + "_failure").toUpperCase()]: (key + "_failure").toUpperCase()
  };
}

const actionCreator = type => payload => ({ type, payload });

export function createActions(key) {
  return {
    [key]: actionCreator(key.toUpperCase()),
    [`${key}Success`]: actionCreator((key + "_success").toUpperCase()),
    [`${key}Failure`]: actionCreator((key + "_failure").toUpperCase())
  };
}

var initialState = { payload: null, loading: false, error: null };

export var createReducer = (pincode, state) => (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case pincode.toUpperCase():
      return { ...state, loading: true };

    case (pincode + "_success").toUpperCase():
      return { ...state, payload, loading: false, error: null };

    case (pincode + "_failure").toUpperCase():
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};
