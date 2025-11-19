export default class Segment {
    #data
    constructor(data){ this.#data = data }
    has(name) { return this.#data.hasOwnProperty(name) ; }
    get(name, defaultValue = null) { return this.#data[name] ?? defaultValue; }
    all() { return this.#data; }
}