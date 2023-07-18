export default function BlueButton(props) {
  return (
    <button
      type="button"
      className="truncate px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex mb-1 w-full justify-center"
      onClick={props.onClick}
    >
      <span>{props.text}</span>
    </button>
  );
}
