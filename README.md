ember-polymer
=============

ℹ️ **This is repo is unmaintained.** To use Ember with Polymer, you can use this addon:

https://github.com/dunnkers/ember-polymer

## Installation
`ember generate ember-polymer`

## Usage

Create app/elements.html and load all polymer elements inside of it:

````html
<!--
This file belongs at app/elements.html. Loads the polymer elements as a single file, rather than a bunch of individual link requests.

You can customize the elements loaded here if you don't need certain things or want to add your own custom elements.
-->

<link rel="import" href="../bower_components/font-roboto/roboto.html">
<link rel="import" href="../bower_components/core-header-panel/core-header-panel.html">
<link rel="import" href="../bower_components/core-toolbar/core-toolbar.html">
<link rel="import" href="../bower_components/paper-tabs/paper-tabs.html">

<!-- local custom polymer component -->
<link rel="import" href="post-card.html">

````

## Example
See [ember-polymer-example](https://github.com/inigo-llc/ember-polymer-example)

## Contributing

* `git clone https://github.com/inigo-llc/ember-polymer.git`
* `cd ember-polymer`
* `npm install`
* `bower install`
* ...

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
