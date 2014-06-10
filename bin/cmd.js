#!/usr/bin/env node
"use strict";
var argv = require('minimist')(process.argv.slice(2));
var lib = require('../lib');

console.log('argv:', argv);
console.log('lib:', lib);

process.exit(0);
