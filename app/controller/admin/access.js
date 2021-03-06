'use strict';

const Controller = require('egg').Controller;

class AccessController extends Controller {
  async index() {
    this.ctx.body = '权限管理';
  }
  async add() {
    this.ctx.body = '权限增加';
  }
  async edit() {
    this.ctx.body = '权限编辑';
  }
  async delete() {
    this.ctx.body = '权限删除';
  }
}

module.exports = AccessController;
