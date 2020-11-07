import faker from "faker";

const handler = (req, res) => {
  const cars = Array.from({ length: 100 }, () => ({
    vin: faker.vehicle.vin(),
    manufacturer: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    color: faker.internet.color()
  }));

  return res.json({
    date: new Date(),
    cars
  });
};

export default handler;
