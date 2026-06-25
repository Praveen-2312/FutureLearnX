function ProgressBar({ progress }) {
  return (
    <div className="progress-container">
      <div
        className="progress-fill"
        style={{
          width: `${progress}%`,
        }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;