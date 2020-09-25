const jwt = require('jsonwebtoken');
const secret = 'my super secret';
let payload, token;

const get_token = (payload) => {
    let token = jwt.sign(payload, secret, {expiresIn: '1h'});
    return token;
}

const verify_token = (token) => {
    let _payload = false;
    
    try {
        _payload = jwt.verify(token, secret, {expiresIn: '1h'});
    } catch (err) {
    }

    return _payload;
}

payload = {
    user: "8columns"
};

token = get_token(payload);
console.log('token: ' + token);
payload = verify_token(token);

if (payload) {
    console.log('token is verified, you payload is');
    console.log(payload);
}