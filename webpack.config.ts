import path from "path"
import { Configuration as DefaulConfiguration } from "webpack"
import { Configuration as DevConfiguration } from "webpack-dev-server"
import HtmlWebpackPlugin from "html-webpack-plugin"
import sass from "sass"

type Configuration = DefaulConfiguration & DevConfiguration

const conf: Configuration = {
  entry: "./src/bootstrap.tsx",
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  cache: false,
  experiments: {
    cacheUnaffected: false,
    topLevelAwait: true,
  },

  module: {
    rules: [
      // Rules for Typescript and TSX

      // I use ts-loader because I don't want to transpile my code to ES5 Code, I like the new way
      { test: /\.tsx?$/, loader: "ts-loader" },

      { test: /\.(css|scss)$/, use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 2,
            modules: true
          }
        },
        "postcss-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: sass
          }
        }
      ]},
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  devServer: {
    hot: true,
    liveReload: true,
    compress: true,
    port: 7000,
    static: {
      directory: path.join(__dirname, "public")
    },
    historyApiFallback: true,
    watchFiles: {
      paths: ["src/**/*"]
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true
      },
      base: "/",
      meta: {
        "viewport": "width=device-width, initial-scale=1.0",
      },
      templateContent: ({ htmlWebpackPlugin }) => `
        <html>
          <head>
            <title>Project 1</title>
            <link rel="shortcut icon" type="image/jpg" href="/images/favicon.png"/>
          </head>
          <body>
            <noscript>You must have Javascript enabled to open our webpage</noscript>
            <div id="root"></div>
            ${htmlWebpackPlugin.tags.bodyTags}
          </body>
        </html>
      `,
      scriptLoading: "defer",
      hash: true,
      inject: "body",
      title: "Portfolio",
      filename: "index.html"
    })
  ]
}


export default conf