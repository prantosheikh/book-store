import SearchBar from "./SearchBar";

const Navbar = () => (
	<nav className="mt-6">
		<div className="container flex items-center justify-between">
			<img
				src="/src/images/logo.svg"
				alt="Logo"
				className="object-contain"
				width="150px"
			/>
			<ul className="hidden md:flex items-center space-x-6">
				<li>Book Store</li>
				<li>Wishlist</li>
				<li>My Collection</li>
			</ul>
			<SearchBar />
		</div>
	</nav>
);

export default Navbar;
