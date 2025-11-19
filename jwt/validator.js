export default class Validator {
    #data
    constructor(data){ this.#data = data }

    isRelatedTo(subject) {
        return this.#data.get('sub') === subject;
    }

    hasBeenIssuedBy(...issuers) {
        return issuers.includes(this.#data.get('iss'));
    }

    isExpired(now = new Date()) {
        const exp = this.#data.get('exp');
        if (!exp) return false;
        return now >= new Date(exp * 1000);
    }

    getTimeLeft() {
        if (!this.#data.has('exp')) return null;
        return this.#data.get('exp') * 1000 - Date.now();
    }

    needsRefresh(threshold = 300000) { // 5 minutes default
        const timeLeft = this.getTimeLeft();
        return timeLeft !== null && timeLeft < threshold;
    }
}