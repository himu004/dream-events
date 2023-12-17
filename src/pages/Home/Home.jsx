import Events from "../../components/Events/Events";
import Banner from "../../components/Header/Banner";
import OurTeam from "../../components/OurTeam/OurTeam";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Events/>
            <Testimonials/>
            <OurTeam/>
        </div>
    );
};

export default Home;