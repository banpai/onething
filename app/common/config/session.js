'use strict';

/**
 * session configs
 */exports.__esModule = true;exports.default = 
{ 
  name: 'thinkjs', 
  type: 'file', 
  secret: '#*E@8B!H', 
  timeout: 24 * 3600, 
  cookie: { // cookie options
    length: 32, 
    httponly: true }, 

  adapter: { 
    file: { 
      path: think.RUNTIME_PATH + '/session' } } };