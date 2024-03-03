class CustomError extends Error {
  constructor(status, message, details) {
    super();
    this.status = status;
    this.message = message;
    this.data = details;
  }
}

export default CustomError;
