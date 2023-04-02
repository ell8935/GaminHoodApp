const emailValidate = email => {
  return /\S+@\S+\.\S+/.test(email);
};

export default emailValidate;
