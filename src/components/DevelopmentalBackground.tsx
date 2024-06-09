import React from 'react';
import { useSelector } from 'react-redux';
import { getTranslation } from '../utils/getTranslation';
import { Profile, RootState } from '../utils/types';
import { underline } from './underline';
import { Template } from './Template';
import _ from 'lodash';

interface DevelopmentalBackgroundProps {
    buildPDFFile: boolean
    handleInputChange: (value: string, entity: keyof Profile, index?: number) => void;
}

export const DevelopmentalBackground: React.FC<DevelopmentalBackgroundProps> = ({ buildPDFFile, handleInputChange }) => {
    const profile = useSelector((state: RootState) => state.profile)
    const { developmentalBackground } = profile


    const handleTextChange = (content: string) => {
        handleInputChange(content, 'developmentalBackground')
    };

    const htmlContent = `
    <style>
      body {
        font-family: 'Fredoka';
      }
    </style>
    <div>
      ${developmentalBackground || ''}
    </div>
  `;

    return (
        <div className="py-1 font-hebrow pb-5 text-2xl" >
            {(buildPDFFile && !_.isEmpty(developmentalBackground)) && (
                <>
                    <span className="text-2xl font-hebrow font-bold ">
                        {getTranslation('developmentalBackground')}
                        <span> : </span>
                    </span>

                    {/* {underline('w-24', 'mx-0', 'mb-4')} */}

                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

                </>
            )}
            {!buildPDFFile && <>
                <span className="text-2xl font-hebrow font-bold">
                    {getTranslation('developmentalBackground')}
                    <span> : </span>
                </span>

                {/* {underline('w-24', 'mx-0', 'mb-4')} */}

                <Template
                    content={developmentalBackground}
                    title={getTranslation('developmentalBackground')}
                    handleInputChange={handleTextChange}
                />
            </>}
        </div>
    );
};
