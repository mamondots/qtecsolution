import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Checkout = () => {
  const [open, setOpen] = useState(false); // Dialog control
  const [isSubmitting, setIsSubmitting] = useState(false); // Loader control

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);

    // Simulate API delay
    await new Promise((res) => setTimeout(res, 1500));

    setIsSubmitting(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>checkout</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Checkout Info</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-full"
        >
          <input
            className="px-2 py-2 border rounded outline-none"
            {...register("name", { required: true })}
            type="text"
            placeholder="Name.."
          />
          {errors.name && (
            <span className="text-sm text-red-500">Name field is required</span>
          )}

          <input
            className="px-2 py-2 border rounded outline-none"
            {...register("email", { required: true })}
            type="email"
            placeholder="Email.."
          />
          {errors.email && (
            <span className="text-sm text-red-500">
              Email field is required
            </span>
          )}

          <input
            className="px-2 py-2 border rounded outline-none"
            {...register("address", { required: true })}
            type="text"
            placeholder="Address.."
          />
          {errors.address && (
            <span className="text-sm text-red-500">
              Address field is required
            </span>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-2 py-2 mt-2 bg-[#059CFA] text-white hover:bg-[#02D7F8] duration-300 cursor-pointer rounded outline-none flex items-center justify-center"
          >
            {isSubmitting ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
            ) : (
              "Confirm Order"
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Checkout;
