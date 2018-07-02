Set up by Ben Awad and tweaked for betterment:

1) yarn add --dev babel-cli babel-preset-env babel-preset-stage-0
=> so you can use import...

2) eslint --init
3) finally add extra command from eslint-config-airbnb:
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)

4) don't forget to add scripts in your package.json fine
  "scripts": {
    "start": "nodemon --exec babel-node index.js"
  },

5) set .babelrc file:
{
  "presets": [
    "env",
    "stage-0"
  ]
}

For full-stack setting;
set scripts like this,
  "scripts": {
    "client-install": "yarn install --prefix client",
    "start": "nodemon --exec babel-node server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm start\" \"npm run client\""
  },

  "client-install",
  when it's cloned down, this enable install the package in client folder