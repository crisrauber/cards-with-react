export function addToPerson(person) {
  return {
    type: '@person/ADD',
    person,
  };
}

export function showAlertTotal() {
  return {
    type: '@person/SHOW_ALERT',
  };
}

export function removeFromPerson(person) {
  return {
    type: '@person/REMOVE',
    person,
  };
}
