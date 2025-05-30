import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';

export const errorHandler = (error: unknown) => {
  let errorMessage = 'Oops, something went wrong! Try again later!';
  const isAxios = isAxiosError(error);

  if (isAxios && error.response?.data) {
    errorMessage = error.response.data.message;
  }

  console.error(error);

  toast.error(errorMessage, {
    autoClose: 3000,
    position: 'top-right',
  });
};