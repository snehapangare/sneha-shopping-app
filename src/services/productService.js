import axios from "axios"

export default getProductsAPI=async()=>{
    const response=await axios.get("/users.json")
    return response.data
}
const getProductByIdAPI = async (id) => {
    const response = await axios.get(`users.json/${id}`);
    return response.data;
  };
