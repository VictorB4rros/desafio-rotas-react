import { getBooks } from "../../../../data";

export default function Books() {

    const books = getBooks();

    return (
        <div>
            {
                books.map(book => (
                    <p key={book.id} >{book.name}</p>
                ))
            }
        </div>
    );
}