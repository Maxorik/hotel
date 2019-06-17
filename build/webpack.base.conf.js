const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {
    externals:{
      paths: PATHS
    },
    entry:{
        app: PATHS.src
    },
    output:{
        filename:`${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    
    module:{
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },{
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                    pretty: true
            }
        },{
            test: /\.(png|jpg|svg|gif)$/,
            loader: 'file-loader',
            options: {
                pretty: true,
                name: '[name].[ext]'
            }
        },{
            test: /\.(woff|woff2|ttf|eof)$/,
            use: ['file-loader', 'file-loader?name=fonts/[name].[ext]']
        },
            {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options:{ sourceMap: true }
                },
                {
                    loader: 'postcss-loader',
                    options:{ sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
                },
                {
                    loader: 'sass-loader',
                    options:{ sourceMap: true }
                }
            ]
        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options:{ sourceMap: true }
                },
                {
                    loader: 'postcss-loader',
                    options:{ sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
                },
                {
                    loader: 'sass-loader',
                    options:{ sourceMap: true }
                }
            ]
        }
        ]
    },
    
    
    plugins:[
        new MiniCssExtractPlugin({
            filename:`${PATHS.assets}css/[name].css`
        }),
        
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/pug/index.pug`,
        }),
        
        new CopyWebpackPlugin([
            { from:`${PATHS.src}/img`, to:`${PATHS.assets}img` },
            { from:`${PATHS.src}/static`, to:'' }
        ])
    ]
    
}