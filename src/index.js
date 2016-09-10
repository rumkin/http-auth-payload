module.exports = httpAuthPayload;

function httpAuthPayload(req, res, next) {
    var auth, type, payload;

    if (req.headers.hasOwnProperty('authorization')) {
        let parts = req.headers.authorization.split(' ');
        type = parts.shift().toLowerCase();
        payload = parts.join(' ');
    }
    else {
        type = 'none';
        payload = '';
    }

    auth = {type, payload};

    req.auth = auth;



    next();
}
