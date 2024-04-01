import { useNavigate, useParams } from "react-router-dom";

const data = {
    firstuser : { name : "일용자", introduce : "리액트가 어려운 개발자" },
    seconduser : { name : "이용자", introduce : "리액트가 쉬운 개발자" },
    thirduser : { name : "삼용자", introduce : "리액트가 재밌는 개발자" }
}

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return(
        <>
            <h1>사용자 프로필</h1>
                {profile ? (
                    <>
                        <h2>{profile.name}</h2>
                        <p>{profile.introduce}</p>
                    </>
                ) : (
                    <p>존재하지 않는 프로필입니다.</p>
                )}            
                <button onClick={goBack}>뒤로가기</button>
        </>
    )
}

export default Profile;