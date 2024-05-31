# Quickstart App

This App can be used as a template to develop Showpad Apps as described in this tutorial:
[5min Quick Start App](https://docs.api.showpad.com/docs/appsv2/tutorials/5min-quick-start)

It can also be used to test the extensions you're developing locally.

It contains 3 extensions:

-   Admin settings: enables the admins to setup an App.
-   User settings: enables the sellers to select their preferences.
-   Experience: enables the sellers to interact with the buyers.

## Develop

Install the dependencies: `npm i`

Each extension can be ran individually. In order to test your local changes please refer to these articles:

-   [Test your Admin Settings extension](https://docs.api.showpad.com/docs/appsv2/tutorials/advanced-team-activities#test-extension)
-   [Test your User Settings extension](https://docs.api.showpad.com/docs/appsv2/tutorials/advanced-team-activities#test-extension-1)
-   [Test your Experience Type extension](https://docs.api.showpad.com/docs/appsv2/tutorials/advanced-team-activities#test-extension-2)

## Build & Bundle

To build and bundle your App, run this command in the **root folder**: `npm run build && npm run bundle`.

This generates a Showpad package you can upload to the Showpad platform 🚀
