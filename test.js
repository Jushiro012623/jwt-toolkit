import Jwt from "./jwt/token.js";

const tokenString = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsiaHR0cHM6Ly9leGFtcGxlLmNvbSJdLCJpc3MiOiJodHRwczovL2V4YW1wbGUuY29tIiwic3ViIjoiMTIzNDU2Nzg5MCIsImlhdCI6MTc2MTI5Njc3NSwidGVzdCI6InRlc3RlciJ9.tzyBFaTFwsrvhnq6GYlLc_fKDOmm2OyBI8CNG3x3a48"

// =======================
// Example Usage of jwt
// =======================

const { headers, claims, parsed, signature, validate} = new Jwt(tokenString);

//decoded = access all parts of the token, ex: headers, claims, signature

// Access specific claims
const sub = claims.get('sub');          // "1234567890"
const typ = headers.get('typ');         // "JWT"

// Check existence
const hasExp = claims.has('exp');       // true/false

// Validate claims
const isExpired = validate.isExpired();         // true/false
const isRelatedTo = validate.isRelatedTo(sub);          // true/false
const hasBeenIssuedBy = validate.hasBeenIssuedBy('https://example.com'); // true/false

// Print results
console.log("Sub claim:", sub);
console.log("Header typ:", typ);
console.log("Has exp claim:", hasExp);
console.log("Signature (hex):", signature);
console.log("Is expired:", isExpired);
console.log("Is related to sub claim:", isRelatedTo);
console.log("Has been issued by example.com:", hasBeenIssuedBy);
console.log("Full decoded object:", parsed);