import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-primary",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      danger: "btn-danger",
      secondary: "btn-secondary",
      dark: "btn-dark",
    },

    size: {
      default: "",
      sm: "btn-sm",
      lg: "btn-lg",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ size, variant, className, ...props }: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
};
