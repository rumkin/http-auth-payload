# HTTP Authorization Payload Middleware

Parse authorization http header and add auth information into request object.

## Install

Install with npm:
```bash
npm install http-auth-payload
```

## Usage

Usage example with express application:

```javascript
const express = express();
const httpAuthPayload = require('http-auth-payload');

express()
    .use(httpAuthPayload)
    .use((req, res, next) => {
        if (req.auth.type !== 'bearer') {
            res.status(403).send('Access denied');
            return;
        }

        if (req.auth.payload !== 'secret-token') {
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
