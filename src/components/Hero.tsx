import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 gap-y-5 items-center'>
			<div>
				<h1 className='max-w-2xl capitalize font-bold text-4xl font-serif sm:text-5xl'>
					get all your nursery, primary, junior high and senior high books
					with ease
				</h1>
				<p className='mt-8 max-w-xl text-lg leading-8'>
					Welcome to mB<span className='text-[#0099ee]'>oo</span>ks, your
					one-stop shop for all educational materials. Discover a seamless
					experience in finding nursery, primary, junior high, and senior
					books. Enjoy effortless browsing and swift deliveries, ensuring
					every student is well-equipped for success.
				</p>
				<Button asChild className='mt-10'>
					<Link to='/products'>Our Products</Link>
				</Button>
			</div>
			<HeroCarousel />
		</section>
	);
};
export default Hero;
