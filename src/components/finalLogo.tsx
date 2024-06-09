
import messages from '../messages/he/common.json';

const finalLogo = () => (
    <div className="text-2xl font-hebrow font-medium flex flex-col self-center items-center py-10">
        <span>{messages.bestRegards}</span>
        <span>{messages.hesenJaber}</span>
        <span>{messages.mr}</span>
        <span>{messages.occuapationTherapy}</span>
    </div>
);

export default finalLogo;