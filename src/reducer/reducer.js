const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  let newState = initialState;
  const { good, ok, bad } = state;

  switch (action.type) {
    case 'GOOD':
      newState = { ...state, good: good + 1 };
      return newState;
    case 'OK':
      newState = { ...state, ok: ok + 1 };
      return newState;
    case 'BAD':
      newState = { ...state, bad: bad + 1 };
      return newState;
    case 'ZERO':
      state = initialState;
      return state;
    default:
      return state;
  }
};

export default counterReducer;
