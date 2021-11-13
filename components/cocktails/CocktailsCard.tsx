/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './cocktails.module.scss';
import { getLocalTheme } from './../../hooks/useDarkMode';
import { CocktailType } from '../../types/cocktails';

interface CocktailsCardProps {
	cocktail: CocktailType;
}
const CocktailsCard: React.FC<CocktailsCardProps> = ({ cocktail }) => {
	return (
		<Link href={`/cocktails/details/${cocktail?.idDrink}`} passHref>
			<div className={styles.cocktailCard}>
				<img src={cocktail?.strDrinkThumb} alt={cocktail?.strDrink} />
				<h3 className="text-center my-2">{cocktail?.strDrink}</h3>
			</div>
		</Link>
	);
};

export default CocktailsCard;
