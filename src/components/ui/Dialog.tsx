"use client"

import {
  Button,
  ButtonProps,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components"

export default function ModalExample() {
  return (
    <div className="flex justify-center rounded-lg bg-linear-to-r from-sky-400 to-indigo-500 p-12">
      <DialogTrigger>
        <Button className="pressed:bg-black/40 inline-flex cursor-default items-center justify-center rounded-md border border-white/20 bg-black/20 bg-clip-padding px-3.5 py-2 font-[inherit] text-base font-medium text-white outline-hidden transition-colors hover:bg-black/30 focus-visible:ring-2 focus-visible:ring-white/75">
          Delete…
        </Button>
        <ModalOverlay
          className={({ isEntering, isExiting }) =>
            `fixed inset-0 z-10 flex min-h-full items-center justify-center overflow-y-auto bg-black/25 p-4 text-center backdrop-blur ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""} ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""} `
          }
        >
          <Modal
            className={({ isEntering, isExiting }) =>
              `w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl ${isEntering ? "animate-in zoom-in-95 duration-300 ease-out" : ""} ${isExiting ? "animate-out zoom-out-95 duration-200 ease-in" : ""} `
            }
          >
            <Dialog role="alertdialog" className="relative outline-hidden">
              {({ close }) => (
                <>
                  <Heading
                    slot="title"
                    className="text-xxl my-0 leading-6 font-semibold text-slate-700"
                  >
                    Delete folder
                  </Heading>
                  <div className="absolute top-0 right-0 h-6 w-6 stroke-2 text-red-500"></div>
                  <p className="mt-3 text-slate-500">
                    Are you sure you want to delete &quot;Documents&quot;? All
                    contents will be permanently destroyed.
                  </p>
                  <div className="mt-6 flex justify-end gap-2">
                    <DialogButton
                      className="pressed:bg-slate-300 bg-slate-200 text-slate-800 hover:border-slate-300"
                      onPress={close}
                    >
                      Cancel
                    </DialogButton>
                    <DialogButton
                      className="pressed:bg-red-600 bg-red-500 text-white hover:border-red-600"
                      onPress={close}
                    >
                      Delete
                    </DialogButton>
                  </div>
                </>
              )}
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
    </div>
  )
}

function DialogButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className={`inline-flex cursor-default justify-center rounded-md border border-solid border-transparent px-5 py-2 font-[inherit] text-base font-semibold ring-blue-500 ring-offset-2 outline-hidden transition-colors focus-visible:ring-2 ${className}`}
    />
  )
}
