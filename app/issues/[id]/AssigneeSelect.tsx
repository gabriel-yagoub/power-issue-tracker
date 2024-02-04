"use client";

import { Select } from "@radix-ui/themes";
import React from "react";

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Tilldela" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Förslag</Select.Label>
          <Select.Item value="1">Chara Eri</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
