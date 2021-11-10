import { GetServerSideProps } from 'next';
import React from 'react';
import SingleCocktail from '../../../components/cocktails/SingleCocktail';
import MainLayout from '../../../layouts/MainLayout';
import { fetchCocktailById } from './../../../apiUtils/Cocktails';

const SingleCocktailPage = ({ cocktail }: any) => {
	return (
		<MainLayout>
			<SingleCocktail cocktail={cocktail} />
		</MainLayout>
	);
};

export default SingleCocktailPage;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
	let cocktailId = ctx?.params?.id;
	let cocktail = await fetchCocktailById(cocktailId);

	return {
		props: {
			cocktail: cocktail,
		},
	};
};
