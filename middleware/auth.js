const jwt = require('jsonwebtoken');
const config = require('config');

const getTokenFromHeader = req => {
	const xauthToken = req.header('x-auth-token');
	if (xauthToken) return xauthToken;

	const bearerToken = req.header('Authorization');
	if (bearerToken.split(' ')[0] === 'Bearer') return bearerToken.split(' ')[1];

	return false;
};

module.exports = async (req, res, next) => {
	// Get token from header
	const token = getTokenFromHeader(req);

	// Check if not token
	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}

	// Verify token
	try {
		await jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
			if (error) {
				res.status(401).json({ msg: 'Token is not valid' });
			} else {
				req.user = decoded;
				next();
			}
		});
	} catch (err) {
		console.error('something wrong with auth middleware');
		res.status(500).json({ msg: 'Server Error' });
	}
};
