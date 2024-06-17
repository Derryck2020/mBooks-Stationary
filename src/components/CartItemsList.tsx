import { useAppSelector } from '@/hooks';
import { Card } from './ui/card';

import {
	FirstColumn,
	SecondColumn,
	ThirdColumn,
	FourthColumn,
	FifthColumn,
} from './CartItemColumns';
const CartItemsList = () => {
	const cartItems = useAppSelector((state) => state.cartState.cartItems);

	return (
		<div>
			{cartItems.map((cartItem) => {
				const { cartID, name, price, images, discount, amount, company } =
					cartItem;
				const image = images.length > 0 ? images[0].url : '';
				const discountAmount = discount ? (price * discount) / 100 : 0;

				return (
					<Card
						key={cartID}
						className='grid grid-cols-3 gap-y-4 md:grid-cols-5 p-6 mb-8'
					>
						<FirstColumn image={image} title={name} />
						<SecondColumn title={name} company={company} />
						<ThirdColumn amount={amount} cartID={cartID} />
						<FourthColumn discount={discountAmount} />
						<FifthColumn price={price} />
					</Card>
				);
			})}
		</div>
	);
};

export default CartItemsList;
