import Card from "@/components/Card"

export default function Favorites({ favorites }) {

  const favoriteRides = favorites.map(ride => {
    return (
      <Card 
        name={ride.name} 
        description={ride.description} 
        location={ride.location} 
        key={ride.id}
      />
    )
  })

  return (
    <div className="bg-gray-700 text-gray-200 p-5 place-items-center gap-3 select-none sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {favoriteRides}
    </div>
  )
}