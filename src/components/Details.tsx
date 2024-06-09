import { useSelector } from "react-redux";
import { getTranslation } from "../utils/getTranslation";
import { Profile, RootState } from "../utils/types";
import _ from "lodash";
import DateInput from "./DateInput";

interface DetailsProps {
    buildPDFFile: boolean
    handleInputChange: (value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, entity: keyof Profile, index?: number) => void;
}

export const Details: React.FC<DetailsProps> = ({ buildPDFFile, handleInputChange }) => {
    const profile = useSelector((state: RootState) => state.profile);
    const {
        id,
        name,
        dateOfBirth,
        age,
        dateOfDiagnosis,
        educationalFramework
    } = profile
    return (
        <div className="flex flex-col text-2xl py-4 font-hebrow">
            <div className="flex gap-24">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        {(buildPDFFile && !_.isEmpty(name)) && (
                            <>
                                <div className="label">
                                    <span className="text-2xl font-hebrow font-bold">
                                        {getTranslation('name')}
                                        <span className='pr-1 pl-5'>:</span>
                                    </span>

                                </div>
                                <p>{name}</p>
                            </>
                        )}
                        {!buildPDFFile && <>
                            <div className="label">
                                <span className="text-2xl font-hebrow font-bold">
                                    {getTranslation('name')}
                                    <span className='pr-1 pl-5'>:</span>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                placeholder={getTranslation('name')}
                                onChange={(e) => handleInputChange(e, 'name')}
                                className="input w-full h-8 md:w-64 input-bordered font-hebrow font-normal"
                            /></>}
                    </div>
                    <div className="flex items-center gap-2">
                        {(buildPDFFile && !_.isEmpty(dateOfBirth)) && (
                            <>
                                <div className="label">
                                    <span className="text-2xl font-hebrow font-bold"
                                    >{getTranslation('dateOfBirth')}
                                        <span className='pr-1 pl-5'>:</span>
                                    </span>
                                </div>
                                <p>{dateOfBirth}</p>
                            </>
                        )}
                        {!buildPDFFile && <>
                            <div className="label">
                                <span className="text-2xl font-hebrow font-bold">
                                    {getTranslation('dateOfBirth')}
                                    <span className='pr-1 pl-5'>:</span>
                                </span>
                            </div>
                            <DateInput
                                value={dateOfBirth}
                                label={getTranslation('dateOfBirth')}
                                entity={'dateOfBirth'}
                                handleInputChange={handleInputChange}
                            />
                        </>}
                    </div>
                    <div className="flex items-center gap-2">
                        {(buildPDFFile && !_.isEmpty(dateOfDiagnosis)) && (
                            <>
                                <div className="label">
                                    <span className="text-2xl font-hebrow font-bold">
                                        {getTranslation('dateOfDiagnosis')}
                                        <span className='pr-1 pl-5'>:</span>
                                    </span>
                                </div>
                                <p>{dateOfDiagnosis}</p>
                            </>
                        )}
                        {!buildPDFFile && <>
                            <div className="label">
                                <span className="text-2xl font-hebrow font-bold">
                                    {getTranslation('dateOfDiagnosis')}
                                    <span className='pr-1 pl-5'>:</span>
                                </span>
                            </div>
                            <DateInput
                                value={dateOfDiagnosis}
                                label={getTranslation('dateOfDiagnosis')}
                                entity={'dateOfDiagnosis'}
                                handleInputChange={handleInputChange}
                            />
                        </>}
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        {(buildPDFFile && !_.isEmpty(id)) && (
                            <>
                                <div className="label">
                                    <span className="text-2xl font-hebrow font-bold">
                                        {getTranslation('id')}
                                        <span className='pr-1 pl-5'>:</span>
                                    </span>
                                </div>
                                <p>{id}</p>
                            </>
                        )}
                        {!buildPDFFile && <>
                            <div className="label">
                                <span className="text-2xl font-hebrow font-bold">
                                    {getTranslation('id')}
                                    <span className='pr-1 pl-5'>:</span>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="id"
                                value={id}
                                placeholder={getTranslation('id')}
                                onChange={(e) => handleInputChange(e, 'id')}
                                className="input w-full h-8 md:w-64 input-bordered font-hebrow font-normal"
                            /></>}
                    </div>
                    <div className="flex items-center gap-2">
                        {(buildPDFFile && !_.isEmpty(age)) && (
                            <>
                                <div className="label">
                                    <span className="text-2xl font-hebrow font-bold">
                                        {getTranslation('age')}
                                        <span className='pr-1 pl-5'>:</span>
                                    </span>
                                </div>
                                <p>{age}</p>
                            </>
                        )}
                        {!buildPDFFile && <>
                            <div className="label">
                                <span className="text-2xl font-hebrow font-bold">
                                    {getTranslation('age')}
                                    <span className='pr-1 pl-5'>:</span>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="age"
                                value={age}
                                placeholder={getTranslation('age')}
                                onChange={(e) => handleInputChange(e, 'age')}
                                step="any"
                                className="input w-full h-8 md:w-64 input-bordered font-hebrow font-normal"
                            />
                        </>}
                    </div>
                    <div className="flex items-center gap-2">
                        {(buildPDFFile && !_.isEmpty(educationalFramework)) && (
                            <>
                                <div className="label">
                                    <span className="text-2xl font-hebrow font-bold">
                                        {getTranslation('educationalFramework')}
                                        <span className='pr-1 pl-5'>:</span>
                                    </span>
                                </div>
                                <p>{educationalFramework}</p>
                            </>
                        )}
                        {!buildPDFFile && <>
                            <div className="label">
                                <span className="text-2xl font-hebrow font-bold">
                                    {getTranslation('educationalFramework')}
                                    <span className='pr-1 pl-5'>:</span>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="educationalFramework"
                                value={educationalFramework}
                                placeholder={getTranslation('educationalFramework')}
                                onChange={(e) => handleInputChange(e, 'educationalFramework')}
                                className="input w-full h-8 md:w-64 input-bordered font-hebrow font-normal"
                            />
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}