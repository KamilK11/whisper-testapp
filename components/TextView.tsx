import TextViewEmptyPlaceholder from "./textview-empty-placeholder";

interface Props {
  text: string;
}

const TextView = ({ text }: Props) => {
  return (
    <div className="cols-span-3 lg:col-span-4 lg:border-l">
      <div className="space-y-4 p-10">
        <div className="rounded-md border border-dashed">
          {text == "" ? (
            <TextViewEmptyPlaceholder />
          ) : (
            <div className="p-5 h-[450px]">{text}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextView;
