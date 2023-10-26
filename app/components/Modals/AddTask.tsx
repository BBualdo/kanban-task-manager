import { ModalsProps } from "@/ts/types";

const AddTask = ({ isLight, onClose }: ModalsProps) => {
  return (
    <div
      className={`${
        isLight ? "bg-white" : "bg-dark_grey"
      } z-50 rounded-[6px] p-8 w-[480px]`}
    >
      AddTask
    </div>
  );
};

export default AddTask;
