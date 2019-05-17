import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dev-b23leygb.auth0.com',
    clientID: 'j7rVTQatqbdB5p4DB7veYJS5aY7CzGQG',
    redirectUri: 'http://localhost:3000/',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}