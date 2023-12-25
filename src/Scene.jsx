import { OrbitControls, Scroll, ScrollControls, useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import Ocean from './components/Ocean'
import SectionTitle from './components/SectionTitle'
import SiteTitle from './components/SiteTitle'
import { useRef } from 'react'
import Pic from './components/Pic'

export default function Scene({ targetPosition }) {

    const { width, height } = useThree((state) => state.viewport)

    /* General purpose controls, attach to whatever for adjustment */
    // const { position, rotation } = useControls({
    //     position: [ 0, 0, 0 ],
    //     rotation: [ 0, 0, 0 ],
    // })

    /* Camera position if needed */
    // const { position } = useThree((state) => state.camera)
    // const { camera } = useThree((state) => state)
    // console.log('camPos', position)

    /* makes sure 'About' section title is never in view until scrolled */
    const conditionalWidth = width < 5 ? width : width * 0.6

    /* makes site title responsive to device width */
    const siteTitlePos = [
        -0.35,
        -0.2, 
        width < 9 ? width * .5 : 4.5
    ]


    const [
        logo
    ] = useTexture([
        './images/Celtics-logo.png'
    ])

    return (
        <>
            <OrbitControls makeDefault />
            {/* <Perf position='top-left' /> */}

            {/* <Ocean /> */}
            {/* <SiteTitle text='Merry Christmas' navTo='/' position={siteTitlePos} rotation={[ 0, 1, 0.09 ]} /> */}
            {/* <Sign text='CONTACT' navTo='/contact' /> */}

            {/* <ScrollControls pages={8} infinite horizontal> */}
                {/* <Scroll> */}

                    {/* <SectionTitle text='Merry Christttmas!' navTo='/' position={position}> */}
                        <Pic image={logo} position={[ 0, 0, 0 ]} size={3} targetPosition={targetPosition}/>
                    {/* </SectionTitle> */}
                {/* </Scroll> */}
            {/* </ScrollControls> */}
        </>
    )
}