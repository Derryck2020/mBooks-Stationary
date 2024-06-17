import { nanoid } from 'nanoid';
import { BsTwitterX, BsLinkedin, BsFacebook } from 'react-icons/bs';

type Link = {
	href: string;
	label: string;
};

export const links: Link[] = [
	{ href: '/', label: 'home' },
	{ href: 'about', label: 'about' },
	{ href: 'contact', label: 'contact' },
	{ href: 'products', label: 'products' },
	{ href: 'cart', label: 'cart' },
	{ href: 'checkout', label: 'checkout' },
	{ href: 'orders', label: 'orders' },
];

type Step = {
	id: string;
	heading: string;
	text: string;
};

export const steps1: Step[] = [
	{
		id: nanoid(),
		heading: '1. Browse the Online Catalog.',
		text: 'Visit the Mbooks website and explore the extensive catalog of books and stationery tailored for nursery, primary, junior high, and senior high schools.',
	},
	{
		id: nanoid(),
		heading: '2. Select Items.',
		text: 'Choose the required textbooks, workbooks, and stationery items by adding them to your online shopping cart.',
	},
	{
		id: nanoid(),
		heading: '3. Create an Account or Log In.',
		text: 'Sign up for a new account or log in to your existing account to proceed with the purchase.',
	},
	{
		id: nanoid(),
		heading: '4. Review Your Order.',
		text: 'Check the items in your cart, ensuring you have selected the correct quantities and editions.',
	},
	{
		id: nanoid(),
		heading: '5. Proceed to Checkout.',
		text: 'Enter your shipping details and select your preferred payment method.',
	},
];

export const steps2: Step[] = [
	{
		id: nanoid(),
		heading: '6. Make payment.',
		text: 'Complete the payment process using secure online payment options such as credit/debit cards, mobile money, or bank transfers.',
	},
	{
		id: nanoid(),
		heading: '7. Order Confirmation.',
		text: 'Receive an order confirmation email with details of your purchase and estimated delivery time.',
	},
	{
		id: nanoid(),
		heading: '8. Order Processing and Shipping.',
		text: 'Mbooks processes your order and prepares it for shipping, providing updates on the status of your order.',
	},
	{
		id: nanoid(),
		heading: '9. Delivery.',
		text: 'Receive your order at the specified address, ensuring that all items are intact and meet your expectations.',
	},
	{
		id: nanoid(),
		heading: '10. Customer Support.',
		text: 'For any inquiries or issues, contact Mbooks customer support for assistance and resolution.',
	},
];

type SocialIcon = {
	id: string;
	icon: React.ComponentType;
	href: string;
};

export const socialIcons: SocialIcon[] = [
	{
		id: nanoid(),
		icon: BsTwitterX,
		href: 'https://twitter.com',
	},
	{
		id: nanoid(),
		icon: BsFacebook,
		href: 'https://facebook.com',
	},
	{
		id: nanoid(),
		icon: BsLinkedin,
		href: 'https://linkedin.com',
	},
];

type FooterLink = {
	id: string;
	title: string;
	href: string;
};

type FooterSection = {
	id: string;
	topic: string;
	links: FooterLink[];
};

export const footer_details: FooterSection[] = [
	{
		id: nanoid(),
		topic: 'about us',
		links: [
			{ id: nanoid(), title: 'mbooks history', href: '#' },
			{ id: nanoid(), title: 'terms & conditions', href: '#' },
			{ id: nanoid(), title: 'privacy policy', href: '#' },
		],
	},
	{
		id: nanoid(),
		topic: 'useful links',
		links: [
			{ id: nanoid(), title: 'referrals reward', href: '#' },
			{ id: nanoid(), title: 'delivery policies', href: '#' },
			{ id: nanoid(), title: 'payment process', href: '#' },
		],
	},
	{
		id: nanoid(),
		topic: 'support',
		links: [
			{ id: nanoid(), title: 'contact us', href: '#' },
			{ id: nanoid(), title: 'safety tips', href: '#' },
			{ id: nanoid(), title: 'engage with us', href: '#' },
		],
	},
];
