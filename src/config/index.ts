const config = {
  get serverPort() {
    return process.env.PORT ?? 8080;
  },
  get mongoDbUrl() {    
    return process.env.mongoDbUrl;
  },
  get jwtSecretKey(){
    return process.env.JWT_AUTHTOKEN;
  },
  get jwtExpiresIn(){
    return process.env.JWT_EXPIRES_IN;
  },
  get cookieExpire(){
    return process.env.COOKIE_EXPIRES;
  }
};

export { config };