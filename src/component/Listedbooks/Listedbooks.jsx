import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredListApplication } from "../uitility/Localstorage";

const Listedbooks = () => {
    const books = useLoaderData();
    const [appliedbooks, setAppliedbooks] = useState([books]);


    useEffect( () =>{
        const storedListIds =getStoredListApplication();
        if (books.length > 0) {
            const booksApplied = books.filter(book => storedListIds.includes(book.id));
            console.log(books, storedListIds, booksApplied);

            setAppliedbooks(booksApplied);
            // setAppliedbooks(appliedbooks);
        }
    },[]);

    return (
        <div>
            <h1 className="w-[1169px] h-[100px] bg-[#13131310] font-work font-bold text-3xl text-black flex justify-center items-center rounded-xl"> Book:{appliedbooks.length} </h1>
            <div className="w-[1170px] h-[49px] bg-[#13131310] rounded-xl my-6">
                {/* <button className="btn font-work font-normal text-lg text-[#13131380]"> Read Book </button> */}
                <NavLink  className="btn font-work font-normal text-lg text-[#13131380]"> Read Book  </NavLink>
                {/* <button  className="btn font-work font-normal text-lg text-[#13131380]"> Wishlist </button> */}
                <NavLink  className="btn font-work font-normal text-lg text-[#13131380] bg-none"> Wishlist </NavLink>
            </div>
            <div className="">
            {
                    appliedbooks.map(book => <div key={book.id} className="w-[1169px] h-[276px] bg-[#13131315] flex items-center rounded-2xl my-6">
                        <div className="w-[230px] h-[228px]">{book.image}</div>
                        <div> 
                            <h1 className="font-fairplay font-bold text-2xl text-black">{book.bookName}</h1>
                            <p className="font-work font-medium text-base text-[#13131380]">by: {book.author}</p>
                            <div className="flex justify-start items-center">
                                 <p className="font-work font-medium text-base text-[#23BE0A]"><span className="font-work font-bold text-base text-black"> Tag: </span> {book.tags}</p>
                                 <p className="font-work font-normal text-base text-[#13131380] ml-10">Year of Publishing: {book.yearOfPublishing}</p>
                            </div>
                            <div className="flex justify-start items-center">
                                <p className="font-work font-normal text-base text-[#13131380] mr-10">Publisher: {book.publisher}</p>
                                <p className="font-work font-normal text-base text-[#13131380]">Page {book.totalPages}</p>
                            </div>
                            <div className="divider"></div>
                            {/* button section  */}
                            <div className="flex items-center justify-start">

                                <p className="w-[174px] h-[41px] bg-[#328EFF15] rounded-3xl font-work font-normal text-base text-[#328EFF] flex justify-center items-center mr-2">Category: {book.category}</p>
                                <p className="w-[123px] h-[41px] bg-[#FFAC3315]
                                rounded-3xl font-work font-normal text-base text-[#FFAC33] flex justify-center items-center mr-2">Rating: {book.rating}</p>
                                {/* <button className="btn w-[150px] h-[41px] bg-[#23BE0A] rounded-full font-work font-medium text-lg text-white"> View Details</button> */}
                                <NavLink to={'/pagetoread'} className="btn w-[150px] h-[41px] bg-[#23BE0A] rounded-full font-work font-medium text-lg text-white">  View Details </NavLink>

                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* <div className="w-[1169px] h-[276px] bg-[#13131315] rounded-xl">
                
            </div> */}
        </div>
    );
};

export default Listedbooks;