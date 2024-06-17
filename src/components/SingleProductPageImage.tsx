import { useState } from 'react';

const SingleProductPageImage = ({ images = [{ url: '' }] }) => {
	const [main, setMain] = useState(images[0]);

	return (
		<div>
			<img
				src={main.url}
				alt='main'
				className='w-full h-96 object-cover rounded-lg md:w-[450px]'
			/>
			<div className='grid mt-4 grid-cols-3 gap-x-4 cursor-pointer md:w-[450px]'>
				{images.map((image, index) => (
					<img
						src={image.url}
						alt={`image-${index}`}
						key={index}
						onClick={() => setMain(image)}
						className={`${
							image.url === main.url ? 'border-2 border-primary' : ''
						} rounded-md object-cover`}
					/>
				))}
			</div>
		</div>
	);
};

export default SingleProductPageImage;
