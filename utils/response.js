const sendErrorResponse = (res,payload) => {
    let statusCode = payload.statusCode
    let message = payload.message
    return res.status(statusCode).json({status:false,message:message})
    
}

const sendResponse = (res,data,statusCode) => {
    return res.status(statusCode).json({status:true,data:data})
}

module.exports = {sendErrorResponse,sendResponse}