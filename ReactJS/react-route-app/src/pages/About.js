import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const About = () => {
//  const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get("detail");
    const mode = searchParams.get("mode");
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해보는 프로젝트입니다.</p>
            <p>쿼리스트링 : </p>
            <p>detail : {detail}</p>
            <p>mode : {mode}</p>
            <button onClick={goBack}>뒤로가기</button>
        </>
    )
}

export default About;