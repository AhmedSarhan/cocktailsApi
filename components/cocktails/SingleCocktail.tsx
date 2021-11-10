/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const SingleCocktail = ({ cocktail }: any) => {
	return (
		<>
			<img
				className="w-28"
				src={cocktail?.strDrinkThumb}
				alt={cocktail?.strDrink}
			/>
			<h3>{cocktail?.strDrink}</h3>
			<p>Cat: {cocktail?.strCategory}</p>
			<p>Glass: {cocktail?.strGlass}</p>
			<p>Instructions: {cocktail?.strInstructionsDE}</p>
			<p>Ingredients:</p>
			<div className="flex justify-start items-center">
				{Array.from(Array(15).keys()).map((ingredientIndex) => (
					<React.Fragment key={ingredientIndex + 1}>
						{cocktail[`strIngredient${ingredientIndex + 1}`] && (
							<Link
								href={`/cocktails/${
									cocktail[`strIngredient${ingredientIndex + 1}`]
								}`}
								passHref
							>
								<a className="mx-1">
									#{cocktail[`strIngredient${ingredientIndex + 1}`]}
								</a>
							</Link>
						)}
					</React.Fragment>
				))}
			</div>
		</>
	);
};

export default SingleCocktail;
