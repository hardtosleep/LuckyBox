const Box = require("../models/Box");

/**
 * BoxRepository
 * 负责盲盒数据访问
 */
class BoxRepository {
  /**
   * 查询所有盲盒
   */
  async findAll() {
    return Box.findAll();
  }

  /**
   * 查询热门盲盒
   */
  async findHot() {
    return Box.findAll({ where: { isHot: true } });
  }
}

module.exports = BoxRepository; 