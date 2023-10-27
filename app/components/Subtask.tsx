import { useAppSelector } from "@/redux/store";
import { SubtaskInterface } from "@/ts/types";

const Subtask = ({
  title,
  isCompleted,
  subtask,
  toggleCompleted,
}: {
  title: string;
  isCompleted: boolean;
  subtask: SubtaskInterface;
  toggleCompleted: (subtaskToToggle: SubtaskInterface) => void;
}) => {
  const isLightTheme = useAppSelector(
    (state) => state.themeReducer.value.isLightTheme
  );

  return (
    <div
      className={`w-full p-3 ${
        isLightTheme ? "bg-light_grey" : "bg-very_dark_grey"
      } rounded-[4px]`}
    >
      <label className="flex items-center gap-4 cursor-pointer">
        <input
          name="subtask-checkbox"
          className="checkbox"
          checked={isCompleted}
          type="checkbox"
          onChange={() => toggleCompleted(subtask)}
        />
        <p
          className={`p-md ${
            isCompleted
              ? "text-medium_grey/50 line-through"
              : isLightTheme
              ? "text-black"
              : "text-white"
          }`}
        >
          {title}
        </p>
      </label>
    </div>
  );
};

export default Subtask;
