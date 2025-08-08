"use client";
import React, { useState } from "react";
import { TileData } from "@/components/tile";

interface DraggedTile {
  tile: TileData;
  index: number;
}

interface DragDropWrapperProps {
  tiles: TileData[];
  onTilesReorder: (newTiles: TileData[]) => void;
  enableDragDrop?: boolean;
  children: (props: {
    tiles: TileData[];
    draggedTile: DraggedTile | null;
    dragOverIndex: number | null;
    handleDragStart: (e: React.DragEvent<HTMLDivElement>, tile: TileData, index: number) => void;
    handleDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
    handleDragLeave: () => void;
    handleDrop: (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => void;
  }) => React.ReactNode;
}

const DragDropWrapper: React.FC<DragDropWrapperProps> = ({
  tiles,
  onTilesReorder,
  enableDragDrop = false,
  children,
}) => {
  const [draggedTile, setDraggedTile] = useState<DraggedTile | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    tile: TileData,
    index: number
  ) => {
    if (!enableDragDrop) return;
    
    setDraggedTile({ tile, index });
    e.dataTransfer.effectAllowed = "move";
    if (e.target instanceof HTMLDivElement) {
      e.dataTransfer.setData("text/html", e.target.outerHTML);
      e.target.style.opacity = "0.5";
    }
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      e.target.style.opacity = "1";
    }
    setDraggedTile(null);
    setDragOverIndex(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    if (!enableDragDrop) return;
    
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    if (!enableDragDrop) return;
    
    e.preventDefault();

    if (!draggedTile || draggedTile.index === dropIndex) {
      setDragOverIndex(null);
      return;
    }

    const newTiles = [...tiles];
    const draggedItem = newTiles[draggedTile.index];

    // Remove the dragged item
    newTiles.splice(draggedTile.index, 1);

    // Insert at new position
    const insertIndex =
      draggedTile.index < dropIndex ? dropIndex - 1 : dropIndex;
    newTiles.splice(insertIndex, 0, draggedItem);

    onTilesReorder(newTiles);
    setDraggedTile(null);
    setDragOverIndex(null);
  };

  return (
    <>
      {children({
        tiles,
        draggedTile,
        dragOverIndex,
        handleDragStart,
        handleDragEnd,
        handleDragOver,
        handleDragLeave,
        handleDrop,
      })}
    </>
  );
};

export default DragDropWrapper; 