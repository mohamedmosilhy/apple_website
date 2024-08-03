import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className=" absolute h-full w-full left-0  top-0 flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;
