import api from "../../../../infra/api";

export const getReposByUser = async (url: string): Promise<any> => {
  try {
    const response = await api.get(url);

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


