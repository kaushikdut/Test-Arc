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
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import useImageStore from "@/store/store";

interface FormComponentInputProps {
  label: string;
  placeholder: string;
  name: string;
  formDescription?: string;
  form: UseFormReturn;
  type?: string;
  image: string | null;
  setImage: (url: string) => void;
}

const FormComponentInput = ({
  form,
  label,
  name,
  image,
  setImage,
}: FormComponentInputProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    image || null
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && setImage) {
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
      form.setValue(name, file);
      setImage(objectUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <FormField
        control={form.control}
        rules={{ required: "*This field is required" }}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                {...field}
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  handleImageChange(e);
                  field.onChange(e);
                }}
              />
            </FormControl>
            <div className="w-fit h-fit flex items-center">
              {/* Show image preview if available */}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Selected Image Preview"
                  className="mt-4 w-16 h-16 object-cover rounded-full"
                />
              )}
              <Button
                type="button"
                onClick={triggerFileInput}
                className="rounded-[5px] border"
                variant={"default"}
              >
                Change
              </Button>
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default FormComponentInput;
