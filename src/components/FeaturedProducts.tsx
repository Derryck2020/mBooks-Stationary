import { SectionTitle, ProductsGrid } from '.';
import { type ProductsResponse } from '@/utils';

const FeaturedProducts = ({
	products,
}: {
	products: { [key: string]: ProductsResponse };
	limit?: number;
	category?: string;
	level?: string;
}) => {
	return (
		<>
			<section className='pt-24'>
				<SectionTitle text='Senior High School Books' />
				<ProductsGrid
					products={products.seniorHigh.data}
					limit={4}
					level='senior high'
				/>
			</section>
			<section className='pt-20'>
				<SectionTitle text='Junior High School Books' />
				<ProductsGrid
					products={products.juniorHigh.data}
					limit={4}
					level='junior high'
				/>
			</section>
			<section className='pt-20'>
				<SectionTitle text='Primary School Books' />
				<ProductsGrid
					products={products.upperLowerPrimary.data}
					limit={4}
					level='upper primary'
				/>
			</section>
			<section className='pt-20'>
				<SectionTitle text='Kindergarten and Nursery Books' />
				<ProductsGrid
					products={products.kindergartenNursery.data}
					limit={4}
					level='kindergarten and nursery'
				/>
			</section>
			<section className='pt-20'>
				<SectionTitle text='Stationery' />
				<ProductsGrid
					products={products.stationery.data}
					limit={4}
					category='stationery'
				/>
			</section>
		</>
	);
};
export default FeaturedProducts;
