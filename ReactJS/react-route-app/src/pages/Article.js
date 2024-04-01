import { Link, useParams } from "react-router-dom";

const Article = () => {
    const {id} = useParams();
    return (
        <>
            <h2>게시글 {id}</h2>
        </>
    )
}

export default Article;