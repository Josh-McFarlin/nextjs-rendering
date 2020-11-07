import Car from "../components/Car";
import { fetchCars } from "../actions/api";

const SSGPage = ({ data }) => (
  <>
    <div className="type">
      <h3 className="title">Static-Site Generation</h3>
      <h4 className="description">
        All data is being fetched a single time on the server and displayed to
        all clients
      </h4>
      <a
        className="link"
        href="https://github.com/Josh-McFarlin/nextjs-rendering/blob/main/src/pages/ssg.js"
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

export async function getStaticProps(context) {
  const data = await fetchCars(false);

  /*
   * This is actually an anti-pattern!
   * If using local data/functions, you should use them directly
   * within this method instead of calling an API route.
   * This page is only calling the API for consistency across pages.
   */

  return {
    props: {
      data,
    },
  };
}

export default SSGPage;
