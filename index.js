'use strict';
const DeployPluginBase = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-circleci-revision',

  createDeployPlugin(options) {
    const DeployPlugin = DeployPluginBase.extend({
      name: options.name,
      defaultConfig: {
        buildVariable: "CIRCLE_BUILD_NUM",
        separator: '_'
      },

      didPrepare(context) {
        let revisionData = context.revisionData || {};
        let revisionKey = revisionData.revisionKey || "";
        let separator = this.readConfig('separator');
        let buildVariable = this.readConfig('buildVariable');
        let circleBuild = process.env[buildVariable];

        if (isFinite(circleBuild)) {
            revisionData.revisionKey = revisionKey + separator + circleBuild;
            context.revisionData = revisionData;
        }

        return {
            circleCIRevisionAppended: true
        };
      }
    });

    return new DeployPlugin();
  }
};
