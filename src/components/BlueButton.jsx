export default function BlueButton(props) {
  return (
    <button
      type="button"
      className="lg:truncate flex-col items-center px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex mb-1 w-full justify-center text-xs lg:text-xl"
      onClick={props.onClick}
    >
      <p>{props.text}</p>
    </button>
  );
}
