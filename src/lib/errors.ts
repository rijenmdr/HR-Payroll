export class LoginError extends Error {
  constructor() {
    super('Invalid Credentials');
    this.name = 'LoginError';
  }
}
