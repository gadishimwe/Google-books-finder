import React from 'react';
import Search from '../components/search/Search';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import SpecificBook from '../components/books/SpecificBook';

const SpecificBookView = (props) => {
	return (
		<>
			<MainNavbar />
			<div style={{ paddingTop: 20 }}>
				<Search {...props} />
				<SpecificBook {...props} />
			</div>
			<Footer />
		</>
	);
};
export default SpecificBookView;
