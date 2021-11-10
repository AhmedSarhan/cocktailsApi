import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
const Navbar = () => {
	const { register, errors, handleSubmit, reset } = useForm();
	const router = useRouter();
	const searchByName = (data: any) => {
		let searchQuery = data?.searchQuery[0];
		router.push(`/cocktails/${searchQuery}?search=${searchQuery}`);
	};
	return (
		<nav className="bg-white border-b w-full px-2 py-4 flex">
			<form onSubmit={handleSubmit(searchByName)} className="mx-auto flex">
				<input
					className="rounded-md border outline-none focus:outline-none w-full"
					type="text"
					placeholder="enter first character"
					name="searchQuery"
					ref={register({
						required: 'please type a name of your drink first',
					})}
				/>
				<button type="submit">Search</button>
			</form>
		</nav>
	);
};

export default Navbar;
