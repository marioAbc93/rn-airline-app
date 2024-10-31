import axios from "axios";

const options = {
  method: "GET",
  url: "https://sky-scanner3.p.rapidapi.com/flights/search-one-way",
  params: {
    fromEntityId: "BOG",
    toEntityId: "MED",
    market: "CO",
    locale: "es-MX",
    currency: "COP",
    cabinClass: "economy",
  },
  headers: {
    "x-rapidapi-key": "b7dacab9femshaa2f7add15c559dp135739jsn82798026ab3b",
    "x-rapidapi-host": "sky-scanner3.p.rapidapi.com",
  },
};

export async function FetchFlights() {
  try {
    const response = await axios.request(options);

    return response.data.data.flightQuotes.results;
  } catch (error) {
    console.error(error);
  }
}
