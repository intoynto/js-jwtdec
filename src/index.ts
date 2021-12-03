import base64_url_decode from './base64_url_decode';

class InvalidTokenError extends Error {

}

export {InvalidTokenError}

function decodeToken(token:any,options?:any)
{
  if (typeof token !== 'string') 
  {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
}

export default decodeToken;