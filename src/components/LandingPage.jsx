import { useState, useEffect } from "react";

function SellerList(){
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/sellers")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch sellers");
        }
        return res.json();
      })
      .then((data) => {
        setSellers(data.sellers);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading sellers...</p>;
  if (error) return <p>Error: {error}</p>;
    return(
        <div>
            <h2>Our Sellers</h2>
            <ul>
                {sellers.map((seller) => (
                <li key={seller.roomNumber}>
                    <h3>{seller.name}</h3>
                    <p>{seller.description}</p>
                    <p>
                    Room: {seller.roomNumber} | Rating: {seller.rating} / 5
                    </p>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default SellerList;