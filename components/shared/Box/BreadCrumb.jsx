import React from 'react';

const BreadCrumb = ({ title }) => {
	return (
		<nav className='flex items-center' aria-label='Breadcrumb'>
			<ol className='flex items-center '>
				<li className='inline-flex items-center mr-[13px]'>
					<a
						href='#'
						className='inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
					>
						<img src='/images/web3/homeicon.png' alt='' />
					</a>
				</li>

				<li aria-current='page'>
					<div className='flex items-center'>
						<img
							src='images/web3/rightarrow.png'
							alt=''
							className='opacity-80 mt-[1px]'
						/>
						<span className='ml-2.5 text-xl font-medium text-[background: #CFCED8] md:ml-2 dark:text-gray-500'>
							{title}
						</span>
					</div>
				</li>
			</ol>
		</nav>
	);
};

export default BreadCrumb;
