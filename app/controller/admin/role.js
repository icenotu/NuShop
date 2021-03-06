'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async index() {
    this.ctx.body = '角色管理';
  }
  async add() {
    this.ctx.body = '角色增加';
  }
  async edit() {
    this.ctx.body = '角色编辑';
  }
  async delete() {
    this.ctx.body = '角色删除';
  }
}

module.exports = RoleController;
