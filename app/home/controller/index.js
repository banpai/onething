'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _stringify = require('babel-runtime/core-js/json/stringify');var _stringify2 = _interopRequireDefault(_stringify);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}




  /**
   * index action
   * @return {Promise} []
   */_class.prototype.
  indexAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
      data, 



      xx, 





      n;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this.model('user').select();case 2:data = _context.sent; //auto render template file index_index.html
              // return this.success("haha");
              // let m = this.success(data);
              xx = (0, _stringify2.default)(data);this.assign({ title: "banpai", css: "index", js: "index" });n = this.display();return _context.abrupt('return', n);case 7:case 'end':return _context.stop();}}}, _callee, this);}));return function indexAction() {return ref.apply(this, arguments);};}();_class.prototype.
  moreAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 
      data;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this.model('user').select();case 2:data = _context2.sent;return _context2.abrupt('return', 
              this.success(data));case 4:case 'end':return _context2.stop();}}}, _callee2, this);}));return function moreAction() {return ref.apply(this, arguments);};}();_class.prototype.


  ppAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {var 
      data;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this.model('user').select();case 2:data = _context3.sent;return _context3.abrupt('return', 
              this.end(data));case 4:case 'end':return _context3.stop();}}}, _callee3, this);}));return function ppAction() {return ref.apply(this, arguments);};}();_class.prototype.


  addAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {var 
      num, 

      banpai, 


      data, 
      result;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:num = this.post('id');console.log(num);banpai = { banpai: 11 };_context4.next = 5;return this.model('user').select();case 5:data = _context4.sent;_context4.next = 8;return this.model('user').add({ banpai: num });case 8:result = _context4.sent;
              this.success(data);case 10:case 'end':return _context4.stop();}}}, _callee4, this);}));return function addAction() {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;