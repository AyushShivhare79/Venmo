interface props {
  onSelect: (value: string) => void;
  options: any;
}

export const Select = ({ onSelect, options }: props) => {
  return (
    <>
      <div className="">
        <select
          onChange={(e) => {
            onSelect(e.target.value);
          }}
          className="w-full border rounded-md p-2 bg-white focus:border-blue-500 focus:border-2"
        >
          {options.map((x: any) => (
            <option key={x.key}>{x.value}</option>
          ))}
        </select>
      </div>
    </>
  );
};
