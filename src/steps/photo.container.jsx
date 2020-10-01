import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import { getOrientation } from 'get-orientation/browser'
import { getCroppedImg, getRotatedImage } from '../modules/canvas.util'

import {
    Container,
    Typography,
    Box,
    CropControls
} from '../components/index.js'

import { cropStyles } from '../styles/index'

const ORIENTATION_TO_ANGLE = {
  '3': 180,
  '6': 90,
  '8': -90,
}



function readFile(file) {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}

export default function PhotoContainer(props){
    const [imageSrc, setImageSrc] = React.useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)

    const classes = cropStyles()

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            )
            console.log('donee', { croppedImage })
            setCroppedImage(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [imageSrc, croppedAreaPixels, rotation])

    const onClose = useCallback(() => {
        setCroppedImage(null)
    }, [])

    const onFileChange = async e => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            let imageDataUrl = await readFile(file)

            // apply rotation if needed
            const orientation = await getOrientation(file)
            const rotation = ORIENTATION_TO_ANGLE[orientation]
            if (rotation) {
                imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
            }

            setImageSrc(imageDataUrl)
        }
    }


    return (
        <Container>
            <Typography variant="h4" component="h1">
                Add your Badge Photo
            </Typography>
            <div>
                {imageSrc ? (
                    <Box className={classes.cropContainer}>
                        <Box>
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                rotation={rotation}
                                zoom={zoom}
                                aspect={4 / 3}
                                onCropChange={setCrop}
                                onRotationChange={setRotation}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        </Box>
                        <Box>
                            <CropControls 
                                zoom={zoom}
                                setZoom={setZoom}
                                rotation={rotation}
                                setRotation={setRotation}
                                showCroppedImage={showCroppedImage}
                            />
                        </Box>
                    </Box>
                ) : (
                    <input type="file" onChange={onFileChange} accept="image/*" />
                )}

            </div>
        </Container>
    )
}