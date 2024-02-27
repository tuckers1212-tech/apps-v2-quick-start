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

Each extension can be ran individually:

-   `npm run dev admin-settings`
-   `npm run dev user-settings`
-   `npm run dev experience`

## Build & Bundle

To build and bundle your App, run this command in the **root folder**: `npm run build && npm run bundle`.

This generates a Showpad package you can upload to the Showpad platform 🚀
