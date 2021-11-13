import { Axios } from '../axios';

export const fetchRandomCocktail = async () => {
	let randomCocktail;
	await Axios.get('/random.php')
		.then((res) => {
			randomCocktail = { ...res?.data?.drinks[0] };
		})
		.catch((err) => {
			console.log('err', err?.response);
		});
	return randomCocktail;
};

export const fetchCocktailsByIng = async (ingredient: string) => {
	let cocktails: any[] = [];
	await Axios.get(`/filter.php?i=${ingredient}`)
		.then((res) => {
			cocktails = [...res?.data?.drinks];
		})
		.catch((err) => {
			console.log('err', err?.response);
		});
	return cocktails;
};

export const fetchCocktailsBy1stChar = async (searchQuery: string) => {
	let cocktails: any[] = [];

	await Axios.get(`/search.php?f=${searchQuery}`)
		.then((res) => {
			cocktails = [...res?.data?.drinks];
		})
		.catch((err) => {
			console.log('err', err?.response);
		});
	return cocktails;
};

export const fetchCocktailById = async (cocktailId: string) => {
	let lockUpCocktail;
	await Axios.get(`/lookup.php?i=${cocktailId}`)
		.then((res) => {
			lockUpCocktail = { ...res?.data?.drinks[0] };
		})
		.catch((err) => {
			console.log('err', err?.response);
		});
	return lockUpCocktail;
};
