import React from 'react';
import CocktailsCard from './CocktailsCard';
import styles from './cocktails.module.scss';
import { CocktailType } from '../../types/cocktails';

interface CocktailsListProps {
	cocktails: CocktailType[];
}
const CocktailsList: React.FC<CocktailsListProps> = ({ cocktails }) => {
	return (
		<div className={styles.cocktailsList}>
			{cocktails.map((cocktail: CocktailType) => (
				<CocktailsCard key={cocktail?.idDrink} cocktail={cocktail} />
			))}
		</div>
	);
};

export default CocktailsList;
