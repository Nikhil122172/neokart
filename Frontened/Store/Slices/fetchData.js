import axios from "axios";

export const FETCH = "FETCH DATA SUCCESSFUL"

const fetchProdduct = () => async dispatch =>{
    const response = await axios.get("https://neokartb2.onrender.com/api/adminData");
    console.log("ye fetched data hai18: ",response.data);
    
    dispatch({type: FETCH, payload: response.data});
};

export default fetchProdduct;