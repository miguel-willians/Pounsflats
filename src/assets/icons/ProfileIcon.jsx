/* eslint-disable react/prop-types */
function ProfileIcon({ className }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M21.5625 19C26.1875 19 30 22.8125 30 27.4375V29C30 30.6875 28.625 32 27 32H5C3.3125 32 2 30.6875 2 29V27.4375C2 22.8125 5.75 19 10.375 19C12.1875 19 13 20 16 20C18.9375 20 19.75 19 21.5625 19ZM27 29V27.4375C27 24.4375 24.5625 22 21.5625 22C20.625 22 19.1875 23 16 23C12.75 23 11.3125 22 10.375 22C7.375 22 5 24.4375 5 27.4375V29H27ZM16 18C11 18 7 14 7 9C7 4.0625 11 0 16 0C20.9375 0 25 4.0625 25 9C25 14 20.9375 18 16 18ZM16 3C12.6875 3 10 5.75 10 9C10 12.3125 12.6875 15 16 15C19.25 15 22 12.3125 22 9C22 5.75 19.25 3 16 3Z"
        fill="currentColor"
        fillOpacity="0.24"
      />
    </svg>
  );
}

export default ProfileIcon;
