"use client";

import Button from "@/components/button";
import Confirm from "@/components/confirm";
import Dropdown from "@/components/dropdown";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h2>Games Shop</h2>

      <Button setOpen={setOpen}>Open</Button>

      <Confirm open={open} setOpen={setOpen} />

      <Dropdown />
    </>
  );
}
