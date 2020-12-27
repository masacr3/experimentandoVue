const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : './src/index',
    output:{
        path : __dirname + '/dist',
        filename : 'bundle.js'
    },
    resolve :{
        alias : {
            'vue$' : 'vue/dist/vue.esm.js'
        },
        extensions:['*','.js','.vue','.json']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.vue$/,
                use:[
                    { loader : 'vue-loader'}
                ]
            },
            {
                test:/\.css$/,
                use:[
                    { loader : 'style-loader'},
                    { loader : 'css-loader',
                        options:{
                            modules: false
                        }
                    },
                    { loader : 'sass-loader' }
                ]
            },
            {
                test:/\.(png|jpg?g|gif)$/i,
                use :[
                    { loader : 'file-loader',
                        options:{
                            name :'[name].[ext]',
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(), new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]

}