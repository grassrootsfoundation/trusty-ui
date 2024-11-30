import 'postcss-functions';
import 'postcss-custom-properties';

const hexa = (hex, alpha) => {
	if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) return hex;
	let hexValue = hex.slice(1);
	if (hexValue.length === 3) {
		hexValue = hexValue
			.split('')
			.map((c) => c + c)
			.join('');
	}
	const alphaHex = Math.round(alpha * 255)
		.toString(16)
		.padStart(2, '0');
	console.log(`#${hexValue}${alphaHex}`);
	return `#${hexValue}${alphaHex}`;
};

export default {
	plugins: {
		// Required for custom-media rules to transpile
		'@csstools/postcss-global-data': {
			files: ['./src/public/global.css']
		},
		'postcss-functions': {
			functions: { hexa }
		},
		'postcss-preset-env': {
			features: {
				'color-mix': true
			}
		},
		autoprefixer: {}
	}
};
