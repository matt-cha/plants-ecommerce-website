type BenefitBoxProps = {
  icon: string;
  title: string;
  description: string;
};

const BenefitBox = ({ icon, title, description }: BenefitBoxProps) => {
  return (
    <div className="flex flex-col items-center px-2 py-4 flex-1">
      <i className={`text-emerald-700 text-3xl ${icon}`}></i>
      <div className="text-slate-700 my-1">{title}</div>
      <div className="text-slate-700  text-center text-sm">{description}</div>
    </div>
  );
};
export default BenefitBox;
