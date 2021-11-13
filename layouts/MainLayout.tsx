import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Head from 'next/head';

interface LayoutProps {
	title: string;
	description: string;
}
const MainLayout: React.FC<LayoutProps> = ({
	children,
	title,
	description,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="icon" href="/logo.png" />
			</Head>
			<Navbar />
			<div
				className="mx-auto px-3 my-0 py-4 bg-primary"
				style={{ minHeight: '90vh' }}
			>
				{children}
			</div>
		</>
	);
};

export default MainLayout;
