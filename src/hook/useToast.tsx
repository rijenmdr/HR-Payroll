import {
  Alert02Icon,
  CancelCircleIcon,
  InformationCircleIcon,
  Tick01Icon,
} from 'hugeicons-react';
import { toast } from 'sonner';

import { ToastType } from '@/type/toast';

const useToast = () => {
  const showToast = (type: ToastType, message: string) => {
    switch (type) {
      case 'success':
        toast.success(message, {
          icon: <Tick01Icon className="text-green-500" />,
        });
        break;
      case 'error':
        toast.error(message, {
          icon: <CancelCircleIcon className="text-red-500" />,
        });
        break;
      case 'info':
        toast.info(message, {
          icon: <InformationCircleIcon className="text-blue-500" />,
        });
        break;
      case 'warning':
        toast.warning(message, {
          icon: <Alert02Icon className="text-yellow-500" />,
        });
        break;
      default:
        toast('Hello, Sonner!');
    }
  };

  return { showToast };
};

export default useToast;
