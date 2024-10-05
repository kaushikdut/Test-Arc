import { Button } from "@/components/ui/button";
import { useForm, FormProvider } from "react-hook-form";
import FormComponentInput from "./form-component-input";
import FormComponentTextarea from "./form-component-textarea";
import FormComponentInputImage from "./form-component-input-image";
import useImageStore from "@/store/store";

const Basic = () => {
  const form = useForm();
  const watchHeader = form.watch("header", "");
  const watchMessage = form.watch("message", "");
  const image = useImageStore((state) => state.image);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full h-full mt-5 flex-col flex md:flex-row gap-4 px-3 text-neutral-600 ">
          <div className="w-full h-fit md:w-[40%] flex flex-col items-center p-8 gap-y-4 border rounded-xl">
            {image ? (
              <img src={image} className="w-[100px]" alt="logo" />
            ) : (
              <p>Upload an image to preview</p>
            )}

            <h2 className="text-3xl font-bold">
              {watchHeader || "Header goes here..."}
            </h2>
            <p>{watchMessage || "Your custom message goes here"}</p>
            <p>Questions</p>
            <Button
              type="button"
              className="w-full bg-blue-800/80 text-white p-3 hover:bg-blue-800/90 rounded-[5px]"
            >
              Record video
            </Button>
          </div>
          <div className="flex-grow flex items-center justify-center p-6">
            <div className="w-full flex flex-col gap-y-6">
              <h2 className="text-center text-4xl font-bold text-black">
                Edit Space
              </h2>
              {/* Space Name Field */}
              <FormComponentInput
                label="Space name"
                name="spacename"
                placeholder="Spacename"
                formDescription="Public URL is:..."
                form={form}
              />
              {/* Image Field*/}
              <FormComponentInputImage
                label="Update the logo square"
                name="image"
                placeholder="Spacename"
                formDescription="Public URL is:..."
                form={form}
              />

              {/* Header Field */}
              <FormComponentInput
                label="Header title"
                name="header"
                placeholder="Enter header"
                form={form}
              />

              {/* Message Field */}
              <FormComponentTextarea
                label="Your custom message"
                name="message"
                placeholder="Write a warning message to your customers, and give them simple directions on how to make the best testimonials"
                form={form}
                formDescription="Markdown"
              />

              <Button
                className="bg-blue-800/80 text-white p-6 hover:bg-blue-800/90 rounded-[5px]"
                type="submit"
              >
                Update Changes
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Basic;
