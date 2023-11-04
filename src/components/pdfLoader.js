import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

function PdfLoader() {
    const plugins = [defaultLayoutPlugin()];
    return (
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl="/Rounald_Andrawes_Software_Resume.pdf" plugins={plugins} />;
            </Worker>
        </div>
    )
}

export default PdfLoader