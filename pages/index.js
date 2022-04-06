import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, Flex, Box} from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [src, setSrc] = useState('')
  const [contador, setContador] = useState(0)
  const imagen = `<?xml version="1.0" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="64" height="64">
    <defs> 
      <linearGradient transform="matrix(1 0 0 1 0 0)"  id="1" x1="0.5" y1="1" x2="0.5" y2="0">
          <stop stop-color="#20B038" offset="0%"/>
          <stop stop-color="#60D66A" offset="100%"/>
      </linearGradient>
    </defs>
    <g transform="matrix(0.052459016 0 0 0.052244898 0 0)">
      <g>
          <path d="M1041.858 178.02C 927.20605 63.289 774.75305 0.070007324 612.3251 0C 277.61707 0 5.2320557 272.298 5.0980835 606.991C 5.0590835 713.97705 33.013084 818.411 86.14608 910.46704L86.14608 910.46704L7.6293945E-05 1225.0161L321.89807 1140.6101C 410.58707 1188.9781 510.44507 1214.4651 612.0641 1214.5061L612.0641 1214.5061L612.3221 1214.5061L612.3251 1214.5061C 946.97906 1214.5061 1219.405 942.1601 1219.5471 607.4831C 1219.6031 445.2751 1156.4951 292.7591 1041.8582 178.02008L1041.8582 178.02008L1041.858 178.02zM612.3251 1111.983L612.12805 1111.983C 521.55005 1111.935 432.72607 1087.6171 355.25006 1041.644L355.25006 1041.644L336.81207 1030.714L145.79108 1080.797L196.79108 894.621L184.77808 875.534C 134.25308 795.198 107.58008 702.359 107.61807 607.03C 107.72907 328.84402 334.12506 102.52704 612.5161 102.52704C 747.3281 102.58304 874.03516 155.13104 969.3301 250.49203C 1064.6191 345.85205 1117.0581 472.62006 1117.0181 607.44006C 1116.9 885.6351 890.4961 1111.983 612.3251 1111.983z" stroke="none" fill="#E0E0E0" fill-rule="nonzero" />
          <path d="M27.875 1190.114L110.086 889.934C 59.366997 802.08203 32.695 702.411 32.726997 600.33203C 32.859997 280.93402 292.805 21.082031 612.196 21.082031C 767.212 21.15203 912.704 81.48003 1022.094 190.97304C 1131.508 300.46503 1191.727 446.00403 1191.6641 600.78503C 1191.531 920.19104 931.57007 1180.066 612.21906 1180.066C 612.19604 1180.066 612.23505 1180.066 612.21906 1180.066L612.21906 1180.066L611.96106 1180.066C 514.9841 1180.035 419.69507 1155.691 335.06305 1109.566L335.06305 1109.566L27.875061 1190.114L27.875 1190.114z" stroke="none" fill="url(#1)" />
          <path d="M1036.898 176.091C 923.56195 62.677002 772.85895 0.18499756 612.29694 0.11399841C 281.42993 0.11399841 12.171936 269.286 12.03894 600.137C 11.999941 705.896 39.632942 809.13 92.15594 900.13L92.15594 900.13L6.999939 1211.067L325.20294 1127.629C 412.87494 1175.441 511.58594 1200.6371 612.03894 1200.676L612.03894 1200.676L612.29395 1200.676L612.29694 1200.676C 943.10895 1200.676 1212.406 931.45703 1212.5469 600.62103C 1212.6019 440.278 1150.2189 289.51303 1036.8978 176.09103L1036.8978 176.09103L1036.898 176.091zM612.29694 1099.333L612.1019 1099.333C 522.5629 1099.286 434.75793 1075.247 358.17194 1029.802L358.17194 1029.802L339.94495 1018.997L151.11694 1068.505L201.53094 884.466L189.65594 865.599C 139.71094 786.185 113.34395 694.411 113.38294 600.177C 113.49194 325.185 337.28894 101.466 612.4849 101.466C 745.7509 101.521 871.0009 153.466 965.2039 247.73201C 1059.3989 341.99802 1111.2349 467.31 1111.1959 600.584C 1111.0779 875.583 887.27295 1099.333 612.29694 1099.333z" stroke="none" fill="#FFFFFF" fill-rule="nonzero" />
          <text transform="matrix(7.96904 0 0 4.70731 -4749.67 -1728.03)" x="${contador >= 9 ? '590.92255' : '632.92255'}" y="546.27185" style="fill:#FFFFFF;font-family:arial;" font-size="130">${contador + 1}</text> 
      </g>
    </g>
  </svg>`

  const GenerateBlob = () => {
    // Genera la Imagen en Blob y asiganmos la url a la variable src
    const blob = new Blob([imagen], { type: 'image/svg+xml;utf8' }) //Imagen SVG
    const img = URL.createObjectURL(blob) // Creamos la url del Blob
    setSrc(img) // asignamos la url a la variable
  }
  useEffect(() => {
    //Generamos la primera Imagen
    GenerateBlob()
  }, [])

  const handleClick = () => {
    setContador(contador + 1) //Contador
    GenerateBlob() //Ejecutamos la función para la generación de las imagenes
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{contador == 0 ? `WhatsApp` : `(${contador}) WhatsApp`} </title>
        <meta name="description" content="Favicon WhatsApp" />
        <link rel="icon" href={contador ? `${src}` : `/favicon-16x16.png`} src={src} />
      </Head>

      <Flex justify={'center'} w={'100%'} direction={'column'}>
        <Box alignSelf={'center'}>Click en el botón</Box>
        <Box alignSelf={'center'} my={5}>
          <Button onClick={handleClick}>Nuevo mensaje</Button>
        </Box>
      </Flex>
    </div>
  )
}
