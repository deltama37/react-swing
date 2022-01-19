import { FancyButton } from "@/components/fancy-button";
import { NextPage } from "next/types";
import { createRef } from "react";

const RefPage: NextPage = () => {
  const ref = createRef<HTMLInputElement>();

  const onClick = () => {
    ref.current?.focus();
  };

  return (
    <>
      <button onClick={onClick}>focus button</button>
      <FancyButton ref={ref}>Click me!</FancyButton>
    </>
  );
};
export default RefPage;
