/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import styles from './cocktails.module.scss';
import { BiCategory } from 'react-icons/bi';
import { FaWineGlass } from 'react-icons/fa';
import { RiFileList3Line } from 'react-icons/ri';
import { CocktailType } from '../../types/cocktails';

interface SingleCocktailProps {
	cocktail: CocktailType;
}
const SingleCocktail: React.FC<SingleCocktailProps> = ({ cocktail }) => {
	return (
		<div className={styles.singleCocktail}>
			<img src={cocktail?.strDrinkThumb} alt={cocktail?.strDrink} />
			<div className={styles.cocktailDetails}>
				<h3>{cocktail?.strDrink}</h3>
				<p>
					<BiCategory /> <span>{cocktail?.strCategory}</span>{' '}
				</p>
				<p>
					<FaWineGlass /> <span>{cocktail?.strGlass}</span>
				</p>
				<h4>
					<RiFileList3Line /> <span>How to make it</span>
				</h4>
				<p className={styles.instructions}>{cocktail?.strInstructions}</p>
				<h4>Ingredients:</h4>
				<div className={styles.ingredients}>
					{Array.from(Array(15).keys()).map((ingredientIndex) => (
						<React.Fragment key={ingredientIndex + 1}>
							{cocktail[`strIngredient${ingredientIndex + 1}`] && (
								<Link
									href={`/cocktails/${
										cocktail[`strIngredient${ingredientIndex + 1}`]
									}`}
									passHref
								>
									<a>#{cocktail[`strIngredient${ingredientIndex + 1}`]}</a>
								</Link>
							)}
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default SingleCocktail;
