/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				port: "",
				pathname: "/u/**",
			},
			{
				protocol: "https",
				hostname: "onlyfriendsent.com",
				port: "",
				pathname: "/**", // Updated pathname to allow all paths
			},
			{
				protocol: "https",
				hostname: "auctionmarket.tech",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
