"use client";
import Image from "next/image";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as CodeMirror } from "react-codemirror2";
import React, { useState } from "react";

interface EditorProps {
  language: string;
  displayName: string;
  value: string;
  onChange: (newValue: string) => void;
}

const Editor: React.FC<EditorProps> = (props) => {
  const [expand, setExpand] = useState<boolean>(true);
  const { language, displayName, value, onChange } = props;

  const handleChange = (editor: any, data: any, newValue: string) => {
    onChange(newValue);
  };

  return (
    <div
      className={`mainEditorContainer transition-all duration-300 ease-in-out flex flex-col flex-1 basis-0 h-full p-4 ${
        expand ? "" : "collpaseEditor"
      }`}
    >
      <div className="text-white flex justify-between px-1">
        <button className="bg-none border-none cursor-pointer flex justify-between items-center w-full">
          <p className="mr-2">{displayName}</p>
          <Image
            src={expand ? "/open.svg" : "/close.svg"}
            alt=""
            height={20}
            width={20}
            onClick={() => {
              setExpand((expand) => !expand);
            }}
          />
        </button>
      </div>
      <CodeMirror
        className="rounded-[13px] h-[39vh] mt-3 "
        value={value}
        options={{
          lineNumbers: true,
          lineWrapping: true,
          theme: "material",
          mode: language,
          lint: true, // Note: Not all languages/modes support linting
        }}
        onBeforeChange={handleChange}
      />
    </div>
  );
};

export default Editor;
