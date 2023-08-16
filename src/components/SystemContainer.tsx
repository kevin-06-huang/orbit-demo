import Planet from "./Planet";
import OrbitContainer from "./OrbitContainer";

const SystemContainer = () => {
  return (
    <>
      <OrbitContainer />
      <div className="center-container">
        <Planet />
      </div>
    </>
  );
};

export default SystemContainer;
