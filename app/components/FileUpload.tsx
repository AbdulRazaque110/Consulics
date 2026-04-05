'use client';

import { useState, useRef } from 'react';
import { FiUpload, FiX, FiCheck } from 'react-icons/fi';

interface FileUploadProps {
  onFilesSelected: (files: FileList, category: string) => void;
  category: string;
  label: string;
  accept?: string;
}

export default function FileUpload({
  onFilesSelected,
  category,
  label,
  accept = '.pdf,.doc,.docx,.jpg,.jpeg,.png',
}: FileUploadProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles([...selectedFiles, ...newFiles]);
      onFilesSelected(e.target.files, category);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary-500 cursor-pointer transition"
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={accept}
          onChange={handleFileSelect}
          className="hidden"
        />
        <div className="text-center">
          <FiUpload className="mx-auto text-3xl text-gray-400 mb-2" />
          <p className="text-gray-600">Click to upload or drag and drop</p>
          <p className="text-sm text-gray-500 mt-1">PDF, DOC, JPG up to 10MB</p>
        </div>
      </div>

      {/* Selected Files List */}
      {selectedFiles.length > 0 && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Selected Files:</label>
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-green-50 border border-green-200 rounded p-3"
            >
              <div className="flex items-center space-x-2">
                <FiCheck className="text-green-600" />
                <span className="text-sm text-gray-700">{file.name}</span>
                <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)}MB)</span>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="text-red-600 hover:text-red-800"
              >
                <FiX />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
