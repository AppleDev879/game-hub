import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9f1b3841a70448e08d0793966218d845",
  },
});
