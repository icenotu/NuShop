'use strict';

const Controller = require('egg').Controller;

class ManagerController extends Controller {
  async index() {
    await this.ctx.render('admin/manager/index',{
      username:'chrisYoung',
    });
  }
  async add() {
    this.ctx.body = '管理员增加';
  }
  async edit() {
    this.ctx.body = '管理员编辑';
  }
  async delete() {
    this.ctx.body = '管理员删除';
  }
}

module.exports = ManagerController;

