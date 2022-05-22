module.exports = {
  "source": {
    "includePattern": ".+\\.js(doc|x)?$",
    "include": "./src/**/*.js"
    "exclude": ["node_modules", "dist", "coverage", "test"]
  },
  "recurseDepth": 10,
  "opts": {
    "destination": "./docs/",
    "recurse": true
  }
};
