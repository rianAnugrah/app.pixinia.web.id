import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TileData } from "@/components/tile";
import { X } from "lucide-react";

interface FlipModalProps {
  tile: TileData;
  onClose: () => void;
  children?: React.ReactNode;
  tilePosition?: { x: number; y: number; width: number; height: number };
}

const FlipModal: React.FC<FlipModalProps> = ({ tile, onClose, children, tilePosition }) => {
  const [isClosing, setIsClosing] = useState(false);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Calculate positioning and animation properties based on tile position
  const getModalPositioning = () => {
    if (tilePosition) {
      // Calculate the center of the tile
      const tileCenterX = tilePosition.x + (tilePosition.width / 2);
      const tileCenterY = tilePosition.y + (tilePosition.height / 2);
      
      // Calculate screen center
      const screenCenterX = window.innerWidth / 2;
      const screenCenterY = window.innerHeight / 2;
      
      // Calculate the translation needed to move from tile center to screen center
      const translateX = screenCenterX - tileCenterX;
      const translateY = screenCenterY - tileCenterY;
      
      return {
        initialLeft: tileCenterX,
        initialTop: tileCenterY,
        translateX,
        translateY,
      };
    }
    return {
      initialLeft: window.innerWidth / 2,
      initialTop: window.innerHeight / 2,
      translateX: 0,
      translateY: 0,
    };
  };

  const { initialLeft, initialTop, translateX, translateY } = getModalPositioning();

  const modalContent = (
    <div 
      className="fixed inset-0 z-50 bg-black/70"
      onClick={handleBackdropClick}
      style={{
        animation: isClosing 
          ? 'backdropFadeOut 0.25s cubic-bezier(0.4, 0.2, 0.2, 1) forwards'
          : 'backdropFadeIn 0.25s cubic-bezier(0.4, 0.2, 0.2, 1)'
      }}
    >
      <div 
        className={`absolute w-full max-w-lg ${isClosing ? 'animate-scale-out' : 'animate-scale-in'}`}
        style={{ 
          perspective: 1200,
          left: initialLeft,
          top: initialTop,
          transform: 'translate(-50%, -50%)',
          '--translate-x': `${translateX}px`,
          '--translate-y': `${translateY}px`,
        } as React.CSSProperties}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white border-0 p-0 flex flex-col overflow-hidden shadow-2xl">
          {/* Header Bar */}
          <div className={`${tile.color} p-6 flex items-center justify-between`}>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 w-12 h-12 flex items-center justify-center">
                {tile.icon && <tile.icon size={24} className="text-white" />}
              </div>
              <h2 className="text-2xl font-light text-white uppercase tracking-wide">{tile.title}</h2>
            </div>
            <button
              className="text-white/80 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10"
              onClick={handleClose}
              aria-label="Close"
            >
              <X size={24} strokeWidth={1}/>
            </button>
          </div>
          
          {/* Content Area */}
          <div className="p-8 flex-1">
            <div className="text-gray-800 text-lg font-light leading-relaxed mb-6">
              {tile.content}
            </div>
            
            {/* Additional Content */}
            {tile.children && (
              <div className="border-l-4 border-gray-300 pl-6 mt-8">
                <div className="text-gray-600 text-sm font-light tracking-wider">
                  {tile.children}
                </div>
              </div>
            )}
          </div>
          
          {/* Bottom Action Bar */}
          <div className="bg-gray-100 px-8 py-4 border-t border-gray-200">
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="bg-gray-800 text-white px-8 py-3 uppercase text-sm font-medium tracking-wide hover:bg-gray-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes backdropFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes backdropFadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        
        .animate-scale-in {
          animation: scaleIn 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-scale-out {
          animation: scaleOut 0.25s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
        }
        
        @keyframes scaleIn {
          from {
            transform: translate(-50%, -50%) scale3d(0.1, 0.1, 1);
            opacity: 0;
          }
          to {
            transform: translate(calc(-50% + var(--translate-x, 0px)), calc(-50% + var(--translate-y, 0px))) scale3d(1, 1, 1);
            opacity: 1;
          }
        }
        
        @keyframes scaleOut {
          from {
            transform: translate(calc(-50% + var(--translate-x, 0px)), calc(-50% + var(--translate-y, 0px))) scale3d(1, 1, 1);
            opacity: 1;
          }
          to {
            transform: translate(-50%, -50%) scale3d(0.1, 0.1, 1);
            opacity: 0;
          }
        }
        
        .modal-content {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default FlipModal; 