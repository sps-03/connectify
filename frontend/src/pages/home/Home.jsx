import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl justify-around overflow-hidden rounded-xl bg-gray-500 bg-opacity-10 p-8 shadow-xl backdrop-blur-sm sm:h-[450px] md:h-[550px]">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
