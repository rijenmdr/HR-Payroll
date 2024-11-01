import { Input, InputProps } from '@/components/ui/input';
import { Search01Icon } from 'hugeicons-react';

const SearchInput = ({ ...props }: InputProps) => {
  return (
    <div className="flex items-center gap-[10px] w-[260px] border rounded-[10px] py-3 px-4 border-gray-100 focus-within:border-primary">
      <Search01Icon className="text-foreground w-[24px] h-[24px]" />
      <Input {...props} className="p-0 h-fit border-none px-1" />
    </div>
  );
};

export default SearchInput;
