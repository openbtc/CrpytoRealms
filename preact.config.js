import { DefinePlugin } from 'webpack';

export default function(config, env, helpers) {
  config.plugins.push(
    new DefinePlugin({
      process: {
      	version: JSON.stringify("v0.1") ,
        env: { NODE_ENV: JSON.stringify("production") },
        versions: {
        	http_parser: '2.7',
			node: '8.9',
			v8: '6.3',
			uv: '1.18',
			zlib: '1.2',
			ares: '1.13',
			modules: '60',
			nghttp2: '1.29',
			napi: '2',
			openssl: '1.0',
			icu: '60.1',
			unicode: '10.0',
			cldr: '32.0',
			tz: '2016'
		}
      },
    })
  );
}