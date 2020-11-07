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
      <div className="type">
        <h3 className="title">Client-Side Rendering</h3>
        <h4 className="description">
          All data fetching occurs directly on the client
        </h4>
        <h4 className="description">(Notice the visible flash of data)</h4>
        <h5 className="hint">
          (Technically this page is SSG and fetching data once loaded on the
          client, meaning the flash of data is identical to CSR, but the initial
          page render is faster than true CSR)
        </h5>
        <a
          className="link"
          href="https://github.com/Josh-McFarlin/nextjs-rendering/blob/main/src/pages/csr.js"
        >
          View the source here
        </a>
      </div>
      <br />
      <div className="type">
        {data == null ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            <p className="title">
              Data Generated: {new Date(data.date).toLocaleString()}
            </p>
            {data.cars.map((car) => (
              <Car key={car.vin} {...car} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default CSRPage;
