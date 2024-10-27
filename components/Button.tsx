import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant:string; 
  className?:string;
  full?:boolean; 
  onClick?: () => void; 
};

const Button = ({ type, title, icon, variant,full,className }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border w-40 h-11 ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && (
        <Image src={icon} alt={title} width={24} height={24} />
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer text-white">{title}</label>
    </button>
  );
};

export default Button;
