import { Button, HStack } from "../../Design";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
const QuantityPicker = ({ handleChange, min, max, value }) => {
  return (
    <HStack
      className={
        "items-center gap-2 p-2 bg-light text-terciary rounded-md border border-solid border-gray-300"
      }
    >
      <Button
        className={"p-0  font-light text-terciary"}
        variant="unstyled"
        onClick={() => {
          let v = value - 1;
          handleChange(v);
        }}
        disabled={value === min}
      >
        <IoMdRemove />
      </Button>
      <input
        type={"number"}
        step="0.01"
        className="border-0 outline-none appearance-none w-[50px] bg-transparent text-center"
        value={value || 0}
        onChange={(e) => {
          const value = e.target.value;
          handleChange(value);
        }}
        min={min || 0}
        max={max || null}
      />
      <Button
        className={"p-0  font-light text-terciary"}
        variant="unstyled"
        onClick={() => {
          const v = value + 1;
          handleChange(v);
        }}
        disabled={value === max}
      >
        <IoMdAdd />
      </Button>
    </HStack>
  );
};

export default QuantityPicker;
