export default {
	plugins: {
		'postcss-import': {},
		'postcss-nested': {},
		'postcss-preset-env': {
			features: {
				'color-mix': true
			}
		},
		autoprefixer: {},
		cssnano: {}
	}
};
