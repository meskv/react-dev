import React from "react";

const CopyNotification = ({ show, message = "✅ Copied to clipboard!" }) => {
  if (!show) return null;

  return (
    <div
      id="copyNotification"
      className="fixed top-4 right-4 rounded-lg shadow-md transition-opacity duration-300 z-50"
    >
      <p className="bg-emerald-100 text-gray-800 text-sm px-4 py-2 rounded">
        {message}
      </p>
    </div>
  );
};

export default CopyNotification;
