
import { useEffect, useState } from "react";
import Book from "../book/book";
const FeaturedBook = () => {
    const [books, setBooks] = useState([]);
    useEffect( () =>{
        fetch('books.json')
        .then( res => res.json())
        .then( data => setBooks(data));
    }, [])


    return (
        <div className=" grid grid-row-3">
            <h2 className="text-4xl font-bold m-6 flex justify-center items-center"> Books: {books.length} </h2>

            
            <div className="flex flex-col-3 flex-wrap items-center gap-3">
              {
                books.map(book => <Book key={book.id} book={book}></Book>)
              }
            </div>
        </div>
    );
};

export default FeaturedBook;