/*!
 * mira - lib/mira.js
 * Copyright(c) 2014 Dilan Mckey
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */


var core = require('./core'),
    program = require('commander'),
    hello = require('./hello');

program.parse(process.argv);

if(program.args[0] == 'app') {
  if(program.args[1]){
    core.getAppName()
  } else {
    core.getTemplateName()
  }
}

