"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Radera ärende</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Radera ärende</AlertDialog.Title>
        <AlertDialog.Description>
          Är du säker på att du vill radera ärendet? Detta går inte att ångra.
        </AlertDialog.Description>
        <Flex mt="4" gap="3">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Avbryt
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              color="red"
              onClick={async () => {
                await axios.delete("/api/issues/" + issueId);
                router.push("/issues");
                router.refresh();
              }}
            >
              Radera
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
