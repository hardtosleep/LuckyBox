const { Sequelize } = require("sequelize");

/**
 * 数据库连接配置（SQLite）
 */
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./lucky_box.sqlite", // 数据库存储文件
  logging: false,
});

module.exports = sequelize; 