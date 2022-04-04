import api from "../../../../infra/api";

export const getReposByUser = async (
  url: string,
  page: number,
  numberPerPage: number
): Promise<any> => {
  try {
    const response = await api.get(
      `${url}?page=${page}&per_page=${numberPerPage}`
    );

    const { data } = response;

    if (!data) {
      console.error("An error has occurrend!");
    }

    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const getUserInfo = async (name: string): Promise<any> => {
  try {
    const response = await api.get(`users/${name}`);

    const { data } = response;

    if (!data) {
      console.error("An error has occurrend!");
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};
