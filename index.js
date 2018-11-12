'use strict';
const DeployPluginBase = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-circleci-revision',

  createDeployPlugin(options) {
    const DeployPlugin = DeployPluginBase.extend({
      name: options.name,
      defaultConfig: {
        separator: '_'
      },

      didPrepare(context) {
        let revisionData = context.revisionData || {};
        let revisionKey = revisionData.revisionKey || "";
        let circleBuild = process.env.CIRCLE_BUILD_NUM;
        let separator = this.readConfig('separator');

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
