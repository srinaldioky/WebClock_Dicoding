const ConsoleLogOnBuildWebpackPlugin = require("./console-log-on-build-webpack-plugin.js");
 
module.exports = {
    plugins: [
    new ConsoleLogOnBuildWebpackPlugin({
        message: "The webpack build process is starting!"
    })
    ]
}