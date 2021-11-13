/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import ThemeSwitch from './ThemeSwitch';
import styles from './nav.module.scss';
import Link from 'next/link';
interface DataType {
	searchQuery: string;
}
const Navbar = () => {
	const { register, errors, handleSubmit, reset } = useForm();
	const router = useRouter();
	const searchByName = (data: DataType) => {
		let searchQuery = data?.searchQuery[0];
		router.push(`/cocktails/${searchQuery}?search=${searchQuery}`);
	};
	return (
		<nav className={styles.navBar}>
			<Link href="/" passHref>
				<img src="/logo.png" alt="cocktails bar" />
			</Link>
			<div>
				<form onSubmit={handleSubmit(searchByName)} className="">
					<input
						className=""
						type="text"
						placeholder="Enter the First Character"
						name="searchQuery"
						ref={register({
							required: 'please type a name of your drink first',
						})}
					/>
					<button type="submit">Search</button>
				</form>
				{errors?.searchQuery && (
					<p className="error-text text-center">
						{errors?.searchQuery?.message}
					</p>
				)}
			</div>
			<ThemeSwitch />
		</nav>
	);
};

export default Navbar;
