import { useEffect, useState } from "react";
import SearchComp from "./components/SearchComp";
import axios from 'axios'
import { CiEdit } from "react-icons/ci";
import DeleteCard from "./components/DeleteCard";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchFail, fetchStart, getSuccessBook } from "./features/bookSlice";
import { EventFunc } from "./models/models";
// import { MdDeleteOutline } from "react-icons/md";


const PORT = 8000
const Home = () => {
    const [search, setSearch] = useState("")
    const dispatch = useAppDispatch()
    const { loading, error, booksList } = useAppSelector(state => state.books)

    const getData = async () => {
        dispatch(fetchStart())
        try {
            const { data } = await axios(`http://127.0.0.1:${PORT}/books/search?q=${search}`)
            // const { data } = await axios(`http://127.0.0.1:${PORT}/books/`)
            dispatch(getSuccessBook(data.post))
            // console.log(data.post);

        } catch (error) {
            console.log(error);
            dispatch(fetchFail())
        }
    }
    
    useEffect(() => {
        getData()
    }, [search])

    //! 1. way
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearch(e.target.value);
    // }

    //! 2. way clean code import from (models.js)
    const handleChange: EventFunc = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <SearchComp handleChange={handleChange} />
            {loading ? (
                <p className="text-center text-red-600">Books loading...</p>
            ) : (
                error ? (
                    <p className="text-center text-red-600">Something went wrong...</p>
                ) : (
                    <div className=" flex justify-center items-stretch gap-6 mt-6 flex-wrap">
                        {booksList.map((book, i) => (
                            <div key={i} className="w-full max-w-sm bg-white border text-center rounded-lg flex  flex-col justify-between">
                                <div>
                                    <img className="object-contain w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg m-auto mt-4" src={book.image} alt="" />
                                </div>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> <span className="font-bold">ISBN:</span> {book.ISBN}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Publication Year: </span> {book.publicationYear}</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Genre: </span> {book.genre}</p>
                                </div>
                                <div className="flex justify-center gap-3 pb-4">
                                    <Button variant="contained"> <CiEdit className="size-6" /></Button>
                                    {/* <button> <MdDeleteOutline className="size-8 hover:text-red-700" /></button> */}
                                    <DeleteCard id={book._id} getData={getData} />
                                </div>
                            </div>
                        )
                        )}
                    </div>
                )

            )
            }
        </div>
    );
};

export default Home;
