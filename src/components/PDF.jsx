import React from 'react'
import {Document,Text,Page,StyleSheet,Image,View} from '@react-pdf/renderer'
import boy from '../boy.jpeg'

const styles= StyleSheet.create({
    boy:{
        width:200,
        padding:20
    },
    title:{
        fontSize:30,
        textAlign:'center'
    },
    contendor:{
        padding:20
    }
})

function PDF() {
  return (
    <Document 
    title='trabajo de jeff'
    author='jefferson obregon mejia'
    pdfVersion='1.3'
    language='english'
    pageMode='PageLayout'
    >
        <Page size='A4'>
            <Text style={styles.title}>
                Hello, World!
            </Text>
            <Image src={boy} style={styles.boy} cache />
            <Text style={styles.contendor}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo debitis accusantium quisquam animi odit labore, assumenda possimus blanditiis optio soluta earum officiis sequi placeat nisi, suscipit voluptatem totam quas nesciunt tempora explicabo quasi velit, aliquam iusto cum? Quas ex, nisi placeat, officia aperiam iusto fugiat delectus veritatis qui earum, sit soluta sapiente. Illum ducimus dolorem esse aliquid quis corrupti repellat enim voluptas iste veniam excepturi molestiae, iusto iure rerum ex ipsum fuga explicabo possimus? Quod mollitia quos ex sequi repellat laudantium cum adipisci nulla quidem? Iste eaque unde molestias quam porro, illum amet, quasi tempora, nostrum error est deserunt quos.
            </Text>
        </Page>
    </Document>
  )
}

export default PDF