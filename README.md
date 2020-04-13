# ember-cli-deploy-circleci-revision

> An ember-cli-deploy plugin to add the CircleCI build number to the key generated from [ember-cli-deploy-revision-data](https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data). It reads the `revisionKey` variable added by [ember-cli-deploy-revision-data](https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data) and append proper CircleCI build number if possible.

## What is an ember-cli-deploy plugin?

A plugin is an addon that can be executed as a part of the ember-cli-deploy pipeline. A plugin will implement one or more of the ember-cli-deploy's pipeline hooks.

For more information on what plugins are and how they work, please refer to the [Plugin Documentation][1].

## Quick Start
To get up and running quickly, do the following:

- Ensure [ember-cli-deploy-revision-data][2] is installed and configured

- Install this plugin


## Installation
Run the following command in your terminal:

```bash
ember install ember-cli-deploy-circleci-revision
```

## ember-cli-deploy Hooks Implemented

For detailed information on what plugin hooks are and how they work, please refer to the [Plugin Documentation][1].

- `prepare`

## Configuration Options

For detailed information on how configuration of plugins works, please refer to the [Plugin Documentation][1].

### Defaults
```
ENV["circleci-revision"] = {
  buildVariable: "CIRCLE_BUILD_NUM",
  separator: '_'
}
```
The `buildVariable` specifies the environement variable to use to extract the build number. This can be useful if you want your build number to be externally supplied, say from a parent task.
## Prerequisites

The following property is expected to be present on the deployment `context` object:

- `revisionKey` (provided by [ember-cli-deploy-revision-data][2])


[1]: http://ember-cli-deploy.com/ "Plugin Documentation"
[2]: https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data "ember-cli-deploy-revision-data"
[3]: https://github.com/ember-cli-deploy/ember-cli-deploy-build "ember-cli-deploy-build"
[4]: https://github.com/ember-cli/ember-cli-deploy "ember-cli-deploy"
