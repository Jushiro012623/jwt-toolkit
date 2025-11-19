export const base64Decode = (value, asBytes = false) => {
    if (value.length % 4) {
        value += "=".repeat(4 - (value.length % 4));
    }

    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");

    try {
        const buffer = Buffer.from(normalized, "base64");
        return asBytes ? buffer : buffer.toString("utf8");
    } catch {
        throw new Error("Invalid base64url string");
    }
}

export const jsonDecode = (value) => {
    try {
        return JSON.parse(value);
    } catch {
        throw new Error("Invalid JSON structure in token part");
    }
}