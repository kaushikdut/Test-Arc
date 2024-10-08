import { Input } from "@/app/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

interface FormComponentInputProps {
  label: string;
  placeholder: string;
  name: string;
  formDescription?: string;
  form: UseFormReturn;
}
const FormComponentInput = ({
  form,
  label,
  formDescription,
  name,
  placeholder,
}: FormComponentInputProps) => {
  return (
    <FormField
      control={form.control}
      rules={{ required: "*This field is a required" }}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className="rounded-[5px] border-neutral-950/20 placeholder:text-neutral-400"
            />
          </FormControl>
          <FormDescription className="text-muted-foreground text-xs text-neutral-400">
            {formDescription || ""}
          </FormDescription>
          <FormMessage className="text-red-500">
            {form.formState.errors.spaceName?.message?.toString()}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};

export default FormComponentInput;
