"use client";

import Button from "@/app/components/button";
import Confirm from "@/app/components/confirm";
import Dropdown from "@/app/components/dropdown";
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
