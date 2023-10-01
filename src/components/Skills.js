import WorkCardAgile from "./WorkCardAgile";
import WorkCardContainer from "./WorkCardContainer";
import WorkCardVcs from "./WorkCardVcs";
import WorkCardWeb from "./WorkCardWeb";

const Skills = () => {
  return (
    <div className="font-['Raleway'] text-light flex flex-col p-4 items-center gap-8">
      <div className="font-bold text-3xl items-center">Skills</div>
      <div className="flex flex-col gap-4">
        <WorkCardWeb />
        <WorkCardVcs />
        <WorkCardAgile />
        <WorkCardContainer />
      </div>
    </div>
  );
};

export default Skills;
