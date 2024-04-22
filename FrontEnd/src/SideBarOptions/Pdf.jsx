import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import pdf from '../assets/python-basics-sample-chapters.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from '../Css/pdf.module.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Pdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <>
      <h1 className={styles.heading}>Real Python</h1>
      <div className={styles.pdf}>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Document

            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <div>
          <button onClick={goToPreviousPage}><FaArrowLeft /></button>
          <span style={{ marginLeft: "10px", marginRight: "10px" }}>
            Page {pageNumber} of {numPages}
          </span>
          <button onClick={goToNextPage}><FaArrowRight /></button>
        </div>
      </div>
    </>
  );
}
