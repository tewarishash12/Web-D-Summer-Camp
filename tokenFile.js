const jwt = require('jsonwebtoken');

const SECRET = "ThisSecretCannotBeLeaked"

const payLoad = {
    "id": 1203,
    "email": "tewarishashwat2002@gmail.com"
};

const TOKEN = jwt.sign(payLoad, SECRET);

console.log(`Token: ${TOKEN}`);

jwt.verify(TOKEN, SECRET, (err, decodeToken)=>{
    if(err)
        console.log(err.message);
    else{
        console.log("Decoded successfully");
        console.log(decodeToken);
    }

});