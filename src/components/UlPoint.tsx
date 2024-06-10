import React, { useState } from 'react';
import { getTranslation } from '../utils/getTranslation';
import { Profile, RootState, typeUIPoints } from '../utils/types';
import messages from '../messages/he/common.json';
import Dropdown from './Dropdown';
import SubTitle from './SubTitle';
import _ from 'lodash';
import { useSelector } from 'react-redux';

interface UIPointProps {
    title: string;
    dropdownOptions?: string[];
    buildPDFFile: boolean;
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        entity: keyof Profile,
        index?: number
    ) => void;
}

const UlPoint: React.FC<UIPointProps> = ({
    handleInputChange,
    buildPDFFile,
    title,
    dropdownOptions,
}) => {
    const profile = useSelector((state: RootState) => state.profile)

    const [numUlPoints, setNumUlPoints] = useState(1); // State to track number of ul points
    const [inputs, setInputs] = useState<string[]>([]);
    const [assessmentType, setAssessmentType] = useState<typeUIPoints>('dropdown'); // Default to dropdown

    const { AddAnotherPoint, AddAnotherText } = messages;

    const renderUlPoint = (index: number) => {
        return (
            <ul
                key={index}
                className={`px-0 w-full font-hebrow text-2xl ${assessmentType === 'dropdown' ? 'px-0' : 'px-10'
                    }`}
                dir="rtl"
            >
                <li className={`text-2xl py-${index > 0 ? '1' : '0'} px-0`}>
                    {assessmentType === 'dropdown' && dropdownOptions && dropdownOptions.length > 0 ? (
                        <Dropdown
                            selectedOption={inputs[index]}
                            dropdownOptions={dropdownOptions!}
                            setSelectedOption={(selectedOption: string) => {
                                const updatedInputs = [...inputs];
                                updatedInputs[index] = selectedOption;
                                setInputs(updatedInputs);
                                handleInputChange(
                                    { target: { value: `<ul dir="rtl"><li>${selectedOption}</li></ul>` } } as React.ChangeEvent<
                                        HTMLInputElement
                                    >,
                                    title,
                                    index
                                );
                            }}
                        />
                    ) : (
                        <input
                            type="text"
                            name={title}
                            value={inputs[index]}
                            onChange={(e) => {
                                const updatedInputs = [...inputs];
                                updatedInputs[index] = e.target.value;
                                setInputs(updatedInputs);
                                handleInputChange(
                                    {
                                        target: {
                                            value: `<ul dir="rtl"><li>${e.target.value}</li></ul>`,
                                        },
                                    } as React.ChangeEvent<HTMLInputElement>,
                                    title,
                                    index
                                );
                            }}
                            className="input w-full h-8 input-bordered font-hebrow"
                        />
                    )}
                </li>
            </ul>
        );
    };

    const ulPoints = Array.from({ length: numUlPoints }, (_, index) => renderUlPoint(index));

    const showAssessment = () => {
        return (
            <div className="w-full font-hebrow text-2xl rtl-list">
                {profile?.assessment &&
                    profile?.assessment.map((assest, index) => (
                        <div key={index} className="text-right" dangerouslySetInnerHTML={{ __html: assest || '' }} />
                    ))}
            </div>
        );
    };

    const handleAddUlPoint = () => {
        setNumUlPoints((prevNumUlPoints) => prevNumUlPoints + 1); // Increment number of ul points
        setInputs((prevInputs) => [...prevInputs, '']); // Add an empty string for the new input
        setAssessmentType('dropdown'); // Reset to dropdown type
    };

    const handleAddText = () => {
        setNumUlPoints((prevNumUlPoints) => prevNumUlPoints + 1); // Increment number of ul points
        setInputs((prevInputs) => [...prevInputs, '']); // Add an empty string for the new input
        setAssessmentType('text'); // Set to text type
    };

    return (
        <>
            {buildPDFFile && !_.isEmpty(title) && (
                <>
                    <SubTitle title={getTranslation(title)} />
                    {showAssessment()}
                </>
            )}
            {!buildPDFFile && (
                <>
                    <SubTitle title={getTranslation(title)} />
                    {ulPoints}
                    <div className="flex gap-1 w-full py-1.5 font-hebrow">
                        <button
                            className="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={handleAddUlPoint}
                        >
                            {AddAnotherPoint}
                        </button>
                        <button
                            className="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={handleAddText}
                        >
                            {AddAnotherText}
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default UlPoint;
