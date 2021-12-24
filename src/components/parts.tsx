import { Button } from "@chakra-ui/react";
import type { FunctionComponent } from "react";

type Props = {
  user: number;
};

const Parts: FunctionComponent<Props> = ({ user }) => {
  return (
    <>
      <Button colorScheme="blue">Button{user}</Button>
    </>
  );
};

export default Parts;
