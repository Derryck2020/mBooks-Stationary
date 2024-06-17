export const formatAsCedi = (price: string | number): string => {
	const cediAmount = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'GHS',
	}).format(Number(price) / 100);
	return cediAmount;
};
