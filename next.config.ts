import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dummyjson.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'cdn.dummyjson.com',
				pathname: '/**',
			}
		],
	},
	// webpack(config) {
	// 	const fileLoaderRule = config.module.rules.find((rule) =>
	// 		rule.test?.test?.('.svg'),
	// 	)
	//
	// 	config.module.rules.push(
	// 		{
	// 			...fileLoaderRule,
	// 			test: /\.svg$/i,
	// 			resourceQuery: /url/,
	// 		},
	// 		{
	// 			test: /\.svg$/i,
	// 			issuer: fileLoaderRule.issuer,
	// 			resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
	// 			use: ['@svgr/webpack'],
	// 		},
	// 	)
	//
	// 	fileLoaderRule.exclude = /\.svg$/i
	//
	// 	return config
	// },
};

export default nextConfig;
