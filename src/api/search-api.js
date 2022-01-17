import axios from "axios";
import { useEffect, useState } from "react";
const token =
  "89d274837577f4c689c04191ef58b66059a0b0d167c61e24a876320b753c27897958838d66a2550d";
const url = "https://ris.euromed-omsk.ru/api/v1.0";

const authAxios = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

function SearchBar() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
      try {
    const res = await authAxios
    .get(`${url}/services?filter%5B%3Eid%5D=10&sort=-id&limit=10`)
    .then((response) => setInfo(response.data))
      } catch (err) {
          alert(err.message);
      }
  }

  const getInfo2 = async () => {
    try {
  const res = await authAxios
  .get(`${url}/services?filter%5B%3Eid%5D=10&sort=-id&limit=20`)
  .then((response) => setInfo(response.data))
    } catch (err) {
        alert(err.message);
    }
}

  return (
    <div className="search">
      <div className="dataResult"></div>
      {info.data ? info.data.map((elem) => <p key={elem.id}>{elem.title}</p>) : "Идет загрузка..."}
    </div>
  );
}

export default SearchBar;
