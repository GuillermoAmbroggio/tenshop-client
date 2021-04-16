const DevelopmentConfig = {
  API_URL: "http://localhost:8000",
};

const ProdConfig = {
  API_URL: "https://tenshop-api.herokuapp.com",
};

const getConfig = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return DevelopmentConfig;
    case "production":
      return ProdConfig;
    default:
      return ProdConfig;
  }
};

export default getConfig();
