import Link from 'next/link';

function PrimaryButton({ text, link, isReversed }) {
	return (
		<Link href={link}>
			<button
				className={`${
					isReversed ? 'text-white bg-black' : 'text-black bg-white'
				}
                border-white border-2 font-bold font-base px-5 py-2 rounded-full cursor-pointer
                `}
			>
				{text}
			</button>
		</Link>
	);
}

export default PrimaryButton;
