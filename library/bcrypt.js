const bcrypt = require("bcrypt");

const hashPassword = (rawPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(rawPassword, 11, (err, encrypted) => {
            if (!err) {
                resolve(encrypted);
            } else {
                reject();
            }
        });
    });
}

const comparePassword = (rawPassword, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(rawPassword, hash)
          .then((correct) => {
            resolve(correct);
          })
          .catch((syserr) => {
            console.log(syserr);
            reject(syserr);
          });
      });
}

module.exports = { hashPassword, comparePassword }