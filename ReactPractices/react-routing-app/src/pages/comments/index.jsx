import useFetch from "../../hooks/use-fetch";

const CommentsList = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/comments");
  console.log(data);

  if (loading) return <h2>Loading comment details...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Comments List</h2>
      <ul>
        {data?.comments.length > 0
          ? data?.comments?.map((comment) => (
              <div
                key={comment.id}
                style={{
                  padding: "10px",
                  border: "2px solid red",
                  marginBottom: "5px",
                }}
              >
                <label style={{ padding: "10px", color: "blue" }}>
                  Title: {comment.body}
                </label>

                <label>Likes: {comment.likes}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
};

export default CommentsList;
