module.exports = {
	name: 'assignments-web',
  version: '0.0.0',
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,
	base_url: process.env.BASE_URL || 'http://localhost:3000',
  api_url: 'http://localhost:3001/assignments',
};
