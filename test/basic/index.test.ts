import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect, test } from '@playwright/test';
import { createRsbuild } from '@rsbuild/core';
import { pluginYaml } from '../../dist';

const __dirname = dirname(fileURLToPath(import.meta.url));

test('should render page as expected', async ({ page }) => {
	const rsbuild = await createRsbuild({
		cwd: __dirname,
		rsbuildConfig: {
			plugins: [pluginYaml()],
		},
	});

	const { server, urls } = await rsbuild.startDevServer();

	await page.goto(urls[0]);
	expect(await page.evaluate('window.age')).toBe(1);
	expect(await page.evaluate('window.b')).toBe('{"list":[1,2]}');

	await server.close();
});

test('should build succeed', async ({ page }) => {
	const rsbuild = await createRsbuild({
		cwd: __dirname,
		rsbuildConfig: {
			plugins: [pluginYaml()],
		},
	});

	await rsbuild.build();
	const { server, urls } = await rsbuild.preview();

	await page.goto(urls[0]);
	expect(await page.evaluate('window.age')).toBe(1);
	expect(await page.evaluate('window.b')).toBe('{"list":[1,2]}');

	await server.close();
});
