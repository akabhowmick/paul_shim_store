import "./Home.css";
import logo from "../../assets/Main/logo.png";
import { useState } from "react";
import { reviewTexts } from "../../utils/HelpfulText";

export const ReviewCarousel = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(2);
  const [prevReviewIndex, setPrevReviewIndex] = useState(currentReviewIndex - 1);
  const [nextReviewIndex, setNextReviewIndex] = useState(currentReviewIndex + 1);

  const getClassesForCarouselItem = (id: number) => {
    let defaultClasses = "review-item ";
    if (id === currentReviewIndex) {
      defaultClasses += " active";
    } else if (id === prevReviewIndex) {
      defaultClasses += " prev";
    } else if (id === nextReviewIndex) {
      defaultClasses += " next";
    }
    return defaultClasses;
  };

  const reviewBoxItems = reviewTexts.map((review) => {
    return (
      <div key={review.id} className={getClassesForCarouselItem(review.id)}>
        <div className="review-author">
          <div className="avatar">
            <img src={logo} alt="ava-1" />
          </div>
          <div className="details">
            <h3 className="name">{review.name}</h3>
            <h4 className="date">{review.date}</h4>
          </div>
        </div>
        <h4 className="review-text">{review.review}</h4>
      </div>
    );
  });

  const handleBtnUpdate = (change: number) => {
    let newCurrent: number = currentReviewIndex + change;
    if (newCurrent < 0 || newCurrent >= reviewTexts.length) {
      newCurrent = 0;
    }
    let newPrev: number = newCurrent - 1 < 0 ? reviewTexts.length - 1 : newCurrent - 1;
    let newNext: number = newCurrent + 1 > reviewTexts.length - 1 ? 0 : newCurrent + 1;
    setCurrentReviewIndex(newCurrent);
    setPrevReviewIndex(newPrev);
    setNextReviewIndex(newNext);
  };

  return (
    <div>
      <section className="reviews">
        <div className="review-title">What People Say</div>
        <h2 className="header-md">Trusted by Clients</h2>
        <div className="review-carousel">{reviewBoxItems}</div>
        <div className="slide-ctrl-container">
          <button onClick={() => handleBtnUpdate(1)}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <button onClick={() => handleBtnUpdate(-1)}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};
