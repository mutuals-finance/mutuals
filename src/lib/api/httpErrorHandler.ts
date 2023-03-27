import axios from 'axios';
import { UseFormSetError } from 'react-hook-form';

type FieldErrorType = {
  field: string;
  message: string;
  rule: string;
};

type ErrorResponse = {
  errors: FieldErrorType[];
};

export const httpErrorHandler = (
  error: unknown,
  setError: UseFormSetError<any> | undefined
) => {
  if (axios.isAxiosError(error) && error.response) {
    if ((error.response?.data as any).msg) {
      //toast.error((error.response?.data as any).msg);
      return;
    }

    const errorsList = (error.response?.data as ErrorResponse).errors || [];
    errorsList.forEach((fieldError) => {
      const { field, message } = fieldError;
      if (setError) {
        setError(field, { type: 'custom', message });
      }
    });
    // toast.error('Form is invalid.');
  } else {
    //toast.error('Something wrong happened. Try again later.');
  }
};
