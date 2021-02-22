import axios from "axios";

export const BITCOIN_SERVICE = () =>
  axios({
    method: "GET",
    url: "https://api.coindesk.com/v1/bpi/historical/close.json",
  });
