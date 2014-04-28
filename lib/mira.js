/*!
 * mira - lib/mira.js
 * Copyright(c) 2014 Dilan Mckey
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

console.log('Mira connect');
var inquirer = require('inquirer'),
    miraStructure = require('mira-structure'),
    prompts = require('./prompts.js'),
    ac = require('argchecker').check({
   expect: {
     "app": {}
   }
});

if (ac.isOn('app')) {
  var templateName, appName;
  inquirer.prompt(prompts.template(), function( answers ) {
    templateName = answers.app;
    inquirer.prompt(prompts.appName(), function( answers ) {
      appName = answers.appName || 'Myapp';
      createApp(templateName,appName);
    });
  });
} else {
  console.log('For create you app, puts - "mira app"');
}

function createApp (templateName,appName) {
  miraStructure.getTemplate(templateName, appName)
}
