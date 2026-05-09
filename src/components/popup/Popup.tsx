import React from 'react';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Popup({ isOpen, onClose, title = 'Popup', children }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-w-4xl rounded-2xl bg-white/100 p-6 shadow-xl h-[calc(100vh-50px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-full px-2 py-1 text-gray-500 hover:bg-gray-200"
          >
            ✕
          </button>
        </div>

        <div className="text-base">{children}</div>
      </div>
    </div>
  );
}
