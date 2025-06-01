'use client';

import { toast, type ToastOptions } from 'react-toastify';

export const useToast = () => {
  const baseOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
  };

  const error = (message: string) => {
    toast.error(message, { ...baseOptions });
  };

  const success = (message: string) => {
    toast.success(message, { ...baseOptions });
  };

  const info = (message: string) => {
    toast.info(message, { ...baseOptions });
  };

  return { error, success,info };
};