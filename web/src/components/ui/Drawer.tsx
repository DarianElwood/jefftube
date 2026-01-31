import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

export function Drawer({ open, onOpenChange, children }: DrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay fixed inset-0 bg-black/50 z-[100]" />
        <Dialog.Content className="drawer-content fixed left-0 top-0 z-[101] h-full w-60 bg-(--color-bg-primary) shadow-xl focus:outline-none">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
