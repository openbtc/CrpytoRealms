import { DefinePlugin } from 'webpack';

export default function(config, env, helpers) {
  config.plugins.push(
    new DefinePlugin({
      process: {
        env: {},
      },
    })
  );
}