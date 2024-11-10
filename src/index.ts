import { join } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { RsbuildPlugin } from '@rsbuild/core';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const PLUGIN_YAML_NAME = 'rsbuild:yaml';

export const pluginYaml = (): RsbuildPlugin => ({
	name: PLUGIN_YAML_NAME,

	setup(api) {
		api.modifyBundlerChain((chain) => {
			chain.module
				.rule('yaml')
				.type('javascript/auto')
				.test(/\.ya?ml$/)
				.use('yaml')
				.loader(join(__dirname, '../compiled', 'yaml-loader'));
		});
	},
});
