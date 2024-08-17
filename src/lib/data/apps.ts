/* eslint-disable max-lines */
import type { App } from '@/types/ui/app';

export const appsList: App[] = [
	{
		id: 'friendly-senior',
		title: 'Friendly Senior',
		description: 'GitHub app to review pull requests',
		image: '/images/apps/friendly-senior/logo.jpeg',
		metadata: [
			'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
			'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
			'https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white',
			'https://img.shields.io/badge/redis-%23DC382D.svg?style=for-the-badge&logo=redis&logoColor=white',
			'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white',
			'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white',
			'https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white',
			'https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white',
		],
		link: 'https://github.com/apps/friendlysenior',
		sourceCodeLink: 'https://github.com/amir-ben-shimol/friendly-senior',
		assets: {
			viewType: 'web',
			assetsPerRow: 1,
			web: [
				{
					source: '/images/apps/friendly-senior/checks.png',
					alt: 'Checks',
					width: 915,
					height: 224,
				},
				{
					source: '/images/apps/friendly-senior/comment.png',
					alt: 'Comment',
					width: 915,
					height: 224,
				},
			],
			mobile: [
				{
					source: '/images/apps/friendly-senior/checks-mobile.png',
					alt: 'Checks',
					width: 915,
					height: 324,
				},
				{
					source: '/images/apps/friendly-senior/comment-mobile.png',
					alt: 'Comment',
					width: 915,
					height: 324,
				},
			],
		},
	},
	{
		id: 'book-shuffle',
		title: 'Book Shuffle',
		description: 'Mobile app to discover and shuffle reading lists',
		image: '/images/apps/book-shuffle/logo.png',
		metadata: [
			'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
			'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
			'https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white',
			'https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
			'https://img.shields.io/badge/fastlane-00F200?style=for-the-badge&logo=fastlane&logoColor=white',
			'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
			'https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white',
			'https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white',
			'https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white',
		],
		sourceCodeLink: 'https://github.com/amir-ben-shimol/book-shuffle-app',
		assets: {
			assetsPerRow: 1,
			viewType: 'mobile',
			web: [
				{
					source: '/images/apps/book-shuffle/library.png',
					alt: 'library',
					width: 275,
					height: 585,
				},
				{
					source: '/images/apps/book-shuffle/book-info.png',
					alt: 'Book info',
					width: 275,
					height: 585,
				},
				{
					source: '/images/apps/book-shuffle/similar-books.png',
					alt: 'similar books',
					width: 275,
					height: 585,
				},
				{
					source: '/images/apps/book-shuffle/recently-viewed.png',
					alt: 'Recently viewed books',
					width: 275,
					height: 585,
				},
				{
					source: '/images/apps/book-shuffle/filter-preferences.png',
					alt: 'Filter preferences',
					width: 275,
					height: 585,
				},
				{
					source: '/images/apps/book-shuffle/shuffle.png',
					alt: 'Book shuffle',
					width: 275,
					height: 585,
				},
				{
					source: '/images/apps/book-shuffle/result-of-shuffled.png',
					alt: 'Result of shuffled books',
					width: 275,
					height: 585,
				},
			],
			// mobile: [
			// 	{
			// 		source: '/images/apps/book-shuffle/library.png',
			// 		alt: 'library',
			// 		width: 275,
			// 		height: 585,
			// 	},
			// 	{
			// 		source: '/images/apps/book-shuffle/book-info.png',
			// 		alt: 'Book info',
			// 		width: 275,
			// 		height: 585,
			// 	},
			// 	{
			// 		source: '/images/apps/book-shuffle/similar-books.png',
			// 		alt: 'similar books',
			// 		width: 275,
			// 		height: 585,
			// 	},
			// 	{
			// 		source: '/images/apps/book-shuffle/recently-viewed.png',
			// 		alt: 'Recently viewed books',
			// 		width: 275,
			// 		height: 585,
			// 	},
			// 	{
			// 		source: '/images/apps/book-shuffle/filter-preferences.png',
			// 		alt: 'Filter preferences',
			// 		width: 275,
			// 		height: 585,
			// 	},
			// 	{
			// 		source: '/images/apps/book-shuffle/shuffle.png',
			// 		alt: 'Book shuffle',
			// 		width: 275,
			// 		height: 585,
			// 	},
			// 	{
			// 		source: '/images/apps/book-shuffle/result-of-shuffled.png',
			// 		alt: 'Result of shuffled books',
			// 		width: 275,
			// 		height: 585,
			// 	},
			// ],
		},
	},
	{
		id: 'sky-journey',
		title: 'Sky Journey',
		description: 'Web app to visualize drone flight data',
		image: '/images/apps/skyjourney-logo.png',
		metadata: [
			'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
			'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
			'https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
			'https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
		],
		link: 'https://www.skyjourneyapp.com',
		sourceCodeLink: 'https://github.com/amir-ben-shimol/sky-journey',
	},
	{
		id: 'kynesis-dashboard',
		title: 'Kynesis Dashboard',
		description: 'An open-source product following best practices',
		image: '/images/apps/kynesis-logo.png',
		metadata: [
			'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
			'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white',
			'https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white',
			'https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white',
			'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white',
			'https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white',
			'https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
			'https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
			'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
			'https://img.shields.io/badge/Tor_Browser-7D4698?style=for-the-badge&logo=Tor-Browser&logoColor=white',
			'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
		],
		sourceCodeLink: 'https://github.com/amir-ben-shimol/kynesis-dashboard',
	},
	{
		id: 'exlint-dashboard',
		title: 'Exlint Dashboard',
		description: 'An open-source SaaS product following best practices',
		image: '/images/apps/exlint-logo.png',
		metadata: [
			'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
			'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white',
			'https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white',
			'https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white',
			'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
			'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white',
			'https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white',
			'https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white',
			'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white',
			'https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white',
			'https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
			'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
		],
		sourceCodeLink: 'https://github.com/Exlint/dashboard',
	},
	{
		id: 'spring-productions',
		title: 'Spring Productions',
		description: 'Website portfolio for a video production company',
		image: '/images/apps/spring-logo.png',
		metadata: [
			'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
			'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
			'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
			'https://img.shields.io/badge/strapi-%230080FF.svg?style=for-the-badge&logo=strapi&logoColor=white',
			'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white',
		],
		link: 'https://springproductions.co.il/',
	},
	{
		id: 'aviv-shiloh-portfolio',
		title: 'Aviv Shiloh Portfolio',
		description: 'Website portfolio for a personal photographer',
		image: '/images/apps/aviv-shiloh-logo.png',
		metadata: [
			'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',

			'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
			'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
			'https://img.shields.io/badge/strapi-%230080FF.svg?style=for-the-badge&logo=strapi&logoColor=white',
			'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white',
		],
		link: 'https://www.avivshiloh.com/',
	},
];
