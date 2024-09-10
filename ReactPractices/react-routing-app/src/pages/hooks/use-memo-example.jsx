import useFetch from "../../hooks/use-fetch";

const UseMemoHook = () => {
    const { data, loading, error } = useFetch("https://dummyjson.com/products");
    if (loading) return <h3>Product details are loading. Please wait...</h3>
    if (error) return <h3>{error}</h3>

    console.log(data);
    return (
        <div>
            <h3>useMemo hook</h3>
        </div>
    );
}

export default UseMemoHook;
