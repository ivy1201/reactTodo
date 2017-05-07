'use strict';
var path = require('path');

module.exports = {
    entry: [
        "./src/entry.js"
    ],
    output: {
        path: path.join(__dirname,'/dist/'),
        filename: "bundle.js"
    },
    externals: {
        'react': 'React'
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loader: "babel-loader", 
                include: /src/, 
                exclude: /node_modules/,    
                query: {
                    presets: ["react","stage-3"]
                }  
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader"
            },
            { 
                test: /\.scss$/, 
                loader: "style-loader!css-loader!sass-loader"
            },
        ]
    }
};
