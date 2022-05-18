// import Iframe from "react-iframe";

import { useState } from "react";

function OneRecept({ dish, getFavorite }) {
  const [video, setVideo] = useState(0);
  // Object.keys(dish).filter((f) =>
  //   // console.log(f.substring(0, 13) === "strIngredient")
  // );
  const playVideo = (dish) => {
    setVideo(dish);
    console.log(dish.strYoutube);
  };
  const cancelVideo = () => {
    setVideo(0);
  };
  // console.log(Object.keys(dish));
  return (
    <>
      <div className="oneRecept">
        <h1 key={dish.idMeal}>
          {dish.strMeal}{" "}
          <span style={{ fontStyle: "italic", fontSize: "17px" }}>
            {dish.strArea}&{dish.strCategory}
          </span>
        </h1>
        <div onClick={() => getFavorite(dish.idMeal)} className="ok">
          Favorite ?{" "}
        </div>
        <img src={dish.strMealThumb} alt="food" />
        {/* <img
          // className="ingridient-img"
          src={`https://www.themealdb.com/images/ingredients/${dish}
            .split(" ")
            .join("%20")}.png`}
          alt=""
        /> */}
        <table>
          <tr className="title">
            <th> Ingredients</th>
            <th> </th>

            <th>Steps</th>
          </tr>
          <tr className="ingridient">
            <th className="igri">
              {Object.keys(dish).map(
                (f, i) =>
                  f.substring(0, 13) === "strIngredient" && (
                    // dish[f] !== "" &&
                    // dish[f] !== null

                    <li key={i}>
                      {/* <img
                        // className="ingridient-img"
                        src={`https://www.themealdb.com/images/ingredients/${dish[
                          f
                        ]
                          .split(" ")
                          .join("%20")}.png`}
                        alt=""
                      /> */}
                      {dish[f]}
                    </li>
                  )
              )}
            </th>
            <th>
              {Object.keys(dish).map(
                (f, i) =>
                  f.substring(0, 10) === "strMeasure" && (
                    <li key={i}>{dish[f]}</li>
                  )
              )}
            </th>
            {/* <td>{dish.strMeasure1}</td> */}
            <td className="instruction">{dish.strInstructions}</td>
          </tr>
        </table>{" "}
        <button onClick={() => playVideo(dish)}>Play</button>
        {video ? (
          <div className="video">
            <iframe
              video={dish}
              src="http://www.youtube.com/embed/xDMP3i36naA"
            ></iframe>
            <button onClick={cancelVideo}>Cancel</button>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default OneRecept;
