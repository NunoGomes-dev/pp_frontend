import { forwardRef, memo } from "react";

const Checkbox = forwardRef(({ children, className, ...others }, ref) => {
  return (
    <label className="flex flex-row gap-2">
      <input ref={ref} className={`${className}`} type="checkbox" {...others} />
      {children}
    </label>
  );
});
export default memo(Checkbox);
