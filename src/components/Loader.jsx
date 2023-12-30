import { Triangle } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center items-center">
      <Triangle
        visible={true}
        height="150"
        width="150"
        color="#FFA500"
        ariaLabel="triangle-loading"
        wrapperClass="flex justify-center items-center"
      />
    </div>
  );
}

export default Loader;
