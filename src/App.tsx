import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";

import { Logo } from './utils/logo.tsx';
import Header from './components/Header';
import FinalLogo from './components/finalLogo.tsx';

import { Profile, RootState } from './utils/types';
import messages from './messages/he/common.json';
import useCustomDispatch from './utils/dispatch.ts';
// import Spinner from './components/Spinner/Spinner.tsx';

const App = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const [data, setData] = useState<Profile>({});
  const [buildPDFFile, setBuildPDFFile] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const customDispatch = useCustomDispatch();

  useEffect(() => {
    if (JSON.stringify(data) !== JSON.stringify(profile) && Object.keys(data).length !== 0) {
      customDispatch(data);
    }
  }, [data]);

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

  const namePDF = () => {
    return profile?.name ? messages.cuncernName + '-' + profile?.name : messages.cuncernName
  }
  const handleGeneratePDF = () => {
    // setIsLoading(true); // Start loading
    const noPrintElements = document.querySelectorAll('.no-print');
    noPrintElements.forEach(el => (el as HTMLElement).style.display = 'none');  // Hide elements with 'no-print' class

    const options: Options = {
      filename: namePDF(),
      method: 'save',
      resolution: Resolution.HIGH,
      page: {
        margin: Margin.MEDIUM,
        format: 'a4',
      },
      canvas: {
        mimeType: 'image/jpeg',
        qualityRatio: 1,
      },
      overrides: {
        pdf: {
          compress: true,
        },
        canvas: {
          useCORS: true,
        },
      },
    };

    const getTargetElement = () => document.getElementById('container');
    generatePDF(getTargetElement, options).finally(() => {
      noPrintElements.forEach(el => (el as HTMLElement).style.display = 'none');  // Hide elements with 'no-print' class
      // setIsLoading(false); // Stop loading

    });
  };

  return (
    <>

      <div className="" id='container' dir="rtl" >

        <button className='font-hebrow font-medium text-red-600 hover:text-red-800 no-print' onClick={handleGeneratePDF}>{'Generate PDF'}</button>

        <button className='font-hebrow font-medium text-red-600 hover:text-red-800 no-print' onClick={() => setBuildPDFFile(!buildPDFFile)}>{messages.previewMessage}</button>
        <Logo />
        <div className="flex flex-col padding">
          <Header
            buildPDFFile={buildPDFFile}
            handleInputChange={handleInputChange} />

          <br />
          <FinalLogo />
        </div>

      </div >
    </>
  )
};

export default App;


// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { usePDF, Document, Page, View } from '@react-pdf/renderer';

// import { Logo } from './utils/logo';
// import Header from './components/Header';
// import FinalLogo from './components/finalLogo';

// import { Profile, RootState } from './utils/types';
// import useCustomDispatch from './utils/dispatch';

// const App: React.FC = () => {
//   const profile = useSelector((state: RootState) => state.profile);
//   const [data, setData] = useState<Profile>({});
//   const [buildPDFFile, setBuildPDFFile] = useState(false);
//   const customDispatch = useCustomDispatch();

//   useEffect(() => {
//     if (JSON.stringify(data) !== JSON.stringify(profile) && Object.keys(data).length !== 0) {
//       customDispatch(data);
//     }
//   }, [data, profile, customDispatch]);

//   const handleInputChange = (value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, entity: keyof Profile, index?: number) => {
//     let updatedValue: unknown;

//     if (typeof value === 'string') {
//       updatedValue = value;
//     } else {
//       if (entity === 'assessment' && index !== undefined) {
//         const updatedAssessment = data?.assessment ? [...data.assessment] : [];
//         updatedAssessment[index] = value.target.value;
//         updatedValue = updatedAssessment;
//       } else {
//         updatedValue = value.target.value;
//       }
//     }

//     const newState = { ...data, [entity]: updatedValue };
//     setData(newState);
//   };

//   const MyDoc = (
//     <Document>
//       <Page size="A4">
//         <View>
//           <Logo />
//           <View style={{ padding: 10 }}>
//             <Header
//               buildPDFFile={buildPDFFile}
//               handleInputChange={handleInputChange} />
//             <FinalLogo />
//           </View>
//         </View>
//       </Page>
//     </Document>
//   );

//   const [instance, updateInstance] = usePDF({ document: MyDoc });

//   const handleGeneratePDF = () => {
//     updateInstance(MyDoc);
//   };

//   return (
//     <>
//       {instance.loading && <div>Loading ...</div>}
//       {instance.error && <div>Something went wrong: {instance.error}</div>}
//       <div id="container" dir="rtl">
//         <button
//           className="font-hebrow font-medium text-red-600 hover:text-red-800 no-print"
//           onClick={handleGeneratePDF}
//         >
//           {instance.loading ? 'Generating...' : 'Generate PDF'}
//         </button>
//         <button
//           className="font-hebrow font-medium text-red-600 hover:text-red-800 no-print"
//           onClick={() => setBuildPDFFile(!buildPDFFile)}
//         >
//           {buildPDFFile ? 'Preview' : 'Edit'}
//         </button>
//         <Logo />
//         <div className="flex flex-col padding">
//           <Header
//             buildPDFFile={buildPDFFile}
//             handleInputChange={handleInputChange} />
//           <br />
//           <FinalLogo />
//         </div>
//         {!instance.loading && instance.url && (
//           <a href={instance.url} download="test.pdf">
//             Download PDF
//           </a>
//         )}
//       </div>
//     </>
//   );
// };

// export default App;
