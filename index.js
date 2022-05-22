module.exports = {
    "opts": {
      "destination": "./documentation/",
      "encoding": "utf8",
      "recurse": true,
      "template": "./node_modules/minami",
      "verbose": true
    },
    "plugins": [
      "plugins/markdown"
    ],
    "recurseDepth": 10,
    "source": {
      "exclude": ["node_modules", "dist", "coverage", "test"],
      "excludePattern": "(node_modules/|documentation)",
      "include": ["src", "README.md"],
      "includePattern": ".js$"
    },
    "tags": {
      "allowUnknownTags": true,
      "dictionaries": ["jsdoc"]
    },
    "templates": {
      "cleverLinks": false,
      "monospaceLinks": true,
      "showInheritedInNav": true,
      "useLongnameInNav": false
    }
};
