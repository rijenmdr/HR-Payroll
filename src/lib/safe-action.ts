import { VALIDATION_MESSAGE } from '@/static/validation';
import { createSafeActionClient } from 'next-safe-action';

export const actionClient = createSafeActionClient({
  handleServerError(error) {
    return error?.message || VALIDATION_MESSAGE.SOMETHING_WENT_WRONG;
  },
});
