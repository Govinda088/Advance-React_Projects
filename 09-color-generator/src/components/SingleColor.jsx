import { toast } from "react-toastify";

export const SingleColor = ({ color, index }) => {
  const { weight, hex } = color;

  const clicked = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color Copied to clipboard");
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("No Clipboard Found");
    }
  };
  return (
    <article
      className="color"
      style={{ background: `#${hex}` }}
      onClick={clicked}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
