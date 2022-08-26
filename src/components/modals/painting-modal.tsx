interface Props {
  path: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

export const PaintingModal: React.FC<Props> = (props) => {
  if (!props.open) return null;

  return (
    <div
      className="absolute top-0 z-[99] left-0 w-full h-screen grid place-items-center min-h-[41.6875rem]
      md:min-h-[80rem] xl:min-h-[64rem]
    "
    >
      <div
        className="fixed inset-0 z-[98] bg-neutral-800/80"
        onClick={() => props.onClose()}
      ></div>
      <div className="relative z-[100] container sm:w-max">
        <img src={props.path} alt={props.alt} />
        <button
          onClick={() => props.onClose()}
          className="absolute top-[-3.125rem] text-neutral text-[0.875rem] font-bold right-0"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};
