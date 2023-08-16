import Planet from "./Planet";
import OrbitContainer from "./OrbitContainer";

const SystemContainer = () => {
  return (
    <>
      <div className="center-container">
        <OrbitContainer />
        <Planet />
      </div>
    </>
  );
};

export default SystemContainer;
