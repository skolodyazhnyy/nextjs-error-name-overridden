export class PermissionDeniedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PermissionDeniedError';

    Object.setPrototypeOf(this, PermissionDeniedError.prototype);
  }
}
