/*!
 * mira - lib/mira.js
 * Copyright(c) 2014 Dilan Mckey
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */
var inquirer = require('inquirer');

console.log('mira connect');

var miraStructure = require('mira-structure');
//miraStructure.getTemplate('Simple', 'Myapp')


var ac = require('argchecker').check({
   expect: {
     "app": {}
   }
});

var prompts = [{
  type: 'list',
  name: 'app',
  message: 'Create empty project?',
  choices: [ "Simple", "Mario" ]
}];



if (ac.isOn('app')) {
console.log('Create app');
  inquirer.prompt(prompts, function( answers ) {
    var templateName = answers.app
    inquirer.prompt({
      type: 'input',
      name: 'appName',
      message: 'Project name:'
    }, function( answers ) {
      var appName = answers.appName || 'Myapp';
      createApp(templateName,appName);
    });
  });
}

function createApp (templateName,appName) {
  miraStructure.getTemplate(templateName, appName)
}
