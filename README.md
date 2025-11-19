# jwt-decoder

A simple, lightweight, modular JWT decoder and validator for Node.js.
Provides easy access to JWT headers, claims, signature, and built-in validation helpers.

---

## Installation

```bash
npm install jwt-toolkit
```

---

## Usage

### Import from package

```js
import JWTPackage from 'jwt-decoder';
const { Jwt } = JWTPackage;

// or import individual modules
import Jwt from 'jwt-decoder/jwt/token.js';
import TokenValidate from 'jwt-decoder/jwt/validator.js';
import TokenSegment from 'jwt-decoder/jwt/segment.js';
```

---

### Decode a JWT

```js
const tokenString = "YOUR_JWT_TOKEN_HERE";
const jwt = new Jwt(tokenString);

// Access headers
console.log(jwt.headers.all());
console.log(jwt.headers.get('alg')); // "HS256"

// Access claims
console.log(jwt.claims.all());
console.log(jwt.claims.get('sub')); // Subject
console.log(jwt.claims.has('exp')); // true/false

// Access signature
console.log(jwt.signature);
```

---

### Validate claims

```js
const validate = jwt.validate;

console.log(validate.isExpired());          // true/false
console.log(validate.isIdentifiedBy('123')); // checks jti claim
console.log(validate.isRelatedTo('user-id')); // checks sub claim
console.log(validate.hasBeenIssuedBy('https://example.com')); // checks iss claim
console.log(validate.hasBeenIssuedBefore()); // checks iat claim
console.log(validate.isMinimumTimeBefore()); // checks nbf claim
```

---

### Access decoded object

```js
console.log(jwt.decoded);
// Output:
// {
//   headers: { typ: "JWT", alg: "HS256" },
//   claims: { sub: "123", iat: 1234567890, ... },
//   signature: "hexstring"
// }
```

---

## Project Structure

```
jwt-decoder/
├─ index.js           # package entry point
├─ jwt/
│   ├─ token.js       # Jwt class
│   ├─ segment.js     # TokenSegment class
│   └─ validator.js   # TokenValidate class
├─ test.js            # test script
├─ package.json
└─ README.md
```

---

## Features

* Decode JWT headers, claims, and signature
* Access individual claims or headers easily
* Check existence of claims with `.has()` and get values with `.get()`
* Built-in claim validators (exp, nbf, iat, sub, jti, iss)
* Modular structure, easy to extend
* Pure JavaScript, no dependencies

---

## License

MIT © Your Name
