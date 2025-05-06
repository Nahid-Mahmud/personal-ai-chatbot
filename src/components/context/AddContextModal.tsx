"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch } from "react-redux";
import { addContext } from "@/redux/features/chatContextSlice";
import { toast } from "react-toastify";

interface AddContextModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddContextModal({ isOpen, onClose }: AddContextModalProps) {
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
    dispatch(addContext({ title, content }));
    toast.success("Context added successfully!");

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

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-xl">Add New Context</DialogTitle>
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
              Add Context
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
