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
			},
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'imgur.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.imgur.com',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
