import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import {
	fetchCocktailsBy1stChar,
	fetchCocktailsByIng,
} from '../../apiUtils/Cocktails';
import MainLayout from '../../layouts/MainLayout';
import CocktailsList from '../../components/cocktails/CocktailsList';
import { CocktailType } from '../../types/cocktails';

interface CocktailsByIngredientProps {
	cocktails: CocktailType[];
	pageTitle: string;
}
const CocktailsByIngredient: NextPage<CocktailsByIngredientProps> = ({
	cocktails,
	pageTitle,
}) => {
	return (
		<MainLayout title={pageTitle} description="">
			{cocktails.length > 0 && <CocktailsList cocktails={cocktails} />}
		</MainLayout>
	);
};

export default CocktailsByIngredient;
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
	console.log(ctx?.params, ctx?.query);
	let cocktails: any[] = [];
	let ingredientName = ctx?.params?.ingredientName;
	let searchQuery = ctx?.query?.search;
	if (searchQuery) {
		let char = searchQuery.length > 1 ? searchQuery[0] : searchQuery;
		cocktails = await fetchCocktailsBy1stChar(char);
		return {
			props: {
				cocktails: [...cocktails],
				pageTitle: `Search Results for ${char}`,
			},
		};
	}
	cocktails = await fetchCocktailsByIng(ingredientName);
	return {
		props: {
			cocktails: [...cocktails],
			pageTitle: `Cocktails contains ${ingredientName}`,
		},
	};
};
