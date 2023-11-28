export default function SelectTips(props) {
  return (
    <button onClick={props.clickSelectHandler} className=" px-auto py-3  mb-2 bg-indigo-600 rounded-md text-white text-center">
      {props.value} %
    </button>
  );
}
