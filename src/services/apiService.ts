import axios from "axios";

class ApiService {
  baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.BASE_API || "https://en.wttr.in";
  }

  // here is an example use:
  //   const { data, error } = await apiService.get<YourResponseType>('endpointhere');
  //   if (error) do something with error
  async get<T = any>(endpoint: string, params?: Record<string, any> | null) {
    try {
      const completeUrl = `${this.baseUrl}/${endpoint}`;
      const { data } = await axios.get<T>(completeUrl, { params });
      return { data };
    } catch (error: any) {
      return { error: error.message, status: error.response?.status };
    }
  }

  //Other HTTP methods
}

const apiService = new ApiService();
export default apiService;
