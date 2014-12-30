/* jshint node: true */
// 'use strict';

var pickFiles   = require('broccoli-static-compiler'),
    vulcanize = require('broccoli-vulcanize');

module.exports = {
  name: 'ember-polymer',

  postprocessTree: function(type, tree) {
    if (!tree) {
      return tree;
    }

    var polymerVulcanize = vulcanize('app', {
      input: 'elements.html',
      output: '/assets/vulcanized.html',
      csp: true,
      inline: true,
      strip: false,
      excludes: {
        imports: ["(^data:)|(^http[s]?:)|(^\/)"],
        scripts: ["(^data:)|(^http[s]?:)|(^\/)"],
        styles: ["(^data:)|(^http[s]?:)|(^\/)"]
      }
    });

    var polymer = pickFiles('bower_components/', {
      srcDir: '',
      files: [
      'webcomponentsjs/webcomponents.js',
      'polymer/polymer.js',
      'polymer/polymer.html'
      ],
      destDir: '/assets'
    });

    return this.mergeTrees([polymerVulcanize, polymer, tree]);
  }
};
