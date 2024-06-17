import { footer_details, socialIcons } from '@/utils';

const Footer = () => {
	return (
		<footer className='bg-muted'>
			<section className='align-element grid md:justify-center grid-col-2 pt-10 pb-5 gap-y-5'>
				<div className='grid grid-cols-2 gap-8 md:gap-x-20 md:grid-cols-3 capitalize tracking-wide'>
					{footer_details.map((item) => (
						<div key={item.id}>
							<ul className='flex flex-col md:items-center'>
								<div>
									<h4 className='font-semibold text-gray-700 uppercase text-sm '>
										{item.topic}
									</h4>
								</div>
								{item.links.map((info) => (
									<li
										key={info.id}
										className='grid pt-2 text-sm flex-col'
									>
										<a
											href={info.href}
											className='text-gray-400 hover:underline hover:text-primary transition-style'
										>
											{info.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Social media Links */}
				<ul className='flex justify-center mt-10 gap-x-5'>
					{socialIcons.map((link) => (
						<li
							key={link.id}
							className='hover:text-primary transition-style'
						>
							<a href={link.href} className='text-lg'>
								<link.icon />
							</a>
						</li>
					))}
				</ul>

				{/* All Rights Reserved */}
				<div className='mx-auto mt-5 text-center'>
					<h5>
						&copy; {new Date().getFullYear()}&nbsp;
						<span>
							mB
							<span className='text-[#0099ee]'>oo</span>ks.com
						</span>
					</h5>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
