import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { formatAsCedi, type ProductsResponse } from '@/utils';
import { Button } from './ui/button';

const ProductsGrid = ({
	products,
	limit,
}: {
	products: ProductsResponse['data'];
	limit?: number;
}) => {
	const displayedProducts = limit ? products.slice(0, limit) : products;

	return (
		<div className='pt-12 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{displayedProducts.map((product) => {
				const { name, price, image, company, category } = product;
				const cediAmount = formatAsCedi(price);
				return (
					<Link to={`/products/${product.id}`} key={product.id}>
						<Card>
							<CardContent className='p-4'>
								<img
									src={image}
									alt={name}
									className='rounded-md h-56 hover:bg-white md:h-48 w-full object-cover'
								/>
								<div className='mt-4 text-center'>
									<h2 className='text-md font-semibold capitalize'>
										{name}
									</h2>
									<h3 className='text-sm capitalize'>{company}</h3>
									<h3 className='text-xs text-yellow-400 capitalize'>
										{category}
									</h3>
									<p className='text-primary font-light mt-2'>
										{cediAmount}
									</p>
								</div>
							</CardContent>
						</Card>
					</Link>
				);
			})}
			{limit && (
				<div className='col-span-full flex justify-center items-center'>
					<Button
						asChild
						variant='outline'
						size='lg'
						className='flex justify-center items-center capitalize'
					>
						<Link to='/products'>see all products</Link>
					</Button>
				</div>
			)}
		</div>
	);
};

export default ProductsGrid;
