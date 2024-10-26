type Props = {
  title: string;
  description: string;
};

const AuthSectionHeader = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="heading-4 font-semibold text-foreground">{title}</h4>

      <p className="body-1 font-light text-gray">{description}</p>
    </div>
  );
};

export default AuthSectionHeader;
