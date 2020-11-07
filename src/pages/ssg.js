import Car from "../components/Car";
import fetchCars from "./api/fakeCars";

const SSGPage = ({ data }) => (
  <>
    <div className="type">
      <h3 className="title">Static-Site Generation</h3>
      <h4 className="description">
        All data is being fetched a single time on the server and displayed to
        all clients
      </h4>
      <h4 className="description">
        (Notice the date when data was generated never changes)
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
  const data = await new Promise((resolve) =>
    fetchCars(null, { json: (input) => resolve(input) })
  );

  /*
   * When using getStaticProps, local API routes cannot be used
   * because the server is not running during static generation.
   * We can get around this by calling the API handler directly
   * with mocked server routing.
   */

  return {
    props: {
      data,
    },
  };
}

export default SSGPage;
