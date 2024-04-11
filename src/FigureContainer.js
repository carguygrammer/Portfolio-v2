import Figure from "./Figure";
const FigureContainer = ({
  detailsVisible,
  toggleDetails,
  setDetailsVisible,
}) => {
  return (
    <div className="self-contained figure-container">
      <Figure detailsVisible={detailsVisible} toggleDetails={toggleDetails} />
    </div>
  );
};

export default FigureContainer;
