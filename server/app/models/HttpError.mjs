class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // Adds a message Property
    this.code = errorCode; // adds a code property
  }
}

const errorBody = (error, message, status) => {
  const body = {
    message: message,
    errorCause: error,
    errorCode: status,
  };
  return body;
};

export { errorBody };
export default HttpError;
