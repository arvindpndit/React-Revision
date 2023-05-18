import ProfileClass from "./ProfileClass";
import ProfileFunction from "./ProfileFunction";

const About = () => {
  return (
    <div className="h-screen w-9/12 mx-auto">
      <div className="mb-6">This is About Section 🚀</div>
      <div className="flex justify-between ">
        <ProfileFunction name={"Arvind"} />
        <ProfileClass name={"Arvind"} />
      </div>
    </div>
  );
};

export default About;
