import Segment from "./segment.js";
import Validator from "./validator.js";
import {base64Decode, jsonDecode} from "../helpers/decoder.js";

export default class Jwt {
    #token
    constructor(token) { this.#token = token }

    #parser() {
        if (typeof this.#token !== "string" || !this.#token.trim()) {
            throw new Error("Token must be a non-empty string");
        }

        const [headerPart, claimsPart, signaturePart] = this.#token.split(".");
        if (!headerPart || !claimsPart || !signaturePart) {
            throw new Error("Invalid JWT format");
        }

        return {
            headers: this.#decodePart(headerPart),
            claims: this.#decodePart(claimsPart),
            signature: base64Decode(signaturePart, true).toString('hex')
        };

    }

    #decodePart(value) { return jsonDecode(base64Decode(value)); }

    get headers() { return new Segment(this.#parser().headers); }
    get claims() { return new Segment(this.#parser().claims); }
    get signature() { return this.#parser().signature; }
    get parsed() { return this.#parser(); }
    get validate() { return new Validator(this.claims); }
}