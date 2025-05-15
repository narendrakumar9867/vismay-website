"use client";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js`;

function useWindowWidth() {
  const [width, setWidth] = useState(800); // default fallback

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default function BrochureViewer() {
  const width = useWindowWidth();

  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center px-4 py-4">
      <h1 className="text-3xl font-bold text-[#FDE9A3] mb-2">EVENT BROCHURE</h1>
      <hr className="w-16 border-[#FDE9A3] mb-4" />
      <a
        href="/vismay_brochure.pdf"
        download
        className="text-[#FDE9A3] hover:underline mb-6"
      >
        Download PDF &nbsp;▶
      </a>

      <div className="bg-black p-4 border-4 border-gray-700 shadow-lg">
        <Document
          file="/vismay_brochure.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error('Error loading PDF:', error)}
          loading={<p className="text-white">Loading PDF...</p>}
        >
          <div className="w-full max-w-[90vw] sm:max-w-[600px]">
            <Page
              pageNumber={pageNumber}
              width={width < 640 ? width * 0.9 : 600}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="border-2 border-gray-600"
            />
          </div>
        </Document>
      </div>

      <div className="mt-4 flex items-center gap-6 text-[#FDE9A3]">
        <button onClick={() => setPageNumber(p => Math.max(p - 1, 1))} className="hover:underline">
          ◀ Previous
        </button>
        <span className="text-white">
          {pageNumber} / {numPages || "--"}
        </span>
        <button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))} className="hover:underline">
          Next ▶
        </button>
      </div>
    </div>
  );
}
