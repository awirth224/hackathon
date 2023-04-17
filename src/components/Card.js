import Image from "next/legacy/image";
import disneyRides from '../../data';
import { AiOutlineHeart, AiFillDelete } from 'react-icons/ai'
import Link from "next/link";

const Card = ({setFavorites}) => {

    const rideDetails = disneyRides.map((ride) => {
        return(
            <div className="p-4 cursor-pointer xl:hover:scale-105 transition-transform duration-200 h-90 w-65 border bg-indigo-200">
                <Image
                    src="https://images.unsplash.com/photo-1524008279394-3aed4643b30b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzbmV5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="disney-logo"
                    height={100}
                    width={200}
                    layout="responsive"
                />
                <div className="leading-8 text-indigo-700">
                    <p>{ride.name}</p>
                    <p>{ride.description}</p>
                    <p>{ride.location}</p>
                </div>
                <AiOutlineHeart onClick={() => setFavorites(ride)} className="text-2xl"/>
            </div>
        )
    })

    return (
        <>
            {rideDetails}
        </>
    )
}

export default Card;