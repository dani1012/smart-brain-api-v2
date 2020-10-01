const redisClient = require('./signin').redisClient;

//try to block the request going further unless there is a valid token in request
const requireAuth = (req, res, next) => {
	const {authorization} = req.headers;
	if(!authorization) {
		return res.status(401).json('unauthorized')
	}
	return redisClient.get(authorization, (err,value) => {
      if (err || !value ) {
        return res.status(401).json('unauthorized');
      }
      console.log('you shall pass the requireAuth')
      return next();
  	})
 }

 
 
 module.exports = {
    requireAuth: requireAuth
}