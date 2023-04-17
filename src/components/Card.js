import Image from "next/legacy/image";

const Card = () => {
    return (
        <div className="p-3 cursor-pointer xl:hover:scale-105 transition-transform duration-200 h-80 w-80">
            <Image
                src="https://images.unsplash.com/photo-1524008279394-3aed4643b30b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzbmV5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="disney-logo"
                height={100}
                width={200}
                // layout="responsive"
            />
            <div className="border">
                <p>Ride Name</p>
                <p>Ride Description</p>
                <p>Ride Location</p>
            </div>
        </div>
    )
}

export default Card;