import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const Rate = (props) => {
  const { itemRate } = props;

  const maxRate = 5;
  const newRate = maxRate - itemRate;

  const filledStars = [];
  const borderStars = [];

  for (let i = 1; i <= itemRate; i++) {
    filledStars.push(<StarIcon key={i} className="starIcon" />);
  }

  for (let i = 1; i <= newRate; i++) {
    borderStars.push(<StarBorderIcon key={i} className="starIcon" />);
  }
  return (
    <div>
      {filledStars} {borderStars}
    </div>
  );
};

export default Rate;
