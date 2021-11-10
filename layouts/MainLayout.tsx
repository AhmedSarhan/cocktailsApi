import React from 'react';
import Navbar from '../components/Navigation/navbar';

const MainLayout = ({ children }: any) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default MainLayout;
