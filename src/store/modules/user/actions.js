export function login(data) {
  return {
    type: 'LOGIN',
    data,
  };
}

export function logout(data) {
  return {
    type: 'LOGOUT',
    data,
  };
}
