import { SectionTitle, ProductsGrid } from '.';

const FeaturedProducts = () => {
	return (
		<>
			<section className='pt-24'>
				<SectionTitle text='Recommended Senior High School Books' />
				<ProductsGrid />
			</section>
			<section className='pt-24'>
				<SectionTitle text='Selected Junior High School Learning Products' />
				<ProductsGrid />
			</section>
		</>
	);
};
export default FeaturedProducts;
