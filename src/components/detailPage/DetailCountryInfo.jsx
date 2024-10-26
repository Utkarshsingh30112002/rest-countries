import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const DetailCountryInfo = ({ country }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  function clickedCountry(e) {
    navigate(`/detail/${e.target.id}`);
  }
  const nativeName = Object.keys(country.name.nativeName);
  const currencies = Object.keys(country.currencies).map((curr, index) => {
    if (index == 0) return curr;
    return ", " + curr;
  });
  const languages = Object.values(country.languages).map((curr, index) => {
    if (index == 0) return curr;
    return ", " + curr;
  });
  let borders = [];
  if (country.borders) {
    borders = country.borders.map((curr) =>
      useFetch(`/api/alpha/${curr}?fields=name`, setLoading)
    );
    if (!loading) {
      borders = borders.map((curr, index) => {
        if (!curr.name || !curr.name.common) return curr;
        return (
          <button
            onClick={clickedCountry}
            key={index}
            className="inline shadow m-1 p-2 bg-LME text-LMT dark:bg-DME dark:text-DMT"
            id={curr.name.official}
          >
            {curr.name.common}
          </button>
        );
      });
    }
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pb-20 md:pb-0 gap-10 gap-x-20 md:mx-10 text-LMT dark:text-DMT">
      <h1 className="md:col-span-2 text-2xl font-extrabold">
        {country.name.common}
      </h1>
      <div>
        <div>
          <h3 className="font-medium inline">Native Name: </h3>
          <p className="inline text-sm">
            {country.name.nativeName[nativeName[0]].common}
          </p>
        </div>
        <div>
          <h3 className="font-medium inline">Population: </h3>
          <p className="inline text-sm">{country.population}</p>
        </div>
        <div>
          <h3 className="font-medium inline">Region: </h3>
          <p className="inline text-sm">{country.region}</p>
        </div>
        <div>
          <h3 className="font-medium inline">Sub Region: </h3>
          <p className="inline text-sm">{country.subregion}</p>
        </div>
        <div>
          <h3 className="font-medium inline">Capital: </h3>
          <p className="inline text-sm">{country.capital}</p>
        </div>
      </div>
      <div>
        <div>
          <h3 className="font-medium inline">Top Level Domain: </h3>
          <p className="inline text-sm">{country.tld[0]}</p>
        </div>
        <div>
          <h3 className="font-medium inline">Currencies: </h3>
          <p className="inline text-sm">{currencies}</p>
        </div>
        <div>
          <h3 className="font-medium inline">Languages: </h3>
          <p className="inline text-sm">{languages}</p>
        </div>
      </div>
      <div className="md:col-span-2 mt-10">
        <h3 className="font-medium inline">Border Countries: </h3>
        {borders}
      </div>
    </div>
  );
};

export default DetailCountryInfo;
