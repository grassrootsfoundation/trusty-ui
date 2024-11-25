export default {
	plugins: {
		// Required for custom-media rules to transpile
		'@csstools/postcss-global-data': {
			files: ['./src/public/global.css']
		},
		'postcss-preset-env': {
			features: {
				'color-mix': true
			}
		},
		autoprefixer: {}
	}
};
