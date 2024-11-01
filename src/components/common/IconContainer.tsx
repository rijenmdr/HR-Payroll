type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const IconContainer = ({
  children,
  onClick,
  className = 'w-10 h-10',
}: Props) => {
  return (
    <div
      className={`flex justify-center items-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconContainer;
