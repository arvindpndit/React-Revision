import { useState } from "react";
import { sectionData } from "../constants";

const Section = ({ title, description }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className=" border border-green-300 rounded-2xl p-2 my-3">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          className="px-3 py-1 rounded-2xl bg-green-100"
          onClick={() => setShowContent(!showContent)}
        >
          {showContent ? "Hide" : "Show"}
        </button>
      </div>
      {showContent && <h3>{description}</h3>}
    </div>
  );
};

const Instamart = () => {
  return (
    <div className="min-h-screen w-9/12 mx-auto">
      {sectionData.map((oneSection) => {
        return (
          <Section
            key={oneSection.id}
            title={oneSection.title}
            description={oneSection.description}
          />
        );
      })}
    </div>
  );
};

export default Instamart;
