import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import SingleCocktail from '../../../components/cocktails/SingleCocktail';
import MainLayout from '../../../layouts/MainLayout';
import { CocktailType } from '../../../types/cocktails';
import { fetchCocktailById } from './../../../apiUtils/Cocktails';

interface SingleCocktailPageProps {
	cocktail: CocktailType;
}
const SingleCocktailPage: NextPage<SingleCocktailPageProps> = ({
	cocktail,
}) => {
	return (
		<MainLayout
			title={cocktail?.strDrink}
			description={cocktail?.strInstructionsDE}
		>
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
