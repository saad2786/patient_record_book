import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";

export const DatePicker = ({
  control,
  name,
  placeholder,
  defaultValue,
  disabled,
  dateRef,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value } }) => (
          <ReactDatePicker
            className="w-full rounded-xl border border-slate-500 p-3"
            ref={dateRef}
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
            dateFormat="yyyy-MM-dd"
            disabled={disabled}
            placeholderText={placeholder}
          />
        )}
      />
    </>
  );
};
