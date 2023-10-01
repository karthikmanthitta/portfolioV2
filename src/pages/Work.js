import Skills from "../components/Skills";

const Work = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex gap-10 w-full">
        <div className="w-1/4">
          <Skills />
        </div>
        <div className="w-3/4">work</div>
      </div>
    </div>
  );
};

export default Work;
