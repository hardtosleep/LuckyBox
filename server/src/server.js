const app = require("./app");
const sequelize = require("./config/db");

/**
 * 启动服务
 */
const PORT = 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}); 