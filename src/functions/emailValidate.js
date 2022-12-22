function emailValidate(email) {
  console.log(email);
  return /\S+@\S+\.\S+/.test(email);
}

export default emailValidate;
