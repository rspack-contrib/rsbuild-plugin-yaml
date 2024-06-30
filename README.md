# @rsbuild/plugin-yaml

@rsbuild/plugin-yaml is a Rsbuild plugin to do something.

<p>
  <a href="https://npmjs.com/package/@rsbuild/plugin-yaml">
   <img src="https://img.shields.io/npm/v/@rsbuild/plugin-yaml?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## Usage

Install:

```bash
npm add @rsbuild/plugin-yaml -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginYaml } from "@rsbuild/plugin-yaml";

export default {
  plugins: [pluginYaml()],
};
```

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginYaml({
  foo: "bar",
});
```

## License

[MIT](./LICENSE).
