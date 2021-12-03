export declare function polyfill(input: any): string;
export default polyfill;

export declare function base64_url_decode(str: any): string;
export default base64_url_decode;

export declare class InvalidTokenError extends Error {
}
export { InvalidTokenError };
export declare function decodeToken(token: any, options?: any): any;
export default decodeToken;
