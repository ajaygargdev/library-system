import axiosClient from "../Config/Axios.config";
import { BOOKS_URL } from "../Constents";

export const getBooks = async (searchQuery, filterReadStatus) => {
  try {
    const params = new URLSearchParams();

    if (searchQuery) params.set("search", searchQuery);
    if (filterReadStatus) params.set("status", filterReadStatus.toLowerCase());
    const query = params.toString() ? `?${params.toString()}` : "";

    const res = await axiosClient.get(`${BOOKS_URL}${query}`);
    if (res?.status && res?.status === 200 && res.data) {
      return {
        success: true,
        data: res.data,
      };
    }
    return { success: false, error: "error" };
  } catch (err) {
    return {
      success: false,
      error: err?.message,
    };
  }
};

export const getBookById = async (id) => {
  try {
    const res = await axiosClient.get(`${BOOKS_URL}/${id}`);
    if (res?.status && res?.status === 200 && res.data) {
      return {
        success: true,
        data: res.data,
      };
    }
    return { success: false, error: "error" };
  } catch (err) {
    return {
      success: false,
      error: err?.message,
    };
  }
};

export const addBook = async (book) => {
  try {
    const res = await axiosClient.post(`${BOOKS_URL}`, book);
    if (res?.status && res?.status === 201) {
      return {
        success: true,
        data: res.data,
      };
    }
    return { success: false, error: "error" };
  } catch (err) {
    return {
      success: false,
      error: err?.message,
    };
  }
};

export const updateStatus = async (id) => {
  try {
    const res = await axiosClient.put(`${BOOKS_URL}/${id}`);
    if (res?.status && res?.status === 200 && res.data) {
      return {
        success: true,
        data: res.data,
      };
    }
    return { success: false, error: "error" };
  } catch (err) {
    return {
      success: false,
      error: err?.message,
    };
  }
};


export const deleteBook = async (id) => {
    try {
      const res = await axiosClient.delete(`${BOOKS_URL}/${id}`);
      if (res?.status && res?.status === 200) {
        return {
          success: true,
          data: res.data,
        };
      }
      return { success: false, error: "error" };
    } catch (err) {
      return {
        success: false,
        error: err?.message,
      };
    }
  };