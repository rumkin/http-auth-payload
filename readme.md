# HTTP Authorization Payload Middleware

Parse authorization http header and add auth information into request object.

![Build](https://img.shields.io/travis/rumkin/http-auth-payload.svg)

## Install

Install with npm:
```bash
npm install http-auth-payload
```

## Usage

Usage example with express application:

```javascript
const express = require('express');
const httpAuthPayload = require('http-auth-payload');

express()
    .use(httpAuthPayload)
    .use((req, res, next) => {
        const {auth} = req;

        if (auth.type !== 'token' || auth.payload !== 'super-secret-value') {
            res.status(403).send('Access denied');
            return;
        }

        next();
    })
    .use((req, res, next) => {
        res.send('Logged in');
    })
    .listen();
```

## License

MIT.
