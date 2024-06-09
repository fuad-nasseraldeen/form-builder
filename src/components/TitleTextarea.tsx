import { useState } from "react"
import { getTranslation } from "../utils/getTranslation"
import { Profile } from "../utils/types"
import UlPoint from './UlPoint'
import messages from '../messages/he/common.json';

interface TitleTextareaProps {
    title: string
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, entity: string, index?: number) => void;
    handleUlPointChange: (pointsObj: string[], pointName: keyof Profile) => void
}

const TitleTextarea: React.FC<TitleTextareaProps> = ({ title, handleInputChange, handleUlPointChange }) => {

    const [showUlPoint, setShowUlPoint] = useState(false);

    const [points, setPoints] = useState<string[]>(['']);
    const AddAnotherPoint = messages.AddAnotherPoint;

    // const handleCheckBoxPoints = () => {
    //     setShowUlPoint(prev => !prev);
    // };

    const _handleUlPointChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, entity: keyof Profile, index?: number) => {
        const { value } = e.target
        const updatedPointsObj = [...points]
        updatedPointsObj[index!] = value
        setPoints(updatedPointsObj)
        handleUlPointChange(updatedPointsObj, entity)
    };
    return (
        <>
            <div className=''>
                <div className=''>
                    <span className="text-2xl font-hebrow font-bold">{getTranslation(title)}</span>
                </div>
                <textarea
                    name={getTranslation(title)}
                    placeholder={getTranslation(title)}
                    onChange={(e) => handleInputChange(e, title)}
                    className="textarea w-full h-10 border-gray-300 focus:ring-0 font-hebrow font-light "
                ></textarea>
                {!showUlPoint && <button className='font-hebrow font-medium text-red-600 hover:text-red-800' onClick={() => setShowUlPoint(prev => !prev)}>{AddAnotherPoint}</button>}
            </div>
            {showUlPoint && <UlPoint handleInputChange={_handleUlPointChange} title={title} showTitle={false} type={"text"} />}
        </>
    )
}

export default TitleTextarea;