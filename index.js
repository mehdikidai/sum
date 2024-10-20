const sum = (...n) => {

    const regx = /^[0-9]+(\.[0-9]+)?$/;
  
    return n.reduce(
      (a, b) => (regx.test(b) ? Number(a) + Number(b) : Number(a)),
      0
    );
  
  };
  
  
  module.exports = sum;
