import { SectionTitle, ProductsGrid } from '.';
import { type ProductsResponse } from '@/utils';

const FeaturedProducts = ({
	products,
}: {
	products: { [key: string]: ProductsResponse };
}) => {
	return (
		<>
			<section className='pt-24'>
				<SectionTitle text='Senior High School Books' />
				<ProductsGrid products={products.seniorHigh.data} />
			</section>
			<section className='pt-20'>
				<SectionTitle text='Junior High School Books' />
				<ProductsGrid products={products.juniorHigh.data} />
			</section>
			<section className='pt-20'>
				<SectionTitle text='Primary School Books' />
				<ProductsGrid products={products.upperLowerPrimary.data} />
			</section>
			<section className='pt-20'>
				<SectionTitle text='Kindergarten and Nursery Books' />
				<ProductsGrid products={products.kindergartenNursery.data} />
			</section>
			<section className='pt-20'>
				<SectionTitle text='Stationery' />
				<ProductsGrid products={products.stationery.data} />
			</section>
		</>
	);
};
export default FeaturedProducts;
