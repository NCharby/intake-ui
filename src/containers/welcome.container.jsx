import React from 'react'

import {
    Container,
    Typography
} from '../components/index.js'



export default function NewContainer(props){
    const name = props.data['Preferred Name']
    return (
        <Container>
            <Typography variant="h2" component="h1">
            Welcome {name}
            </Typography>
        </Container>
    )

}