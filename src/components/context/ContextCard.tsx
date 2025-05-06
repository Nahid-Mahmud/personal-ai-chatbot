"use client";

import { Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { removeContext } from "@/redux/features/chatContextSlice";
import { EditContextModal } from "./EditContextModal";
import { useState } from "react";
import { toast } from "react-toastify";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";

interface ContextCardProps {
  id: string;
  title: string;
  content: string;
}

const ContextCard = ({ id, title, content }: ContextCardProps) => {
  const [isEditContextModalOpen, setIsEditContextModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedContext, setSelectedContext] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleEdit = (id: string) => {
    // console.log(id);
    if (id === "1") {
      toast.error("Default context cannot be edited.");
      return;
    }

    setSelectedContext(id);
    setIsEditContextModalOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    if (id === "1") {
      toast.error("Default context cannot be deleted.");
      return;
    }

    setSelectedContext(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedContext) {
      dispatch(removeContext({ id: selectedContext }));
      toast.success("Context deleted successfully.");
    }
  };

  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-md group">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content?.length > 100 ? `${content.slice(0, 100)}...` : content}</p>
      </CardContent>

      <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleEdit(id)}
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background cursor-pointer"
          aria-label="Edit"
        >
          <Edit className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleDeleteClick(id)}
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground cursor-pointer"
          aria-label="Delete"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      <EditContextModal
        contextId={selectedContext}
        isOpen={isEditContextModalOpen}
        onClose={() => setIsEditContextModalOpen(false)}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title={title}
      />
    </Card>
  );
};

export default ContextCard;
