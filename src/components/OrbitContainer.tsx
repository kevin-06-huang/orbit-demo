import Moon from "./Moon";

const OrbitContainer = () => {
  return (
    <div className="ellipse-container">
      <svg width="1100" height="400">
        <path
          d="M0,100 a550,150 0 1,0 1100,0 a550,150 0 1,0 -1100,0"
          fill="none"
          stroke="green"
          stroke-dasharray="5,5"
        />
      </svg>
      <Moon/>
    </div>
  );
};

export default OrbitContainer;
