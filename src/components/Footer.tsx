import { footer_details, socialIcons } from '@/utils';

const Footer = () => {
	return (
		<footer className='bg-muted'>
			<section className='align-element grid pt-10 pb-5 gap-y-5'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-10 capitalize tracking-wide'>
					{footer_details.map((item) => (
						<div key={item.id}>
							<ul className='flex flex-col gap-y-3'>
								<div className='flex items-center gap-3'>
									<h4 className='font-semibold uppercase text-md'>
										{item.topic}
									</h4>
								</div>
								<li className='grid w-[140px] text-sm flex-col gap-2'>
									{item.links.map((info, index) => (
										<a
											key={index}
											href={info.href}
											className='text-gray-400 hover:underline hover:text-primary transition-style'
										>
											{info.title}
										</a>
									))}
								</li>
							</ul>
						</div>
					))}
					{/* Social media Links */}
					<ul className='flex justify-center flex-row mt-10 pr-32 gap-x-5'>
						{socialIcons.map((link) => (
							<li
								key={link.id}
								className='hover:text-primary transition-style'
							>
								<a href={link.href} className='text-lg'>
									{link.icon({})}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* All Rights reserve */}
				<div className=' mx-auto mt-5'>
					<h5>
						&copy; {new Date().getFullYear()} &nbsp;
						<>
							mB
							<span className='text-[#0099ee]'>oo</span>ks.com
						</>
					</h5>
					<h5></h5>
				</div>
			</section>
		</footer>
	);
};
export default Footer;
