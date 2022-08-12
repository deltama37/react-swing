import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

const BinaryPage: NextPage = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [binaryText, setBinaryText] = useState<string>("");
  const [binaryNumber, setBinaryNumber] = useState<number>(0b0);

  useEffect(() => {
    setBinaryText(
      labels
        .map((label) => {
          if (answers.includes(label)) {
            return "1";
          }
          return "0";
        })
        .join("")
    );
    setBinaryNumber(parseInt(binaryText, 2));
  }, [labels, answers, binaryText]);

  return (
    <>
      <Box padding={10}>
        <Text>label: {labels.map((label) => label + ", ")}</Text>
        <Input
          onChange={(e) => {
            setLabels(e.target.value.split(""));
          }}
        />
        <Text>answer: {answers}</Text>
        <Input
          onChange={(e) => {
            setAnswers(e.target.value.split(""));
          }}
        />
        <Text>binaryText: {binaryText}</Text>
        <Text>binaryNumber: {binaryNumber}</Text>
      </Box>
    </>
  );
};

export default BinaryPage;
