'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
   async indexAction(){
     let data = await this.model('user').select();
     //auto render template file index_index.html
     // return this.success("haha");
     // let m = this.success(data);
     var xx = JSON.stringify(data);
     this.assign({
       title: "banpai",
       css: "index",
       js:"index"
     });
     let n = this.display();
     return n;
   }

   async moreAction() {
     let data = await this.model('user').select();
     return this.success(data);
   }

   async ppAction() {
     let data = await this.model('user').select();
     return this.end(data);
   }

   async addAction(){
     var num = this.post('id');
     console.log(num);
     let banpai = {
       banpai: 11
     }
     let data = await this.model('user').select();
     let result = await this.model('user').add({banpai:num});
     this.success(data);
   }
}
