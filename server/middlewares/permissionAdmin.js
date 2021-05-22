
const permissionAdmin = (req, res, next) => {
    if(req.role !== 'admin')
        return next(new ErrorResponse(400, 'No have access'));
    
    next();
}

module.exports = permissionAdmin;
