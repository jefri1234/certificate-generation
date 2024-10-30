import React from 'react'
import PDF from './components/PDF'
import { PDFViewer, View, PDFDownloadLink, Canvas } from '@react-pdf/renderer'

function App() {
  return (
    <div className='flex justify-center items-center  flex-col gap-5'>
      <PDFViewer height={500} width={700} showToolbar className='bg-gray-900 p-5  rounded-lg '

      >
        <PDF />
      </PDFViewer>

      {/* <PDFDownloadLink document={<PDF/>} fileName='documento-jeff'>
      {({blob, url, loading, error}) => (loading ?  <button className='bg-red-600 px-4 py-2 rounded-md text-white font-bold' >loading...</button> : <button className='bg-orange-600 px-4 py-2 rounded-md text-white font-bold' >Dowload file</button> )}
      </PDFDownloadLink> */}


      <PDFDownloadLink
        document={<PDF />}
        fileName="mi-archivo.pdf"
      >
        {({ blob, url, loading, error }) => {
          if (loading) {
            return 'Cargando documento...';
          }
          if (error) {
            return `Error: ${error.message}`;
          }
          return (
            <div>
              <button className='bg-orange-600 px-4 py-2 rounded-md text-white font-bold' >Dowload file</button>
            </div>
          );
        }}
      </PDFDownloadLink>
    </div>

  )
}

export default App