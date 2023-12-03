import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import "./dropdown.css";

interface DropdownProps {
  size?: "small" | "medium" | "large";
  label: number;
  quantity: number;
  onClick?: () => void;
}

const orderQuantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Dropdown = ({
  size = "medium",
  label,
  quantity,
  ...props
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number>(1);
};
