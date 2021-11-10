import { GetServerSideProps } from 'next';
import React from 'react';
import {
	fetchCocktailsBy1stChar,
	fetchCocktailsByIng,
} from '../../apiUtils/Cocktails';
import Link from 'next/link';
import MainLayout from '../../layouts/MainLayout';
const CocktailsByIngredient = ({ cocktails }: any) => {
	return (
		<MainLayout>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8 mx-auto px-3">
				{cocktails.length > 0 &&
					cocktails.map((cocktail: any) => (
						<Link
							key={cocktail?.idDrink}
							href={`/cocktails/details/${cocktail?.idDrink}`}
							passHref
						>
							<div className="my-1 rounded-md shadow-lg border border-gray-400 pb-3 mx-auto cursor-pointer">
								<img src={cocktail?.strDrinkThumb} alt={cocktail?.strDrink} />
								<h3 className="text-center my-2">{cocktail?.strDrink}</h3>
							</div>
						</Link>
					))}
			</div>
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
		cocktails = await fetchCocktailsBy1stChar(searchQuery);
		return {
			props: {
				cocktails: [...cocktails],
			},
		};
	}
	cocktails = await fetchCocktailsByIng(ingredientName);
	return {
		props: {
			cocktails: [...cocktails],
		},
	};
};
