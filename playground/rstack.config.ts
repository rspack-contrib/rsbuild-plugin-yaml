// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginYaml } from '../src/index.ts';

define.app({
  plugins: [pluginYaml()],
});
