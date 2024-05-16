interface props {
  title: string;
  children: any;
}
export const Card = ({ title, children }: props) => {
  return (
    <>
      <div className="border p-4">
        <div className="border-b pb-2 text-xl">{title}</div>
        <div className="pt-2">{children}</div>
      </div>
    </>
  );
};
