import { Button } from "@/components/ui/button";
import { useForm, FormProvider, FieldValue } from "react-hook-form";
import FormComponentInput from "@/app/components/form-inputs/form-component-input";
import FormComponentTextarea from "@/app/components/form-inputs/form-component-textarea";
import FormComponentInputImage from "@/app/components/form-inputs/form-component-input-image";
import useImageStore from "@/store/store";
import { ArrowLeft } from "lucide-react";

interface ThankyouProps {
  handleGoBack: () => void;
}

const Thankyou = ({ handleGoBack }: ThankyouProps) => {
  const form = useForm();
  const watchHeader = form.watch("header", "");
  const watchMessage = form.watch("message", "");
  const thankyouImage = useImageStore((state) => state.thankyouImage);
  const setThankyouImage = useImageStore((state) => state.setThankyouImage);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full h-full mt-5 flex-col flex md:flex-row gap-4 text-neutral-600 ">
          <div className="w-full md:w-[40%]">
            <Button variant={"ghost"} type="button" onClick={handleGoBack}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Go back
            </Button>
            <div className="w-full h-fit flex flex-col items-center text-center p-8 gap-y-4 border rounded-xl">
              {thankyouImage ? (
                <>
                  <img src={thankyouImage} className="w-[200px]" alt="logo" />
                </>
              ) : (
                <p>Upload an image to preview</p>
              )}

              <h2 className="text-3xl font-bold">
                {watchHeader || "Thank you!"}
              </h2>
              <p>
                {watchMessage ||
                  "Thank you so much for your shoutout! It means a ton for us! 🙏"}
              </p>
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center p-6">
            <div className="w-full flex flex-col gap-y-6">
              <div>
                <h2 className="text-center text-4xl font-bold text-neutral-800">
                  Customize thank you page
                </h2>
                <p className="text-center mt-2">
                  Add your personalized message to show your appreciation{" "}
                </p>
              </div>

              {/* Image Field*/}
              <FormComponentInputImage
                label="Update the logo square"
                name="image"
                placeholder="Spacename"
                formDescription="Public URL is:..."
                form={form}
                image={thankyouImage}
                setImage={setThankyouImage}
              />

              {/* Thankyou Field */}
              <FormComponentInput
                label="Thank you title"
                name="header"
                placeholder="Thank you!"
                form={form}
              />

              {/* Thank you message Field */}
              <FormComponentTextarea
                label="Thank you message"
                name="message"
                placeholder="Thank you so much for your shoutout! It means a ton for us! 🙏"
                form={form}
                formDescription="Markdown"
              />

              <Button
                className="bg-blue-800/80 text-white p-6 hover:bg-blue-800/90 rounded-[5px]"
                type="submit"
              >
                Save your thank you page
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Thankyou;
