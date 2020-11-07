import Car from "../components/Car";
import { fetchCars } from "../actions/api";

const SSRPage = ({ data }) => (
  <>
    <h3 className="type-title">Server-Side Rendering</h3>
    <h4 className="type-description">
      The page is being uniquely generated for each visitor on the server before
      sending the HTML and JavaScript to the client.
    </h4>
    <br />
    <p>Data Generated: {new Date(data.date).toLocaleString()}</p>
    {data.cars.map((car) => (
      <Car key={car.vin} {...car} />
    ))}
  </>
);

export async function getServerSideProps(context) {
  const data = await fetchCars();

  return {
    props: {
      data
    }
  };
}

export default SSRPage;
