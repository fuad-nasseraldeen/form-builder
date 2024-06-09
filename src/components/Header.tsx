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
            <Title title={messages.DiagnosticSummary} underlineWidth={'w-96'} margin={'mx-auto'} style={'mb-4'} />
            <Details buildPDFFile={buildPDFFile} handleInputChange={handleInputChange} />
            <DevelopmentalBackground buildPDFFile={buildPDFFile} handleInputChange={handleInputChange} />

            <CustomTitleInput buildPDFFile={buildPDFFile} label={'reference'} underlineWidth={'w-10'} margin={'mx-0'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'referrer'} underlineWidth={'w-16'} margin={'mx-0'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'causeOfReferral'} underlineWidth={'w-20'} margin={'mx-0'} handleInputChange={handleInputChange} />
            <UlPoint buildPDFFile={buildPDFFile} title={'assessment'} dropdownOptions={dropdownAssessmentOptions} handleInputChange={handleInputChange} />
            {/* <SubTitle buildPDFFile={buildPDFFile} title={messages.humanComponentsAndPerformance} underlineWidth={'w-64'} margin={'mx-0'} /> */}
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'communicationSkills'} underlineWidth={'w-20'} margin={'mx-0'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'motorSkills'} underlineWidth={'w-24'} margin={'mx-0'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'graphSkills'} underlineWidth={'w-24'} margin={'mx-0'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'grossMotorSkills'} underlineWidth={'w-24'} margin={'mx-0'} handleInputChange={handleInputChange} />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'processSkills'} underlineWidth={'w-24'} margin={'mx-0'} handleInputChange={handleInputChange} />

            <br />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'summary'} underlineWidth={'w-20'} margin={'mx-0'} handleInputChange={handleInputChange} />
            <br />
            <CustomTitleInput buildPDFFile={buildPDFFile} label={'additionalRecommendations'} underlineWidth={'w-20'} margin={'mx-0'} handleInputChange={handleInputChange} />
        </Fragment>
    );
}

export default Header;  
