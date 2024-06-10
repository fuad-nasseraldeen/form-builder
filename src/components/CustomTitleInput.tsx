import _ from "lodash";
import { getTranslation } from "../utils/getTranslation";
import { Profile, RootState } from "../utils/types";
import SubTitle from "./SubTitle";
import { Template } from "./Template";
import { useSelector } from 'react-redux';

interface CustomTitleInputProps {
    label: string
    buildPDFFile: boolean
    handleInputChange: (value: string, entity: keyof Profile, index?: number) => void;
}

const CustomTitleInput: React.FC<CustomTitleInputProps> = ({ buildPDFFile, label, handleInputChange }) => {

    const profile = useSelector((state: RootState) => state.profile)
    const key = profile && typeof profile === 'object' && Object.keys(profile).find(entity => entity === label);
    const content = key ? profile[key] : '';

    const handleTextChange = (content: string) => {
        handleInputChange(content, label)
        console.log(content)
    };
    return (
        <div className='py-1 font-hebrow pb-5 text-2xl'>
            {(buildPDFFile && !_.isEmpty(content)) && (
                <div className='flex'>
                    <div className='ml-5 shrink-0'>
                        <SubTitle title={getTranslation(label)} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: content || '' }} />
                </div>
            )}
            {!buildPDFFile && <>
                <div className='py-2'>
                    <SubTitle title={getTranslation(label)} />
                </div>
                <Template
                    content={content}
                    title={getTranslation(label)}
                    handleInputChange={handleTextChange}
                />
            </>}
        </div>
    )
}

export default CustomTitleInput;