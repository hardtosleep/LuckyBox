const BoxService = require("../services/BoxService");

/**
 * BoxController
 * 处理盲盒相关的请求
 */
class BoxController {
  constructor() {
    this.boxService = new BoxService();
  }

  /**
   * 获取所有盲盒
   */
  async getAllBoxes(req, res) {
    const boxes = await this.boxService.getAllBoxes();
    res.json(boxes);
  }

  /**
   * 获取热门盲盒
   */
  async getHotBoxes(req, res) {
    const boxes = await this.boxService.getHotBoxes();
    res.json(boxes);
  }
}

module.exports = new BoxController(); 