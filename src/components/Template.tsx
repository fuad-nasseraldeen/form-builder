import React, { useState } from 'react'
import Editor from './Editor/editor'
import messages from '../messages/he/common.json';
interface TemplateProps {
    content: string
    title: string
    handleInputChange: (value: string) => void
}

export const Template: React.FC<TemplateProps> = ({
    handleInputChange,
    content,
    title }) => {
    const [handlePreviewAfterSave, setHandlePreviewAfterSave] = useState(false)


    const handleChange = (content: string) => {
        handleInputChange(content)
        setHandlePreviewAfterSave(!handlePreviewAfterSave)
    };


    const handleUpdate = () => {
        setHandlePreviewAfterSave(!handlePreviewAfterSave)
    };
    return (
        <div className=" font-hebrow px-2" >
            {handlePreviewAfterSave ? (

                <div dangerouslySetInnerHTML={{ __html: content || '' }} />

            ) : (
                <div style={{ direction: 'rtl', textAlign: 'right' }}>
                    <Editor
                        title={title}
                        value={content}
                        onChange={handleChange}
                    />
                </div>
            )}
            {handlePreviewAfterSave && (
                <div className='py-5 px-1'>
                    <button
                        className="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={handleUpdate}
                    >
                        {messages.update}
                    </button>
                </div>
            )
            }
        </div>
    );
};
