import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { fetchRandomCocktail } from '../apiUtils/Cocktails';
import SingleCocktail from '../components/cocktails/SingleCocktail';
import MainLayout from '../layouts/MainLayout';
import { CocktailType } from '../types/cocktails';

interface HomePageProps {
	randomCocktail: CocktailType;
}
const Home: NextPage<HomePageProps> = ({ randomCocktail }) => {
	return (
		<MainLayout
			title={randomCocktail?.strDrink}
			description={'this is a randomly generated cocktail'}
		>
			<SingleCocktail cocktail={randomCocktail} />
		</MainLayout>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
	const randomCocktail = await fetchRandomCocktail();
	return {
		props: {
			randomCocktail,
		},
	};
};
