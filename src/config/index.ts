const config = {
  get serverPort() {
    return process.env.PORT ?? 8080;
  },
  get mongoDbUrl() {
    return process.env.MONGODB_URL;
  },
};

export { config };