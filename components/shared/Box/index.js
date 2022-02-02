function Box({ className, children }) {
	return (
		<div className={`px-52 py-24 xl:px-12 sm:px-4 ${className}`}>
			{children}
		</div>
	);
}

export default Box;
