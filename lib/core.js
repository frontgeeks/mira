/*!
 * mira - lib/core.js
 * Copyright(c) 2014 Dilan Mckey
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */


module.exports = {
  getTemplateName: getTemplateName,
  getAppName: getAppName
};

var templateName, appName,
    inquirer = require('inquirer'),
    prompts = require('./prompts.js'),
    miraStructure = require('mira-structure');

function getTemplateName () {
  inquirer.prompt(prompts.template(), function( answers ) {
    templateName = answers.app;
    getAppName()
  });
}
function getAppName () {
  inquirer.prompt(prompts.appName(), function( answers ) {
    appName = answers.appName || 'Myapp';
  });
}

function createApp (templateName,appName) {
  miraStructure.getTemplate(templateName, appName)
}
