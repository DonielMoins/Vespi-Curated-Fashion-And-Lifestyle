"use client";
import { lato, pt_serif } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Buttons } from "../stories/Button";

interface AddToCartProps {
  size?: "small" | "medium" | "large";
  label: number;
  quantity: number;
  onClick?: () => void;
}

const formSchema = z.object({
  quantity: z
    .number()
    .min(1, {
      message: "Please enter quantity",
    })
    .max(10),
});

const orderQuantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const AddToCartForm = ({
  size = "medium",
  label,
  quantity,
  ...props
}: AddToCartProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={pt_serif.className}>
                Choose Quantity
              </FormLabel>
              <FormControl>
                <Input
                  className={[
                    "rounded-none border border-black",
                    pt_serif.className,
                  ].join(" ")}
                  type="number"
                  placeholder="1"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Buttons primary label="Add To Bag" />
      </form>
    </Form>
  );
};