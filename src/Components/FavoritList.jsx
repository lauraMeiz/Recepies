function FavoritList({ favoriteList, dish, deleteHandle }) {
  //   const handleDelete = (idMeal) => {
  //     deleteHandle(parseInt(idMeal));
  //     console.log(idMeal);
  //   };

  return (
    <>
      <div className="oneRecept favorite">
        <h1 key={dish.idMeal}>
          {dish.strMeal}{" "}
          <span style={{ fontStyle: "italic", fontSize: "17px" }}>
            {dish.strArea}&{dish.strCategory}
          </span>
        </h1>
        <div onClick={() => deleteHandle(dish.idMeal)} className="ok">
          Not Favorite ?{" "}
        </div>

        <img src={dish.strMealThumb} alt="food" />
        <table>
          <tr className="title">
            <th className="none"> Ingredients</th>
            <th></th>

            <th>Steps</th>
          </tr>
          <tr className="ingridient">
            <th>
              {Object.keys(dish).map(
                (f, i) =>
                  f.substring(0, 13) === "strIngredient" &&
                  dish[f] !== "" &&
                  dish[f] !== null && <li key={i}>{dish[f]}</li>
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
export default FavoritList;
