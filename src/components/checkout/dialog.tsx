import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

type ChekoutProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CheckoutDialog({ open, onOpenChange }: ChekoutProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>...</DialogTitle>
        </DialogHeader>

        <Progress value={66} />

        <div className="flex flex-col gap-3"></div>
      </DialogContent>
    </Dialog>
  );
}
