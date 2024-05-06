import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveListApplication } from "../uitility/Localstorage";

const BookDetails = () => {

    const books = useLoaderData();
    const {id} = useParams()
    const idInt =parseInt(id);
    const book = books.find(book => book.id ===idInt );
    // console.log(book);
const handlebookwishlist = () =>{
    saveListApplication(idInt);
    toast(' Added Wishlist')
    // toast.success('Book Readed Successfully')
}
const handleReadBook = () =>{
    saveListApplication(idInt);
    toast.success('Book Readed Successfully')
}

    return (
        <div className="flex">
            <img className="w-[573px] h-[711px]" src={book.image} alt="" />
            <div className="mx-4">
                <h1 className="font-playfair font-bold text-4xl text-[#131313]">{book.bookName}</h1>
                <p className="font-work font-medium text-xl text-[#13131380] my-2">By: {book.author}</p>
                <div className="divider"></div> 
                <p className="font-work font-medium text-xl text-[#13131380] my-2">{book.category}</p>
                <div className="divider"></div> 
                <p className="font-work font-normal text-base text-[#131313] my-2"> <span className="font-work font-bold"> Review: </span> {book.review}</p>
                <p className="font-work font-base text-[#23BE0A]"><span className="font-work font-bold text-black my-2"> Tag: </span> {book.tags}</p>
                <div className="divider"></div> 
                <p className="font-work font-semibold font-normal text-black my-2"> <span className="font-work font-normal text-base text-[#13131370]"> Number of Pages: </span> {book.totalPages}</p>
                <p className="font-work font-semibold font-normal text-black my-2"> <span className="font-work font-normal text-base text-[#13131370]"> Publisher:</span> {book.publisher}</p>
                <p className="font-work font-semibold font-normal text-black my-2"> <span className="font-work font-normal text-base text-[#13131370]"> Year of Publishing:</span>{book.yearOfPublishing}</p>
                <p className="font-work font-semibold font-normal text-black my-2"> <span className="font-work font-normal text-base text-[#13131370]"> Rating:</span>{book.rating}</p>
                    <div className="gap-2">
                        <button onClick={handleReadBook} className="btn w-[72px] h-[57px] text-black border-black bg-none"> Read </button>
                        <button onClick={handlebookwishlist} className="btn w-[128px] h-[57px] bg-[#50B1C9] text-white"> Wishlist </button>
                        <ToastContainer />
                    </div>
            </div>
            
        </div>
    );
};

export default BookDetails;