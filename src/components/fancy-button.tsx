import { forwardRef } from "react";

type InputProps = JSX.IntrinsicElements["input"];
const FancyButton = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} type="text" placeholder="aaa" />;
});

FancyButton.displayName = "Fancy";

export { FancyButton };
