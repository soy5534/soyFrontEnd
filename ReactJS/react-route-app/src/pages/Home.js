import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <ul>
                <li><Link to="/about">소개</Link></li>
                <li><Link to="/profile/firstuser">일용자 프로필</Link></li>
                <li><Link to="/profile/seconduser">이용자 프로필</Link></li>
                <li><Link to="/profile/thirduser">삼용자 프로필</Link></li>
                <li><Link to="/articles">게시글 목록</Link></li>
            </ul>
            <Link to="/about">소개</Link>  
            <Link to="/profile">프로필</Link>
        </>
    )
}

export default Home;