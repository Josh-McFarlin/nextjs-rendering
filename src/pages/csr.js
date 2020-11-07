import React from "react";
import Car from "../components/Car";
import { fetchCars } from "../actions/api";

const CSRPage = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetchCars().then((newData) => setData(newData));
  }, []);

  return (
    <>
      <h3 className="type-title">Client-Side Rendering</h3>
      <h4 className="type-description">
        The page is being uniquely generated for each visitor on the server
        before sending the HTML and JavaScript to the client.
      </h4>
      <p className="type-hint">
        (Technically this page is SSG while fetching data once loaded on the
        client, meaning the flash of data is identical to CSR, but the initial
        page render is faster than true CSR)
      </p>
      <br />
      {data == null ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Data Generated: {new Date(data.date).toLocaleString()}</p>
          {data.cars.map((car) => (
            <Car key={car.vin} {...car} />
          ))}
        </>
      )}
    </>
  );
};

export default CSRPage;
