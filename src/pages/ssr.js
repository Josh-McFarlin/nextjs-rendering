import Car from "../components/Car";
import { fetchCars } from "../actions/api";

const SSRPage = ({ data }) => (
  <>
    <div className="type">
      <h3 className="title">Server-Side Rendering</h3>
      <h4 className="description">
        All data is being fetched on the server for each unique request
      </h4>
      <a
        className="link"
        href="https://github.com/Josh-McFarlin/nextjs-rendering/blob/main/src/pages/ssr.js"
      >
        View the source here
      </a>
    </div>
    <br />
    <div className="type">
      <p className="title">
        Data Generated: {new Date(data.date).toLocaleString()}
      </p>
      {data.cars.map((car) => (
        <Car key={car.vin} {...car} />
      ))}
    </div>
  </>
);

export async function getServerSideProps(context) {
  const data = await fetchCars(false);

  return {
    props: {
      data,
    },
  };
}

export default SSRPage;
