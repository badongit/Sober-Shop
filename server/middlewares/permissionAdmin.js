
const permissionAdmin = (req, res, next) => {
    if(req.role !== 'user')
        return next(new ErrorResponse(400, 'No have access'));
    
    next();
}

module.exports = permissionAdmin;