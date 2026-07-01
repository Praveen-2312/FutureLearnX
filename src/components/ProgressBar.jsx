import "./ProgressBar.css";

function ProgressBar({
  progress = 0,
  showPercentage = true,
}) {
  const value = Math.min(
    Math.max(progress, 0),
    100
  );

  const getColor = () => {
    if (value < 30) return "#ef4444";
    if (value < 70) return "#f59e0b";
    return "#22c55e";
  };

  const getStatus = () => {
    if (value === 100) return "Completed";
    if (value >= 70) return "Almost Done";
    if (value >= 30) return "In Progress";
    return "Getting Started";
  };

  return (
    <div className="progress-wrapper">
      <div className="progress-header">
        <span className="progress-title">
          {getStatus()}
        </span>

        {showPercentage && (
          <span className="progress-value">
            {value}%
          </span>
        )}
      </div>

      <div
        className="progress-container"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <div
          className="progress-fill"
          style={{
            width: `${value}%`,
            background: getColor(),
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;