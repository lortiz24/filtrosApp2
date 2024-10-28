import "./iconComponent.css";
type Props = {
  url: string;
};
export const Icon = (props: Props) => {
  const { url } = props;
  return (
    <div className="icon-container">
      <img src={url} alt="Arrow Icon" className="icon" />
    </div>
  );
};
