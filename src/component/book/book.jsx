import { Link } from "react-router-dom";
import rate from "../../assets/rateicon.png"
 const Book = ({book}) => {
    const {image, bookName,author,category,publisher,rating,totalPages,id} = book;

    return (



<Link to={`/book/${id}`}>
    
            
            
            
        <div  className="w-[374px] h-[481px] bg-[#13131315] rounded-xl">

        <img className="w-[326px] h-[230px] rounded-2xl m-6" src={image} alt="" />
        <div className="flex justify-between m-6">
        <p className="font-work font-normal text-base text-[#23BE0A] bg-[#23BE0A10] w-[125px] h-[34px] rounded-3xl flex justify-center items-center">{category}</p>
        <p className="font-work font-normal text-base text-[#23BE0A] bg-[#23BE0A10] w-[91px] h-[34px] rounded-3xl flex justify-center items-center">{totalPages}</p>
        </div>
        <h1 className="font-fairplay font-bold text-2xl text-[#131313] mx-6">{bookName}</h1>
        <p className="font-work font-normal text-base text-[#13131380] mx-6">By{author}</p>
        <div className="divider mx-6"></div> 
        <div className="flex justify-between items-center m-6">
            <p className="font-work font-normal text-base text-[#13131380]">{category}</p>
            <div className="flex justify-center items-center">
            <p className="font-work font-normal text-base text-[#13131380] mr-1 ">{rating}</p>
            <img src={rate} alt="" />
            </div>
                    
        </div>
        </div>




</Link>
        
    );
 };
 
 export default Book;