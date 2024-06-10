import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from '../../utils/types';
import './editor.css';
import { getTranslation } from '../../utils/getTranslation';
import messages from '../../messages/he/common.json';

interface EditorProps {
    value: string;
    title: string;
    onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, title, onChange }) => {
    const [isEditing, setIsEditing] = useState(true);
    const [editorValue, setEditorValue] = useState(value);
    const editorRef = useRef<ReactQuill>(null);

    const addRtlToUl = (content: string): string => {
        return content.replace(/<ul>/g, '<ul dir="rtl">');
    };

    const handleSave = () => {
        const updatedContent = addRtlToUl(editorValue);
        onChange(updatedContent);
        setIsEditing(false);
    };

    const handleUpdate = () => {
        setIsEditing(true);
    };

    const handleEditorChange = (content: string) => {
        setEditorValue(content);
    };

    return (
        <div className="relative w-full">
            <div className="relative w-full min-w-[200px]">
                <div
                    className={`font-hebrow peer h-full w-full !resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 text-lg font-medium text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50`}
                >
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        {getTranslation(title)}
                    </label>
                    <ReactQuill
                        ref={editorRef}
                        value={editorValue}
                        onChange={handleEditorChange}
                        className="custom-quill"
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        readOnly={!isEditing}
                    />
                </div>
            </div>
            <div className="flex w-full justify-between py-1.5 px-1">
                {!isEditing ? (
                    <button
                        className="px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-md select-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button"
                        onClick={handleUpdate}
                    >
                        {messages.update}
                    </button>
                ) : (
                    <button
                        className="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={handleSave}
                    >
                        {messages.save}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Editor;
