import { Button } from "@/components/ui/button";
import { useForm, FormProvider } from "react-hook-form";
import FormComponentInput from "../../../../../components/form-inputs/form-component-input";
import useImageStore from "@/store/store";
import { ArrowLeft } from "lucide-react";
interface ExtraSettingsProps {
  handleGoBack: () => void;
}
const ExtraSettings = ({ handleGoBack }: ExtraSettingsProps) => {
  const form = useForm();
  const watchHeader = form.watch("header", "");
  const watchMessage = form.watch("message", "");
  const watchRecord = form.watch("video", "");
  const image = useImageStore((state) => state.image);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full h-full mt-5 flex-col flex md:flex-row gap-4 text-neutral-600 ">
          <div className="w-full h-fit md:w-[40%]">
            <Button variant={"ghost"} type="button" onClick={handleGoBack}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Go back
            </Button>
            <div className="w-full flex flex-col items-center p-8 gap-y-4 border rounded-xl">
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
                {watchRecord || "Record a video"}
              </Button>
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center p-6">
            <div className="w-full flex flex-col gap-y-6">
              <h2 className="text-center text-4xl font-bold text-neutral-800">
                Some extra settings
              </h2>
              {/* Video button Field */}
              <FormComponentInput
                label="Video button text"
                name="video"
                placeholder="Record a video"
                form={form}
              />
              {/* Text button Field */}
              <FormComponentInput
                label="Text button text"
                name="text"
                placeholder="Send in text"
                form={form}
              />
              {/* Consent statement Field */}
              <FormComponentInput
                label="Consent statement"
                name="consent-statement"
                placeholder="I give permission to use this testimonial."
                form={form}
              />
              {/* Text submission Field */}
              <FormComponentInput
                label="Text submission title"
                name="title"
                placeholder="Title"
                form={form}
              />

              <Button
                className="bg-blue-800/80 text-white p-6 hover:bg-blue-800/90 rounded-[5px]"
                type="submit"
              >
                Save your settings
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ExtraSettings;
