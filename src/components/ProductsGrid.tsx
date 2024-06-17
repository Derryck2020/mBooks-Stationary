import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { formatAsCedi, type ProductsResponse } from '@/utils';
import { Button } from './ui/button';

const ProductsGrid = ({
	products,
	limit,
	category,
	level,
}: {
	products: ProductsResponse['data'];
	limit?: number;
	category?: string;
	level?: string;
}) => {
	const displayedProducts = limit ? products.slice(0, limit) : products;

	// Build the query string for the link
	const buildQueryString = () => {
		const params = new URLSearchParams();
		if (category) {
			params.append('category', category);
		}
		if (level) {
			params.append('level', level);
		}
		return params.toString();
	};

	const queryString = buildQueryString();

	return (
		<div className='pt-12 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{displayedProducts.map((product) => {
				const {
					name,
					price,
					discount,
					image,
					company,
					category: productCategory,
					level: productLevel,
				} = product;
				const cediAmount = formatAsCedi(price);
				const discountedPrice = discount
					? price - (price * discount) / 100
					: price;
				const cediDiscountedPrice = formatAsCedi(discountedPrice);

				return (
					<Link to={`/products/${product.id}`} key={product.id}>
						<Card>
							<CardContent className='p-4'>
								<img
									src={image}
									alt={name}
									className='rounded-md h-56 hover:bg-white md:h-48 w-full object-cover'
								/>
								<div className='mt-4 text-center relative '>
									{discount && (
										<span className='absolute top-5 -right-1 bg-red-200 text-red-500 rounded h-6 w-9 flex items-center justify-center text-xs'>
											-{discount}%
										</span>
									)}
									<h2 className='text-md font-semibold capitalize'>
										{name}
									</h2>
									<h3 className='text-sm capitalize'>{company}</h3>
									<h3 className='text-xs capitalize'>
										{productCategory || productLevel}
									</h3>
									<p className='text-primary text-sm mt-2'>
										{discount ? (
											<>
												<span className='text-gray-600 font-extralight line-through mr-2'>
													{cediAmount}
												</span>
												<span>{cediDiscountedPrice}</span>
											</>
										) : (
											cediAmount
										)}
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
						<Link to={`/products?${queryString}`}>View all products</Link>
					</Button>
				</div>
			)}
		</div>
	);
};

export default ProductsGrid;
