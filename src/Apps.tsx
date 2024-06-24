import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePDF, Document, Page, View } from '@react-pdf/renderer';
import { Logo } from './utils/logo';
import Header from './components/Header';
import FinalLogo from './components/finalLogo';
import { Profile, RootState } from './utils/types';
import useCustomDispatch from './utils/dispatch';

const Apps: React.FC = () => {
    const profile = useSelector((state: RootState) => state.profile);
    const [data, setData] = useState<Profile>({});
    const [buildPDFFile, setBuildPDFFile] = useState(false);
    const customDispatch = useCustomDispatch();

    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(profile) && Object.keys(data).length !== 0) {
            customDispatch(data);
        }
    }, [data, profile, customDispatch]);

    const handleInputChange = (value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, entity: keyof Profile, index?: number) => {
        let updatedValue: unknown;

        if (typeof value === 'string') {
            updatedValue = value;
        } else {
            if (entity === 'assessment' && index !== undefined) {
                const updatedAssessment = data?.assessment ? [...data.assessment] : [];
                updatedAssessment[index] = value.target.value;
                updatedValue = updatedAssessment;
            } else {
                updatedValue = value.target.value;
            }
        }

        const newState = { ...data, [entity]: updatedValue };
        setData(newState);
    };

    const MyDoc = (
        <Document>
            <Page size="A4">
                <View>
                    <Logo />
                    <View style={{ padding: 10 }}>
                        <Header
                            buildPDFFile={buildPDFFile}
                            handleInputChange={handleInputChange} />
                        <FinalLogo />
                    </View>
                </View>
            </Page>
        </Document>
    );

    const [instance, updateInstance] = usePDF({ document: MyDoc });

    const handleGeneratePDF = () => {
        updateInstance(MyDoc);
    };

    return (
        <>
            {instance.loading && <div>Loading ...</div>}
            {instance.error && <div>Something went wrong: {instance.error}</div>}
            <div id="container" dir="rtl">
                <button
                    className="font-hebrow font-medium text-red-600 hover:text-red-800 no-print"
                    onClick={handleGeneratePDF}
                >
                    {instance.loading ? 'Generating...' : 'Generate PDF'}
                </button>
                <button
                    className="font-hebrow font-medium text-red-600 hover:text-red-800 no-print"
                    onClick={() => setBuildPDFFile(!buildPDFFile)}
                >
                    {buildPDFFile ? 'Preview' : 'Edit'}
                </button>
                <Logo />
                <div className="flex flex-col padding">
                    <Header
                        buildPDFFile={buildPDFFile}
                        handleInputChange={handleInputChange} />
                    <br />
                    <FinalLogo />
                </div>
                {!instance.loading && instance.url && (
                    <a href={instance.url} download="test.pdf">
                        Download PDF
                    </a>
                )}
            </div>
        </>
    );
};
export default Apps;
