const statusCodes = {
    // Success codes
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,

    // Client error codes
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNPROCESSABLE:422,
    AUTHENTICATION_TIMEOUT: 419,
    // Server error codes
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503
};

module.exports = {
    statusCodes
};