import axios from '../plugins/axios';


export async function register (userData) {
  try {
    const response = await axios.post(
      `/auth/signup`,
      JSON.stringify(userData),
    );
    alert(response.message);
    return response;
  } catch(err) {
    console.log(err);
    return Promise.reject(err);
  };
};
