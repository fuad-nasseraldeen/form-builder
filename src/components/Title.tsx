import { underline } from "./underline";

interface TitleProps {
    title: string
    underlineWidth?: string
    margin?: string
    style: string
}

const Title: React.FC<TitleProps> = ({ title, underlineWidth, margin, style }) => {
    const currentDate = new Date().toLocaleDateString('en-GB'); // Specify the locale for dd/mm/yyyy format
    return (
        <>
            <div className="grid pb-14">
                <h1 className={`text-6xl font-hebrow font-semibold ${margin}`}>{title}</h1>

                {/* {underline(underlineWidth, margin, style)} */}
            </div>
            <div className="font-hebrow font-medium text-2xl absolute left-0 pl-20 pt-[5rem]">
                {currentDate}
            </div>
        </>
    )
}

export default Title;