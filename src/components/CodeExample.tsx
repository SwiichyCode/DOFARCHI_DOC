import React, { useState, useRef, useEffect } from "react";
import { FaCopy } from "react-icons/fa";

interface CodeExampleProps {
  language: string;
  code?: any;
  children?: React.ReactNode;
}

export default function CodeExample({
  language,
  code,
  children,
}: CodeExampleProps) {
  const [formattedCode, setFormattedCode] = useState("");
  const [confirmCopy, setConfirmCopy] = useState(false);

  const bodyRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (typeof code === "string") {
      try {
        const parsedCode = JSON.parse(code);
        const formatted = JSON.stringify(parsedCode, null, 2);
        setFormattedCode(formatted);
      } catch (error) {
        setFormattedCode(code);
      }
    }
  }, [children]);

  useEffect(() => {
    if (bodyRef.current) {
      const isOverflowing =
        bodyRef.current.scrollWidth > bodyRef.current.offsetWidth;

      if (isOverflowing) {
        bodyRef.current.style.overflowX = "scroll";
      }
    }
  }, []);

  const handleCopyClick = () => {
    if (bodyRef.current) {
      const text = bodyRef.current.innerText;

      if (text) {
        navigator.clipboard.writeText(text);

        setConfirmCopy(true);

        setTimeout(() => {
          setConfirmCopy(false);
        }, 2000);
      }
    }
  };

  return (
    <div className="w-full max-w-[648px] flex flex-col text-white">
      <div className="header flex justify-between items-center h-10 rounded-t-lg bg-[#343541] p-2">
        <h4 className="uppercase text-sm">{language}</h4>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleCopyClick}
        >
          {confirmCopy && <p>Copied to clipboard</p>}
          <FaCopy />
        </div>
      </div>
      <div className="body h-auto rounded-b-lg bg-[#000] px-2 py-4 overflow-hidden">
        <pre ref={bodyRef}>{formattedCode || code}</pre>
      </div>
    </div>
  );
}
