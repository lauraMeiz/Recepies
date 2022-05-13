function OneRecept({ dish, getFavorite }) {
  // Object.keys(dish).filter((f) =>
  //   // console.log(f.substring(0, 13) === "strIngredient")
  // );

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
        <table>
          <tr className="title">
            <th> Ingredients</th>
            <th> </th>

            <th>Steps</th>
          </tr>
          <tr className="ingridient">
            <th>
              {Object.keys(dish).map(
                (f, i) =>
                  f.substring(0, 13) === "strIngredient" && (
                    <li key={i}>{dish[f]}</li>
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
        </table>
      </div>
    </>
  );
}
export default OneRecept;
