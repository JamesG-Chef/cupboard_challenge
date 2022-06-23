//import { useEffect, useState } from "react";
import styled from "styled-components";
import mealslist from "../data.js/meals";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const MealSelector = () => {
  let mealsPicked = [];
  while (mealsPicked.length < 7) {
    let randomNumber = Math.floor(Math.random() * mealslist.length);
    if (!mealsPicked.includes(mealslist[randomNumber])) {
      mealsPicked.push(mealslist[randomNumber]);
    }
  }
  return mealsPicked;
};
function Popular() {
  //const [meals, setMeals] = useState([]);
  const chosenMeals = MealSelector(mealslist);
  console.log(chosenMeals.image);
  return (
    <div>
      <Wrapper>
        <h1>This weeks dinners</h1>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}
        >
          {chosenMeals.map((meal, index) => {
           console.log(index)
              return (
                <SplideSlide key={meal.meal}>
                  <Card>
                    <h4>{meal.meal}</h4>
                    <img src={meal.image} alt={meal.meal} />
                    <Gradient />
                    <p>{meal.type}</p>
                    <p>{meal.convenience}</p>
                  </Card>
                </SplideSlide>
              );
            
          })}
        </Splide>
          </Wrapper>
          
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem orem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    height: 10rem;
    border-radius: 10%;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h4 {
    position: absolute;
    z-index: 10;
    bottom: 5%;
    color: white;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    // align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 20%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  border-radius: 5%;
`;
export default Popular;
