"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Calendar,
  Camera,
  Music,
  Settings,
  Home,
  User,
  Search,
  Heart,
  Star,
  Clock,
  Rss,
  MapPin,
  Briefcase,
} from "lucide-react";
import Tile, { TileData } from "@/components/tile";
import FlipModal from "@/components/flip-modal";
import DragDropWrapper from "@/components/drag-drop-wrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface DraggedTile {
  tile: TileData;
  index: number;
}

interface MetroGridProps {
  enableDragDrop?: boolean;
}

const MetroGrid: React.FC<MetroGridProps> = ({ enableDragDrop = false }) => {
  const router = useRouter();
  const [tiles, setTiles] = useState<TileData[]>([
    {
      id: 7,
      title: "Home",
      icon: Home,
      color: "[#1a2238] bg-[#f6c700]",
      size: "large",
      image: "/images/home-img.png",
      content: "Welcome to HCML!",
    },
    {
      id: 8,
      title: "About Us",
      icon: User,
      color: "bg-[#14213d] text-white",
      size: "small",
      content: "HCML",
      isLink: true,
      onClick: () => {
        router.push("/about");
      },
    },
    {
      id: 1,
      title: "Mail",
      icon: Mail,
      color: "bg-[#1a2238] text-white",
      size: "small",
      content: <Link href="mailto:wbs.hcml.co.id">wbs.hcml.co.id</Link>,
    },
    {
      id: 2,
      title: "Phone",
      icon: Phone,
      color: "bg-[#008080] text-[#f6c700]",
      size: "small",
      content: "+622150806600",
    },
    {
      id: 9,
      title: "Kang An",
      image: "/images/kang-an.jpg",
      color: "bg-[#ff9900] text-[#1a2238]",
      size: "small",
      content: "General Manager",
    },
    {
      id: 4,
      title: "Work Plan",
      color: "bg-[#008080] text-white",
      size: "wide",
      image: "/images/work-plan.jpg",
      children: (
        <>
          <img
            src="/images/work-plan.jpg"
            alt="Work Plan"
            className="w-full h-full object-cover"
          />
          <div className="text-gray-600 text-sm font-light tracking-wider">
            <p>
              HCML is committed to delivering safe, reliable, and efficient
              operations to meet the energy needs of our stakeholders and
              communities.
            </p>
          </div>
        </>
      ),
      // content: "247 photos",
    },

    {
      id: 3,
      title: "BD Field",
      image: "/images/bd-field.jpg",
      color: "bg-[#14213d] text-white",
      size: "wide",
      children:
        "Continuously striving to become the biggest gas producer in East Java and the operator of choice in Indonesia, HCML launched a field development program for one of its gas fields, Madura BD field, which was discovered in 1987. It is estimated that Madura BD field, which is located approximately 65 km East of Surabaya and 16 km South of Madura Island, contains reserves of 422 BCF (billion cubic feet) of natural gas and 18.7 MMBBL (million barrels) of condensate.",
    },
    {
      id: 5,
      title: "MDA & MBH Field",
      image: "/images/mda-mbh-field.jpg",
      color: "bg-[#f6c700] text-[#1a2238]",
      size: "wide",
      children:
        "HCML is the operator of the MDA & MBH field, which is located approximately 100 km East of Surabaya and 10 km South of Madura Island. The field was discovered in 1987 and is estimated to contain reserves of 1.2 BCF (billion cubic feet) of natural gas and 1.2 MMBBL (million barrels) of condensate.",
    },
    {
      id: 14,
      title: "Operational",
      icon: Briefcase,
      color: "bg-[#14213d] text-[#f6c700]",
      size: "wide",
      isLink: true,
      onClick: () => {
        router.push("/operation");
      },
      // content: "72°F Sunny",
    },
    {
      id: 12,
      title: "ISEB Building",
      icon: MapPin,
      color: "bg-[#008080] text-white",
      size: "small",
      content: "Jakarta Office",
    },
    {
      id: 13,
      title: "Intiland Tower",
      icon: MapPin,
      color: "bg-[#23272f] text-white",
      size: "small",
      content: "Surabaya Office",
    },

    {
      id: 11,
      title: "Career",
      icon: Star,
      color: "bg-[#1a2238] text-white",
      size: "small",
     
      content: "Join Us",
      isLink: true,
      onClick: () => {
        router.push("/career");
      },
    },
    {
      id: 6,
      title: "News",
      icon: Rss,
      color: "bg-[#ff9900] text-white",
      size: "wide",
      content: "5 updates",
      isLink: true,
      onClick: () => {
        router.push("/news");
      },
    },
  ]);

  const [selectedTile, setSelectedTile] = useState<TileData | null>(null);
  const [tilePosition, setTilePosition] = useState<{ x: number; y: number; width: number; height: number } | undefined>(undefined);

  const handleTileClick = (tileId: number, position?: { x: number; y: number; width: number; height: number }) => {
    const tile = tiles.find((t) => t.id === tileId);
    if (tile) {
      // Capture tile position for the 3D scale animation
      if (position) {
        setTilePosition(position);
      }
      setSelectedTile(tile);
    }
  };

  const handleTilesReorder = (newTiles: TileData[]) => {
    setTiles(newTiles);
  };

  // Animation variants for grid container entrance effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:my-6 md:my-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <strong>HCML</strong> - Husky-CNOOC Madura Limited
        </motion.h1>

        <DragDropWrapper
          tiles={tiles}
          onTilesReorder={handleTilesReorder}
          enableDragDrop={enableDragDrop}
        >
          {({
            tiles: currentTiles,
            draggedTile,
            dragOverIndex,
            handleDragStart,
            handleDragEnd,
            handleDragOver,
            handleDragLeave,
            handleDrop,
          }) => (
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-0 auto-rows-min"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {currentTiles.map((tile, index) => {
                const isDragging = draggedTile?.index === index;
                const isDropTarget = dragOverIndex === index;
                return (
                  <Tile
                    key={tile.id}
                    tile={tile}
                    isDragging={isDragging}
                    isDropTarget={isDropTarget}
                    enableDragDrop={enableDragDrop}
                    animationDelay={index * 0.08 + 0.2}
                    onClick={tile.onClick ? (id, position) => tile.onClick!() : handleTileClick}
                    onDragStart={(e) => handleDragStart(e, tile, index)}
                    onDragEnd={handleDragEnd}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, index)}
                  />
                );
              })}
            </motion.div>
          )}
        </DragDropWrapper>

        {selectedTile && (
          <FlipModal
            tile={selectedTile}
            onClose={() => setSelectedTile(null)}
            tilePosition={tilePosition}
          />
        )}
      </div>
    </div>
  );
};

export default MetroGrid;
