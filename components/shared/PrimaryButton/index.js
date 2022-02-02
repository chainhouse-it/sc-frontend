import Link from 'next/link';

function PrimaryButton({ text, link, isReversed }) {
	return (
		<Link href={link} passHref>
			<p
				className={`${
					isReversed ? 'text-white bg-black' : 'text-black bg-white'
				}
                border-white border font-semibold font-base px-10 py-2 rounded-full cursor-pointer font-[Poppins] z-30 sm:text-xs
                `}
			>
				{text}
			</p>
		</Link>
	);
}

export default PrimaryButton;
