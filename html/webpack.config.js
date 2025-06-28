const Path = require("path");
const Webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Correct plugin name
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Handlebars = require("handlebars");

const opts = {
  rootDir: process.cwd(),
  devBuild: process.env.NODE_ENV !== "production"
};

module.exports = {
  // core directory
  entry: {
    'app': "./src/assets/js/app.js", // Ensure this file exists in src/assets/js/
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
  output: {
    path: Path.join(opts.rootDir, "dist"),
    pathinfo: opts.devBuild,
    filename: "assets/js/[name].js",
    chunkFilename: 'assets/js/[name].js',
  },
  performance: { hints: false },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5
        }
      }),
      new CssMinimizerPlugin({})
    ],
    runtimeChunk: false
  },
  plugins: [
    // Extract css files to separate bundle
    new MiniCssExtractPlugin({
      filename: "assets/css/app.css",
      chunkFilename: "assets/css/app.css"
    }),

    // Set signup.html as the default page
    new HtmlWebpackPlugin({
      filename: "index.html", // Default entry point
      template: "!!html-webpack-plugin/lib/loader.js!./src/pages/signup.html",
      inject: true,
      minify: false,
      hash: true,
      title: "Signup"
    }),

    // Keep login.html
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-login.html",
      inject: true,
      minify: false,
      hash: true,
      title: "Login"
    }),

    // Copy fonts and images to dist
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets/img", to: "assets/img" },
        { from: "src/assets/js/component", to: "assets/js/component" },
        { from: "src/assets/js/investment", to: "assets/js/investment" },
        // demo pages
        // { from: "src/pages", to: "" },
      ]
    }),

    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    // Comment out or remove unwanted pages
    // new HtmlWebpackPlugin({ filename: "page-not-found.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/page-not-found.html", inject: true, minify: false, hash: true, title: "Error 404" }),
    // new HtmlWebpackPlugin({ filename: "page-not-found-2.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/page-not-found-2.html", inject: true, minify: false, hash: true, title: "Error 404" }),
    // new HtmlWebpackPlugin({ filename: "page-not-found-3.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/page-not-found-3.html", inject: true, minify: false, hash: true, title: "Error 404" }),
    // new HtmlWebpackPlugin({ filename: "under-construction.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/under-construction.html", inject: true, minify: false, hash: true, title: "Under Construction" }),
    // new HtmlWebpackPlugin({ filename: "coming-soon.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/coming-soon.html", inject: true, minify: false, hash: true, title: "Coming Soon" }),
    // new HtmlWebpackPlugin({ filename: "investment-aboutus.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-aboutus.html", inject: true, minify: false, hash: true, title: "investment-aboutus" }),
    // ... (comment out other investment and component pages unless needed)
    // new HtmlWebpackPlugin({ filename: "documentation.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/documentation.html", inject: true, title: "Document" }),
  ],
  module: {
    rules: [
      // Babel-loader
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      // Css-loader & sass-loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, // Corrected from MiniCssInjectPlugin.loader
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },

      // Load fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]"
        }
      },

      // Load images
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext]"
        }
      },

      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        use: {
          loader: "html-loader",
          options: {
            sources: false,
            minimize: false
          }
        }
      },
    ]
  },
  resolve: {
    extensions: [".js", ".scss"],
    modules: ["node_modules"],
    alias: {
      request$: "xhr"
    }
  },
  devServer: {
    static: {
      directory: Path.join(__dirname, "dist")
    },
    port: 8080,
    open: true,
  }
};