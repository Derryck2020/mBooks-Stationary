import { Link } from 'react-router-dom';
import { LibraryBig } from 'lucide-react';
import { logo_img } from '@/assets/images';

const Logo = () => {
	return (
		<Link
			to='/'
			className='hidden lg:flex justify-center items-center p-2 gap-2'
		>
			<LibraryBig className='w-9 h-9 bg-[#0099FF] rounded-md p-1 -ml-2 text-white' />
			<img src={logo_img} alt='logo-image' className='w-20' />
		</Link>
	);
};
export default Logo;
