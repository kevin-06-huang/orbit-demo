import Planet from "./Planet";
import Moon from "./Moon";

const OrbitContainer = () => {
  return (
    <>
      <div className="center-container">
        <Moon />
        <Planet />
      </div>
    </>
  );
};

export default OrbitContainer;
