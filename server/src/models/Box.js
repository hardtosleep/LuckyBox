const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

/**
 * Box 盲盒模型
 */
class Box extends Model {}

Box.init(
  {
    name: { type: DataTypes.STRING, allowNull: false, comment: "盲盒名称" },
    image: { type: DataTypes.STRING, comment: "盲盒图片" },
    description: { type: DataTypes.TEXT, comment: "盲盒描述" },
    isHot: { type: DataTypes.BOOLEAN, defaultValue: false, comment: "是否热门" },
  },
  {
    sequelize,
    modelName: "Box",
    tableName: "boxes",
    timestamps: true,
    comment: "盲盒表",
  }
);

module.exports = Box; 