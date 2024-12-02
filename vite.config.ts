import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
	plugins: [svelte()],
	build: {
		lib: {
			entry: path.resolve(__dirname, './src/index.ts'),
			name: 'TrustyUI',
			formats: ['es', 'umd'],
			fileName: (format) => `trusty-ui.${format}.js`
		},
		rollupOptions: {
			external: ['svelte'],
			output: {
				globals: {
					svelte: 'Svelte'
				}
			}
		}
	},
	resolve: {
		// alias: {
		// 	$src: path.resolve(__dirname, './src'),
		// 	$utils: path.resolve(__dirname, './utils'),
		// 	$components: path.resolve(__dirname, './src/components')
		// }
		alias: {
			$src: '/src',
			$lib: '/src/lib',
			$utils: '/utils',
			$components: '/src/components',
			$types: '/src/types'
		}
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./test/setup-test-env.ts'],
		mockReset: true,
		coverage: {
			exclude: ['**/{mocks,__fixtures__,__tests__,coverage}/**', '**/types.ts']
		}
	}
});
