export default function cards(state = [], action) {
  switch (action.type) {
    case '@cards/ADD':
      return [...state, action.cards];

    case '@cards/REMOVE':
      return state.filter(item => item !== action.cards);

    default:
      return state;
  }
}
