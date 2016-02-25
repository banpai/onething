'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    this.assign({
      title: "markdown",
      css: "test",
      js:"test"
    });
    return this.display('test');
  }
}
