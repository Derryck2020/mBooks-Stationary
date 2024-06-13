import { formatAsCedi, type ProductsResponse } from '@/utils';
import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardContent } from './ui/card';

const ProductsList = () => {
	const { data: products } = useLoaderData() as ProductsResponse;

	return (
		<div className='mt-12 grid gap-y-8'>
			{products.map((product) => {
				const { name, price, image, company, category, level } = product;
				const cediAmount = formatAsCedi(price);
				return (
					<Link key={product.id} to={`/products/${product.id}`}>
						<Card>
							<CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
								<img
									src={image}
									alt={name}
									className='h-64 w-full md:h-48 md:w-48 rounded-md object-cover'
								/>
								<div>
									<h2 className='text-xl font-semibold capitalize'>
										{name}
									</h2>
									<h4 className='capitalize'>{company}</h4>
									<h4 className='capitalize text-sm text-yellow-400'>
										{category}
									</h4>
									<h4 className='capitalize'>{level} category</h4>
								</div>
								<p className='text-primary md:ml-auto'>{cediAmount}</p>
							</CardContent>
						</Card>
					</Link>
				);
			})}
		</div>
	);
};
export default ProductsList;
