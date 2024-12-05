import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState, Fragment, ReactNode } from "react";
import { cn } from "tr-cn";

interface ModalConfirmProps {
  onSuccess: () => void;
  children: ReactNode;
  confirmContent?: ReactNode;
  buttonContent: ReactNode;
  title: string;
  className?: string;
  cancelText?: string;
  confirmText?: string;
}

export const ModalConfirm = ({
  onSuccess,
  children,
  confirmContent,
  buttonContent,
  title,
  className,
  cancelText = "Cancelar",
  confirmText = "Aceptar",
}: ModalConfirmProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleSuccess = () => {
    onSuccess();
    handleClose();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn("transition-transform", isOpen && "scale-125", className)}
      >
        {buttonContent}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={handleClose}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="fixed inset-0 bg-black/60" />

          <div className="flex min-h-screen items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md rounded-lg bg-white dark:bg-gray-800 shadow-xl transform transition-all">
                <div className="p-6">
                  <DialogTitle className="text-lg font-bold mb-4">
                    {title}
                  </DialogTitle>

                  <div className="mb-6">{children}</div>

                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      {cancelText}
                    </button>
                    <button
                      type="button"
                      onClick={handleSuccess}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      {confirmContent || confirmText}
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
