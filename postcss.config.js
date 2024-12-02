export default {
	plugins: {
		'@csstools/postcss-global-data': {
			files: ['./src/public/css/_media.css']
		},
		'postcss-preset-env': {
			features: {
				'color-mix': true
			}
		},
		autoprefixer: {}
	}
};
