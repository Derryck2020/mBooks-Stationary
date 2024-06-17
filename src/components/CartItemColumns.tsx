import { formatAsCedi } from '@/utils';
import { useAppDispatch } from '@/hooks';
import { Button } from './ui/button';
import { editItem, removeItem } from '@/features/cart/cartSlice';
import SelectProductAmount from './SelectProductAmount';
import { Mode } from './SelectProductAmount';

export const FirstColumn = ({
	image,
	title,
}: {
	image: string;
	title: string;
}) => {
	return (
		<img
			src={image}
			alt={title}
			className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
		/>
	);
};

export const SecondColumn = ({
	title,
	company,
}: {
	title: string;
	company: string;
}) => {
	return (
		<div className='text-sm sm:ml-4 md:ml-12'>
			<h3 className='capitalize font-medium'>{title}</h3>
			<h4 className='mt-2 capitalize text-sm'>{company}</h4>
		</div>
	);
};

export const ThirdColumn = ({
	amount,
	cartID,
}: {
	amount: number;
	cartID: string;
}) => {
	const dispatch = useAppDispatch();

	const removeItemFromTheCart = () => {
		dispatch(removeItem(cartID));
	};

	const setAmount = (value: number) => {
		dispatch(editItem({ cartID, amount: value }));
	};

	return (
		<div className='ml-5'>
			<SelectProductAmount
				amount={amount}
				setAmount={setAmount}
				mode={Mode.CartItem}
			/>
			<Button
				variant='link'
				className='text-red-400 -ml-4'
				onClick={removeItemFromTheCart}
			>
				remove
			</Button>
		</div>
	);
};

export const FourthColumn = ({
	discount,
}: {
	discount: number | undefined;
}) => {
	if (discount) {
		return (
			<p className='text-sm text-red-400 font-medium sm:ml-auto'>
				-{formatAsCedi(discount)}
			</p>
		);
	}
	return (
		<p className='text-sm text-gray-500 font-medium sm:ml-auto'>
			no discount
		</p>
	);
};

export const FifthColumn = ({ price }: { price: number }) => {
	return (
		<p className='font-medium text-sm text-primary sm:ml-auto'>
			{formatAsCedi(price)}
		</p>
	);
};
