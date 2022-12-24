import axios from "axios";

export const apiAuth = axios.create({
  baseURL: "https://json-web-server-m3kenzie-andersonkeller.onrender.com",
});
export const apiConsume = axios.create({
  baseURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
});
