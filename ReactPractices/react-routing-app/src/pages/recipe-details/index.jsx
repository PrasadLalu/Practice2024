import { useParams } from "react-router-dom";

const RecipeDetailsPage = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Recipe Details Page: {id}</h1>
        </div>
    );
}

export default RecipeDetailsPage;
