import "./Home.css";

const itemNames = [
  "Card Stands",
  "Funko-Pop Stands",
  "Video Game Stands",
  "Box Organizers",
  "City Skylines",
];

export const ItemCarousel = () => {
  return (
    <div className="scrolling-words-container">
      <span>You can buy custom: </span>
      <div className="scrolling-words-box">
        <ul>
          {itemNames.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
