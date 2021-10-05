// this 'path' and 'require' module is in nodejs and since webpack runs in nodejs we can use this 'path' module.
const path = require('path') 
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = {
    entry: './src/index.js', // relative file name
    output: {
        // 'path' property requires an absolute path
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    // here through module/loader we are instructing webpack to apply these loader on each js file it encounters
    // through entry.
    module:{ // module is referred as loader in webpack-1
        // in rules we will set our loaders in this array
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/ // regex expression which tells babel to only apply to files having .js extention
            // after loading babel will look for .babelrc file and will apply the set of rules written in the
            // library given in "preset" property of .babelrc file's object. Note that these rules will only
            // be applied to the js files since we have specfically mentioned the file extension inside "test"
            // property.
            },
            {
                //use: ['style-loader','css-loader'], {"use" and "loader" are same in webpack world}
                // we will be using loader because of the way extractTextPlugin is written
                // this plugin will take whatever is being generated by css-loader and will put it in a seperate
                // output files.
                loader:ExtractTextPlugin.extract({
                    loader:'css-loader'
                }),
                test: /\.css$/
            },
            {   // type of images loader to handle
                test: /\.(jpe?g|png|gif|svg)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {limit: 40000} 
                        // limit is for distinguishing the size of img, if img is larger than 40000 then
                        // img will get put in an output file, else it will get included in bundle.js
                    },
                     'image-webpack-loader'] // here image-webpack-loader is applied first

            }
        ]
    },
    plugins:[
        // this is the output file at which the output of css-loader will placed
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;