import React from 'react'


import {
    Container,
    Typography,
    Slider,
    Button,
    Box
} from '../components/index.js'

import { cropStyles } from '../styles/index'

export default function CropControls(props) {
    const { zoom, setZoom, rotation, setRotation, showCroppedImage } = props
    const classes = cropStyles()
    return (
        <div className={classes.controls}>
            <div className={classes.sliderContainer}>
                <Typography
                    variant="overline"
                    classes={{ root: classes.sliderLabel }}
                >
                    Zoom
                </Typography>
                <Slider
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    classes={{ root: classes.slider }}
                    onChange={(e, zoom) => setZoom(zoom)}
                />
            </div>
            <div className={classes.sliderContainer}>
                <Typography
                    variant="overline"
                    classes={{ root: classes.sliderLabel }}
                >
                    Rotation
                </Typography>
                <Slider
                    value={rotation}
                    min={0}
                    max={360}
                    step={1}
                    aria-labelledby="Rotation"
                    classes={{ root: classes.slider }}
                    onChange={(e, rotation) => setRotation(rotation)}
                />
            </div>
            {/* <Button
                onClick={showCroppedImage}
                variant="contained"
                color="primary"
                classes={{ root: classes.cropButton }}
                >
                Show Result
                </Button> */}
        </div>
    )
}