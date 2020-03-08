export function addToCards(cards) {
  return {
    type: '@cards/ADD',
    cards,
  };
}

export function removeFromCards(cards) {
  return {
    type: '@cards/REMOVE',
    cards,
  };
}
