const findUser = (user, password) => {
  console.log(user, password);
  if (user === 'admin' && password === '1234567') {
    return user;
  }
  return null;
};

module.exports = findUser;