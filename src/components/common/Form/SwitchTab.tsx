import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

type SwitchTab = {
  children: React.ReactNode;
  label: string;
};

export const SwitchTab = ({ children, label }: SwitchTab) => {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="flex items-center h-[50px] w-full bg-sidebar-footer rounded-[10px]"
    >
      {children}
    </div>
  );
};

type SwitchTabItem = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  id: string;
};

SwitchTab.Item = function SwitchTabItem({
  icon: Icon,
  children,
  id,
}: SwitchTabItem) {
  const { theme, setTheme } = useTheme();
  const isActive = theme === id;

  const handleClick = () => {
    setTheme(id);
  };

  return (
    <div
      role="tab"
      tabIndex={0}
      id={id}
      aria-selected={isActive}
      aria-controls={`${id}-panel`}
      className={cn(
        'flex-1 flex gap-[10px] justify-center items-center p-4 h-full rounded-[10px] cursor-pointer body-1 font-light',
        isActive ? 'bg-primary text-white shadow-2xl' : 'text-foreground'
      )}
      onClick={handleClick}
    >
      {Icon && <Icon />}
      {children}
    </div>
  );
};
