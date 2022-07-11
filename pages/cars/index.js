import Card from "../../components/Card"

export const getServerSideProps = async () => {

  console.log()
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/`);
  const cars = await res.json();

  return {
    props: {
      cars,
      revalidate: 5,
    },
  };
};

const Cars = ({ cars }) => {
 
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className=" text-orange-600 font-bold text-3xl my-5">Available Cars</h1>

      <div className="grid lg:grid-cols-4 grid-cols-3 gap-3">
        {cars.map((car) => {
        
          return (
            
              <Card
                key={car._id}
                brand={car.brand}
                id={car._id}
                make={car.make}
                url={car.picture}
                year={car.year} 
                km={car.km}
                cm3={car.cm3}
                price={car.price}
                />
            
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
