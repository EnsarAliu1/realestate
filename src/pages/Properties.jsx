import { useEffect, useState } from "react"
import { getAllProperties } from "../services/properties";
import PropertyCard from "../components/PropertyCard";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllProperties()
      .then((data) => {
        console.log(data);
        setProperties(data);
        setLoading(false);
      }).catch((error) => {
        setError(error || "failed to load properties");
        setLoading(false);
    })
  },[])
  return (
    <main className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">All Properties</h1>
        <p className="my-2">We have {properties.length} properties</p>
        {loading &&
          <div>loading...</div>
        }
        {
          error && <p className="rounded-sm bg-red-500 text-red-800">
            {error}
          </p>
        }
        {
          !loading && !error && properties.length === 0 &&
          <p>No Properties</p>
        }
        {
          !loading && !error && properties.length > 0 &&
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
              {
                properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))
              }
          </div>
        }
      </div>
    </main>
  )
}

export default Properties