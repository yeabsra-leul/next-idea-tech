import React from "react";
import { Center, Flex } from "@mantine/core";
import { PiFolderOpenDuotone } from "react-icons/pi";

type EmptyMessageProps = {
  message:string;
};


const Empty = ({ message }: EmptyMessageProps) => {
  if (message === undefined) message = "No data found";
  return (
    <Center h={"100%"} py="xl">
      <Flex align="center" direction="column" gap={24}>
        <div className="font-semibold text-body">{message}</div>
        <PiFolderOpenDuotone size={48} className="text-primary" />
      </Flex>
    </Center>
  );
}

export default Empty;
