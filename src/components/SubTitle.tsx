import { underline } from "./underline";

interface SubTitleProps {
    title: string;
    underlineWidth?: string;
    margin?: string
}

const SubTitle: React.FC<SubTitleProps> = ({ title, underlineWidth, margin }) => (
    <>
        <div className="font-hebrow font-bold">
            <span className="text-2xl font-hebrow font-bold">{title}</span>
            <span> : </span>
            {/* {underline(underlineWidth, margin)} */}
        </div>
    </>
);

export default SubTitle;