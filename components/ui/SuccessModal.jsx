export default function SuccessModal({ message, status, closeModalHandler }) {
  const modalClass =
    "absolute top-0 z-30 w-fit flex flex-row justify-center items-center gap-4 px-16 py-4 rounded-md bg-opacity-70 left-1/2 -translate-x-1/2";

  return (
    <div
      className={
        status === 201
          ? "bg-green-700 text-slate-200 " + modalClass
          : "bg-red-800 text-slate-200 " + modalClass
      }
    >
      <div>{message}</div>
      <div
        id="cancel"
        onClick={() => closeModalHandler()}
        className="w-12 h-12 hover:bg-green-900 rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}
