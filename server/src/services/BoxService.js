const BoxRepository = require("../repositories/BoxRepository");

/**
 * BoxService
 * 负责盲盒业务逻辑
 */
class BoxService {
  constructor() {
    this.boxRepository = new BoxRepository();
  }

  /**
   * 获取所有盲盒
   */
  async getAllBoxes() {
    return this.boxRepository.findAll();
  }

  /**
   * 获取热门盲盒
   */
  async getHotBoxes() {
    return this.boxRepository.findHot();
  }
}

module.exports = BoxService; 