const path = require('path')
module.exports = {
	// 公共路径(必须有的)
	publicPath: './',
	// 输出文件目录
	outputDir: 'dist',
	// 静态资源存放的文件夹(相对于ouputDir)
	assetsDir: 'static',
	productionSourceMap: false,
	devServer: {
		proxy: {
			[process.env.VUE_APP_BASE_API]: {
				target: 'http://192.168.1.8:8012/public/index.php/',
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.VUE_APP_BASE_API]: '',
				},
			},
		},
	},
}
