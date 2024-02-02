"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Radera ärende</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Radera ärende</AlertDialog.Title>
        <AlertDialog.Description>
          Är du säker på att du vill radera ärendet? Det går inte att ångra
          detta.
        </AlertDialog.Description>
        <Flex mt="4" gap="3">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Avbryt
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red">Radera</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
