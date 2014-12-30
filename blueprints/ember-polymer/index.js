/* global module */

module.exports = {
  afterInstall: function() {
    // this.addPackageToProject("broccoli-static-compiler", "^0.2.1");
    // this.addPackageToProject("broccoli-vulcanize", "^1.0.4");

    return this.addBowerPackagesToProject([
      { name: "Polymer/polymer", target: "~0.5.2" },
      { name: "Polymer/core-elements", target: "~0.5.2" },
      { name: "Polymer/paper-elements", target: "~0.5.2" }
    ]);
  },

  normalizeEntityName: function() {}
};
