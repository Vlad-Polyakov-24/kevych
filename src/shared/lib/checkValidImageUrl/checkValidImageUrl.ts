const allowedImageHosts = [
	'dummyjson.com',
	'cdn.dummyjson.com',
	'i.imgur.com',
	'imgur.com',
	'images.imgur.com',
];

export const isValidImageUrl = (value?: string) => {
	if (!value) return false;

	try {
		const url = new URL(value);
		return allowedImageHosts.includes(url.hostname);
	} catch {
		return false;
	}
};