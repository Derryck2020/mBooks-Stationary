import { Form, useLoaderData, Link } from 'react-router-dom';

import { Button } from './ui/button';
import { ProductsResponseWithParams } from '@/utils';
import FormInput from './FormInput';
import SelectInput from './SelectInput';
import PriceRange from './PriceRange';

const Filters = () => {
	const { meta, params } = useLoaderData() as ProductsResponseWithParams;
	const {
		search,
		category,
		company,
		course,
		level,
		basic_level,
		sort,
		price,
	} = params;
	return (
		<Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
			{/* search */}
			<FormInput
				type='search'
				label='search product'
				name='search'
				defaultValue={search}
			/>
			{/* category */}
			<SelectInput
				label='category'
				name='category'
				options={meta.categories}
				defaultValue={category}
			/>
			{/* company */}
			<SelectInput
				label='company'
				name='company'
				options={meta.companies}
				defaultValue={company}
			/>
			{/* course */}
			<SelectInput
				label='subject'
				name='course'
				options={meta.courses}
				defaultValue={course}
			/>
			{/* level */}
			<SelectInput
				label='level/stage'
				name='level'
				options={meta.levels}
				defaultValue={level}
			/>
			{/* basic_level */}
			<SelectInput
				label='basic 1 - 9'
				name='basic_level'
				options={meta.basic_levels}
				defaultValue={basic_level}
			/>
			{/* sort */}
			<SelectInput
				label='sort by'
				name='sort'
				options={['a-z', 'z-a', 'high', 'low']}
				defaultValue={sort}
			/>
			{/* Price Range */}
			<PriceRange label='price' name='price' defaultValue={price} />
			{/* Buttons */}
			<Button type='submit' size='sm' className='self-end capitalize mb-2'>
				search
			</Button>
			<Button
				type='button'
				asChild
				size='sm'
				variant='outline'
				className='self-end mb-2  capitalize bg-rose-300 hover:bg-rose-400'
			>
				<Link to='/products'>reset</Link>
			</Button>
		</Form>
	);
};
export default Filters;
