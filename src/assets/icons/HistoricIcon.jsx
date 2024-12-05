/* eslint-disable react/prop-types */
function HistoricIcon({ className }) {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M0.5 5C0.5 3.375 1.8125 2 3.5 2H29.5C31.125 2 32.5 3.375 32.5 5V27C32.5 28.6875 31.125 30 29.5 30H3.5C1.8125 30 0.5 28.6875 0.5 27V5ZM30 19V13H12.8125V19H30ZM30 21.5H12.8125V27.5H29.25C29.625 27.5 30 27.1875 30 26.75V21.5ZM3 13V19H10.3125V13H3ZM12.8125 10.5H30V5.25C30 4.875 29.625 4.5 29.25 4.5H12.8125V10.5ZM10.3125 4.5H3.75C3.3125 4.5 3 4.875 3 5.25V10.5H10.3125V4.5ZM3 21.5V26.75C3 27.1875 3.3125 27.5 3.75 27.5H10.3125V21.5H3Z"
        fill="currentColor"
        fillOpacity="0.24"
      />
    </svg>
  );
}

export default HistoricIcon;
