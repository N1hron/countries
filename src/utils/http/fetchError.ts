class FetchError extends Error {
    public code: string;

    constructor(message: string, code: number | string) {
        super(message);
        this.name = 'FetchError';
        this.code = String(code);
    }
}

export { FetchError };
