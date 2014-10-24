/*!
 * mira - lib/prompts.js
 * Copyright(c) 2014 Dilan Mckey
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */


module.exports = {
  template: template,
  appName: appName
};

function template () {
  return [{
    type: 'list',
    name: 'app',
    message: 'Choice template',
    choices: [ "Light", "Simple", 'Pro' ]
  }];
}
function appName () {
  return [{
    type: 'input',
    name: 'appName',
    message: 'Project name:'
  }];
}
