'use strict';

function httpAuthPayload(req, res, next) {
    var header = req.headers.hasOwnProperty('authorization')
        ? req.headers.authorization
        : '';

    req.auth = parse(header);

    if (req.auth.type === 'none') {
        req.hasAuth = false;
    }
    else {
        req.hasAuth = true;
    }

    next();
}

function parse(value) {
    if (! value.length) {
        return {
            type: 'none',
            payload: '',
        };
    }

    var parts = value.split(' ');

    if (parts.length < 2) {
        return {
            type: parts[0],
            payload: '',
        };
    }

    var type = parts.shift().toLowerCase();
    var payload = parts.join(' ');

    return {type, payload};
}


module.exports = httpAuthPayload;
httpAuthPayload.parse = parse;
