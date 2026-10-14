import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useSection } from "../content/useSection";

const TeamsPage = () => {
  const { heading, members = [] } = useSection("team.page");

  return (
    <>
      <Navbar />
      <div className="w-full max-w-400 m-auto mt-25 mb-10">
        <h1 className="text-center text-primary text-[30px]">{heading}</h1>
        <div className="w-40 h-1 bg-secondary mb-5 m-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 max-w-7xl m-auto px-10">
          {members.map((member) => (
            <div className="rounded-2xl w-80 md:w-92 h-100" key={member.id}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover object-top rounded-t-2xl mb-2"
              />
              <h3 className="text-[24px] text-secondary pl-5 mb-2">
                {member.name}
              </h3>
              <p className="text-[15px] pl-5">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamsPage;
