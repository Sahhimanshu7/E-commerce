import Header from "../Components/Header/Header";
import Body from "../Components/Body/Body";
import ProfileUser from "./ProfileUser";

const HomePage = () => {
    return(
        <div className="main-page">
            <Header />
            <Body />
            <ProfileUser />
        </div>
    )
}

export default HomePage;