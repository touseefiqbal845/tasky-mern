const {  userRoutes } = require("../routes");


const routesLoader = (app) => {
  app.use("/api/auth/users", userRoutes); 
  
  console.log("Routes have been loaded.");
};

module.exports = routesLoader;
