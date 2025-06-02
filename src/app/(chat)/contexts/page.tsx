"use client";
import ContextCard from "@/components/context/ContextCard";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

function Contexts() {
  const contextsFormReduxStore = useSelector((state: RootState) => state?.context?.contexts);
  
  // console.log(contextsFormReduxStore);

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-5 md:py-10">
        {contextsFormReduxStore?.map((context: { id: string; title: string; content: string }) => (
          <ContextCard key={context?.id} content={context?.content} id={context?.id} title={context?.title} />
        ))}
      </div>
    </div>
  );
}

export default Contexts;
