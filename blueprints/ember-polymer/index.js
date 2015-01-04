/* global module */

module.exports = {
  afterInstall: function() {
    var self = this;
    // this.addPackageToProject("broccoli-vulcanize", "^1.0.4");
    return this.addPackagesToProject([
      // { name: "broccoli-vulcanize", target: "^1.0.4" }
    ]).then(function() {
      return self.addBowerPackagesToProject([
        { name: "Polymer/polymer", target: "~0.5.2" },
        { name: "Polymer/core-elements", target: "~0.5.2" },
        { name: "Polymer/paper-elements", target: "~0.5.2" }
      ]);
    });

  },

  normalizeEntityName: function() {}
};
