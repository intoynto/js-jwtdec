declare module "intoy-jwtdec"
{
	function polyfill(input: any): string;
	export default polyfill;

	function base64_url_decode(str: any): string;
	export default base64_url_decode;

	class InvalidTokenError extends Error {
	}
	export { InvalidTokenError };
	function decodeToken(token: any, options?: any): any;
	export default decodeToken;

}