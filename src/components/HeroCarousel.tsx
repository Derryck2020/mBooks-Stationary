import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import {
	hero_img_1,
	hero_img_2,
	hero_img_3,
	hero_img_4,
	hero_img_5,
} from '@/assets/images';

const carouselImages = [
	hero_img_1,
	hero_img_2,
	hero_img_3,
	hero_img_4,
	hero_img_5,
];

const HeroCarousel = () => {
	const plugin = React.useRef(
		Autoplay({
			delay: 2400,
			stopOnInteraction: false,
		})
	);

	return (
		<div className='flex mt-10 sm:mt-0 justify-center items-center'>
			<Carousel
				plugins={[plugin.current]}
				className='w-full max-w-sm sm:max-w-md'
			>
				<CarouselContent>
					{carouselImages.map((image, index) => {
						return (
							<CarouselItem key={index}>
								<div className='p-1'>
									<Card>
										<CardContent className='flex aspect-square items-center justify-center p-6'>
											<img
												src={image}
												alt='hero-image'
												className='h-[22rem] rounded-md object-cover'
											/>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default HeroCarousel;
