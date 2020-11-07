import Car from "../components/Car";
import { fetchCars } from "../actions/api";

const SSGPage = ({ data }) => (
  <>
    <h3 className="type-title">Static-Site Generation</h3>
    <h4 className="type-description">
      All data is being generated a single time on the server and turned into
      static HTML
    </h4>
    <br />
    <p>Data Generated: {new Date(data.date).toLocaleString()}</p>
    {data.cars.map((car) => (
      <Car key={car.vin} {...car} />
    ))}
  </>
);

export async function getStaticProps(context) {
  const data = await fetchCars();

  /*
   * This is actually an anti-pattern!
   * If using local data/functions, you should use them directly
   * within this method instead of calling an API route.
   * This page is only calling the API for consistency across pages.
   */

  return {
    props: {
      data
    }
  };
}

export default SSGPage;
