import React, { Fragment } from 'react'
import { Profile } from '../utils/types'
import UlPoint from './UlPoint'
import messages from '../messages/he/common.json'
import Title from './Title'
import CustomTitleInput from './CustomTitleInput'
import { dropdownAssessmentOptions } from '../utils/types'
import { DevelopmentalBackground } from './DevelopmentalBackground'
import { Details } from './Details'
interface HeaderProps {
    buildPDFFile: boolean
    handleInputChange: (value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, entity: keyof Profile, index?: number) => void;
}

const Header: React.FC<HeaderProps> = ({ buildPDFFile, handleInputChange }) => {
    return (

        <Fragment>
            <Title title={messages.DiagnosticSummary} margin={'mx-auto'} />
            <Details buildPDFFile={buildPDFFile} handleInputChange={handleInputChange} />
            <DevelopmentalBackground buildPDFFile={buildPDFFile} handleInputChange={handleInputChange} />

            <CustomTitleInput buildPDFFile={buildPDFFile} label={'reference'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'referrer'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'causeOfReferral'} handleInputChange={handleInputChange} />
            <UlPoint buildPDFFile={buildPDFFile} title={'assessment'} dropdownOptions={dropdownAssessmentOptions} handleInputChange={handleInputChange} />
            {/* <SubTitle buildPDFFile={buildPDFFile} title={messages.humanComponentsAndPerformance} underlineWidth={'w-64'} margin={'mx-0'} /> */}
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'communicationSkills'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'motorSkills'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'graphSkills'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'grossMotorSkills'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'processSkills'} handleInputChange={handleInputChange} />

            <br />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'summary'} handleInputChange={handleInputChange} />
            <br />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'additionalRecommendations'} handleInputChange={handleInputChange} />
        </Fragment>
    );
}

export default Header;  
