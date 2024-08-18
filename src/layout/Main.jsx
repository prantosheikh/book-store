import AddBook from "../components/AddBookForm";
import BookList from "../components/BookList";
import Navbar from "../components/Navbar";

const Main = () => {
	return (
		<div>
			<div className="my-14">
				<Navbar />
			</div>
			<div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
				<BookList />
				<AddBook />
			</div>
		</div>
	);
};

export default Main;
