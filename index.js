/* jshint node: true */
// 'use strict';

var vulcanize = require('broccoli-vulcanize');

module.exports = {
  name: 'ember-polymer',

  contentFor: function(type, config) {
    if (type === 'head') {
      return [
        '<script src="assets/webcomponentsjs/webcomponents.js"></script>',
        '<link rel="import" href="assets/vulcanized.html">'
      ];
    }
  },

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

    var polymer = this.pickFiles('bower_components/', {
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
