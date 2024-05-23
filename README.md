# vite-plugin-mpa-support
vite-plugin-mpa-support is a Vite plugin that provides support for Multi-Page Applications (MPA). This plugin automatically finds all HTML files in a specified directory and sets them as entry points for Vite's build process.

## Installation
To install this plugin, you can use npm or yarn:

```bash
npm install vite-plugin-mpa-support --save-dev

# or

yarn add vite-plugin-mpa-support --dev
```

## Usage
First, import the plugin in your Vite configuration file (e.g., vite.config.js or vite.config.ts).

```javascript
import { defineConfig } from 'vite';
import mpaPlugin from 'vite-plugin-mpa-support';

export default defineConfig({
  plugins: [mpaPlugin()],
});
```

## Parameters
directory (optional): The directory where your HTML files are located. Default is "./".

## Example
Assume you have the following project structure:

```
my-project
│
├── index.html
├── about.html
└── contact.html
├── vite.config.js
└── package.json
```
In your vite.config.js, you can configure the plugin as follows:

```javascript
import { defineConfig } from 'vite';
import mpaPlugin from 'vite-plugin-mpa-support';

export default defineConfig({
  plugins: [mpaPlugin()],
});
```
When you run the build command, the plugin will automatically find all HTML files in the specified directory and set them as entry points:

index.html
about.html
contact.html

## Recommendation
For better usage, it is recommended to place your HTML files in the root directory (./). Because vite dev server does not provide routing.

## How It Works
Finding HTML Files: The findHTMLFiles function reads the specified directory and filters out all files that end with .html.
Setting Entry Points: The mpaPlugin function sets these HTML files as entry points in Vite's Rollup configuration during the build process.


## Contributing
If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository.

This README provides a clear and concise explanation of how to use your plugin, including installation, configuration, and an example. Feel free to customize it further to better suit your needs!
