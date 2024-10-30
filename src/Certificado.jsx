import React from 'react';
import { PDFViewer, View, Document, Text, Page, StyleSheet, Image } from '@react-pdf/renderer';

const style = StyleSheet.create({
    contenedor: {
        padding: 20
    },
    texto: {
        fontSize: 45,
        color: 'black',
        textAlign: 'center',
        marginBottom: 120, // Ajusta el valor para mover el texto hacia arriba
    },
    page: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
        width: 1600,
        height: 1132,
        marginBottom:100
    },
    imagen: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
});

const CrearCertificado = ({ alumno }) => {
    return (
        <Document>
            <Page size={[1600, 1132]} style={style.page}>
                <Image
                    src="./certificado.jpg"
                    style={style.imagen}
                />
                <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Text style={style.texto}>{alumno}</Text>
                </View>
            </Page>
        </Document>
    );
};

function Certificado() {
    return (
        <>
            <PDFViewer height={500} width={700} showToolbar className='bg-gray-900 p-5 rounded-lg'>
                <CrearCertificado alumno="JEFFERSON MAX OBREGON MEJIA" />
            </PDFViewer>
            <PDFViewer height={500} width={700} showToolbar className='bg-gray-900 p-5 rounded-lg'>
                <CrearCertificado alumno="JOSE ALVARES FUENTES SALAZAR" />
            </PDFViewer>
            <PDFViewer height={500} width={700} showToolbar className='bg-gray-900 p-5 rounded-lg'>
                <CrearCertificado alumno="JOSE TEVES UNI" />
            </PDFViewer>
            <PDFViewer height={500} width={700} showToolbar className='bg-gray-900 p-5 rounded-lg'>
                <CrearCertificado alumno="MARVIN JEFF" />
            </PDFViewer>
            <PDFViewer height={500} width={700} showToolbar className='bg-gray-900 p-5 rounded-lg'>
                <CrearCertificado alumno="MAX" />
            </PDFViewer>
        </>
    );
}

export default Certificado;
