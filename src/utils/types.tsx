export interface RootState {
    profile: {
        id: string,
        name: string,
        dateOfBirth: string,
        age: string,
        date: string,
        dateOfDiagnosis: string,
        educationalFramework: string,
        developmentalBackground: string
        assessment: string[]
        communicationSkills: string
        rossMotorSkills: string
        graphSkills: string
        motorSkills: string
        processSkills: string
        summary: string
        pointsObj: PointsObj[]
        additionalRecommendations: string
        [key: string]: unknown
    }
}

export type Profile = {
    id: string,
    name: string,
    dateOfBirth: string,
    age: string,
    date: string,
    dateOfDiagnosis: string,
    educationalFramework: string,
    developmentalBackground: string
    assessment: string[]
    communicationSkills: string
    rossMotorSkills: string
    graphSkills: string
    motorSkills: string
    processSkills: string
    summary: string
    pointsObj: PointsObj[]
    additionalRecommendations: string
    [key: string]: unknown
}

export const dropdownAssessmentOptions: string[] = [
    'ציור דמות ע"פ Goodenough.',
    'מבדק העתקת צורות ע"פ Beery VMI הבודק אינטגרציה ויז ו מוטורית, מבחן התפיסה החזותית והקואורדינציה מוטורית.',
    'תצפית לא פורמאלית (מיומנויות מוטוריקה עדינה וגסה).',
    'חלקים מאבחון בניית דגם MAP.',
    'GIFT : כלי הבודק מיומנויות מוטוריות עדינות ויכולות גרפו- מוטוריות.'
];

export type typeUIPoints = 'dropdown' | 'text';

export interface PointsObj {
    name: keyof Profile;
    points: (string | PointsObj)[];
}

// export const modules = {
//     toolbar: [
//         [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//         [{ size: [] }],
//         ['bold', 'italic', 'underline'],
//         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//         ['link'],
//         ['clean']
//     ]
// };

// export const formats = [
//     'header', 'font', 'size',
//     'bold', 'italic', 'underline',
//     'list', 'bullet',
//     'link'
// ];

export const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ font: [] }],
        [{ align: ["right", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"]
    ]
};

export const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "size",
    "font"
];