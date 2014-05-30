/**
 * Created by ciprian on 5/30/14.
 */
var jy = require('js-yaml');
var fs = require('fs');
var path = require('path');
var yaml = String(fs.readFileSync(path.join(__dirname, '../package.yaml')));
var package = jy.safeLoad(yaml);
fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(package, null, 2));
