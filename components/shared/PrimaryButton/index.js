import Link from 'next/link';

function PrimaryButton({ text, link, isReversed }) {
	return (
		<Link href={link} passHref>
			<p
				className={`${
					isReversed ? 'text-white bg-black' : 'text-black bg-white'
				}
                border-white border-2 font-bold font-base text-xs px-5 py-2 rounded-full cursor-pointer font-[Poppins] z-40
                `}
			>
				{text}
			</p>
		</Link>
	);
}

export default PrimaryButton;
