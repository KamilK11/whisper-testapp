import TextViewEmptyPlaceholder from "./textview-empty-placeholder";

interface Props {
  text: string;
}

const TextView = ({ text }: Props) => {
  return (
    <div className="cols-span-3 lg:col-span-4 lg:border-l">
      <div className="space-y-4 p-10">
        <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
          {text == "" ? <TextViewEmptyPlaceholder /> : text}
        </div>
      </div>
    </div>
  );
};

export default TextView;
