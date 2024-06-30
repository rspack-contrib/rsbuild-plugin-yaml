# @rsbuild/plugin-yaml

Import YAML files and convert them into JavaScript objects.

> [YAML](https://yaml.org/) is a data serialization language commonly used for writing configuration files.

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

## Example

Suppose the project has the following code in `example.yaml`:

```yaml title="example.yaml"
hello = "world"

[foo]
bar = "baz"
```

After using the YAML plugin, you can reference it as follows:

```js
import example from "./example.yaml";

console.log(example.hello); // 'world';
console.log(example.foo); // { bar: 'baz' };
```

## Type Declaration

When you import YAML files in TypeScript code, please create a `src/env.d.ts` file in your project and add the corresponding type declarations.

```ts
declare module "*.yml" {
  const content: Record<string, any>;
  export default content;
}
declare module "*.yaml" {
  const content: Record<string, any>;
  export default content;
}
```

## License

[MIT](./LICENSE).
