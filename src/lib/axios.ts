import axios from "axios"

export default axios.create({
  baseURL: "https://petroplusapidev.document.lk/api/",

  headers: {
    "Content-Type": "application/json",
    AccessToken: process.env.NEXT_PUBLIC_API_KEY,
  },
})
