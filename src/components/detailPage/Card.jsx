import DetailCountryInfo from "./DetailCountryInfo";

const Card = ({ country }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-96 mx-10 md:mx-20 gap-10">
      <div className=" flex content-center items-center h-full w-full">
        <img
          className="w-full h-96"
          src={country[0].flags.png}
          alt={country[0].name.common}
        />
      </div>
      <DetailCountryInfo country={country[0]} />
    </div>
  );
};

export default Card;
