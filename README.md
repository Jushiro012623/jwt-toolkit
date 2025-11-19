cat > README.md << 'EOF'
# JWT Parser

A lightweight JavaScript library for parsing, validating, and working with JSON Web Tokens (JWTs). Supports easy access to claims, headers, and signature verification.

---

## Installation

```bash
npm install idex/jwt-parser
```

---

## Importing

```js
import { Jwt } from 'idex/jwt-parser';
```

---

## Basic Usage

```js
const tokenString = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ...";

// Using destructuring
const { headers, claims, parsed, signature, validate } = new Jwt(tokenString);

// OR
const jwt = new Jwt(tokenString);
```

---

## Accessing JWT Headers and Claims

JWT headers and claims are accessible as `Map` objects for convenience:

```js
// Get specific claims
const sub = claims.get('sub'); // Example: "1234567890"
const typ = headers.get('typ'); // Example: "JWT"

// Check if a claim exists
const hasExp = claims.has('exp'); // true or false
```

> ⚠️ Note: Always check for existence before accessing claims to avoid undefined values.

---

## Validating JWT Claims

The `validate` object provides several useful methods for checking token validity:

```js
// Check if the token has expired
const isExpired = validate.isExpired(); // true/false

// Check if the token relates to a specific subject
const isRelatedTo = validate.isRelatedTo(sub); // true/false

// Check if the token was issued by a specific issuer
const hasBeenIssuedBy = validate.hasBeenIssuedBy('https://example.com'); // true/false
```

> The `validate` object currently supports expiration, issuer, subject, and other common JWT checks. Additional custom validations can be added as needed.

---

## Accessing the Signature

```js
console.log("Signature (hex):", signature);
```

> The signature is provided as a hexadecimal string, useful for manual verification or debugging.

---

## Full Decoded Object

You can inspect the entire decoded JWT:

```js
console.log("Full decoded object:", parsed);
```

`parsed` contains:

```js
{
    headers: {...},
    claims: {...},
    signature: "abcdef1234...",
}
```
---

## Notes

- This library **does not support JWE (encrypted JWTs)**. Only standard JWTs (JWS) are supported.
- Headers and claims are returned as `Map` objects, which makes checking and accessing keys simple.
- For secure usage, always verify the signature on the backend before trusting the claims.
  EOF


## Author
**Ivan Macabontoc**

---
## 🪪 License

This project is licensed under the [MIT License](LICENSE).