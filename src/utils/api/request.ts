// libraries
import axios, { AxiosInstance, AxiosResponse } from "axios";
// constants
import { ENV } from "../constants";
// enums
import { HttpMethods } from "../enums/httpMethods";

// types
type HttpMethodsType = HttpMethods;

// interfaces
interface IHttpClientRequest {
  method: HttpMethodsType;
  path: string;
  data?: object;
  optionalHeaders?: object;
  optionalConfig?: object;
  timeout?: number;
}

/**
 * @module utils
 * @function httplClientInstance
 * @description A method to create a new axios instance
 * @param {{ baseURL: string, timeout: number, headers: object }}
 * @returns {AxiosResponse}
 */
const httplClientInstance: AxiosInstance = axios.create({
  baseURL: ENV.BFF_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

/**
 * @module utils
 * @function httpClientRequest
 * @description A method to make a request to the server using axios instance
 * @param {IHttpClientRequest}
 * @returns {Promise<AxiosResponse> }
 */
export const httpClientRequest = async ({
  method,
  path,
  data = {},
  optionalHeaders = {},
  optionalConfig = {},
}: IHttpClientRequest): Promise<AxiosResponse> => {
  try {
    const response = await httplClientInstance.request({
      method,
      baseURL: `${ENV.BFF_URL}/${path}`,
      data,
      headers: { ...optionalHeaders },
      ...optionalConfig,
    });
    return response;
  } catch (error) {
    return error;
  }
};
