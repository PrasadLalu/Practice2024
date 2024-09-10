import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";

const ReciepesList = () => {
  const location = useLocation();
  console.log(location);
    const { data, error, loading } = useFetch("https://dummyjson.com/recipes");
    const windowResize = useWindowResize();

  if (loading) return <h2>Loading reciping details...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Recipes List</h2>
      <h3>
        Current window width is {windowResize.width} and height is{" "}
        {windowResize.height}
      </h3>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes.map((recipe) => (
              <div key={recipe.id}>
                <img src={recipe?.image} />
                <label>{recipe?.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ReciepesList;
