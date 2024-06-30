import { defineConfig } from '@rsbuild/core';
import { pluginYaml } from '../src';

export default defineConfig({
	plugins: [pluginYaml()],
});
