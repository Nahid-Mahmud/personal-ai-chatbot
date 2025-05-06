"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { editContext } from "@/redux/features/chatContextSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

interface EditContextModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextId: string | null;
}

export function EditContextModal({ isOpen, onClose, contextId }: EditContextModalProps) {
  const allContexts = useSelector((state: RootState) => state?.context?.contexts);
  const context = allContexts?.find(
    (context: { id: string; title: string; content: string }) => context?.id === contextId
  );

  //   console.log(allContexts);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    if (!content.trim()) {
      setError("Context content is required");
      return;
    }

    // onAddContext(title, content);
    dispatch(editContext({ id: context?.id, title, content }));
    toast.success("Context updated successfully!");

    resetForm();
    onClose();
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setError(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  useEffect(() => {
    if (context) {
      setTitle(context?.title);
      setContent(context?.content);
    }
  }, [context, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-xl">Edit Context</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {error && <div className="text-sm font-medium text-destructive">{error}</div>}

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a descriptive title"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Context Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter the context information..."
                className="min-h-[150px] max-h-[300px] w-full"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose} className="mr-2 cursor-pointer">
              Cancel
            </Button>
            <Button type="submit" className="cursor-pointer">
              Update Context
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
