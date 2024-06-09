import generatePDF, { Resolution, Margin, Options } from "react-to-pdf"

export const GeneratePDFFile = () => {
  const options: Options = {
    filename: 'advanced-example.pdf',
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
  }

  const getTargetElement = () => document.getElementById('container')
  generatePDF(getTargetElement, options)
}
