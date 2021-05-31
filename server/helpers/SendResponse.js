const HttpResponse = require("../contants/HttpResponse");

const sendResponse = (res, message = '', data = {}, statusCode = HttpResponse.HTTP_OK) => {
    return res.status(statusCode).json({
        success: statusCode === HttpResponse.HTTP_OK,
        message,
        data
    });
}

module.exports = sendResponse;
