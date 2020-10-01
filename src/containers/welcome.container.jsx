import React, { Fragment } from 'react'

import {
    Button,
    Box,
    Container,
    Typography,
    Icon
} from '../components/index.js'

import {
    withRouter
} from 'react-router-dom'

function WelcomeContainer(props){
    const name = props.data['Preferred Name']
    const { history, match } = props
    
    console.log(props)

    const onNextClick = function() {
        const { id } = match.params
        history.push(`/${id}/details`)
    }

    const onNotClick = function() {
        history.replace('/')
    }

    return (
        <Fragment>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome {name}
            </Typography>
            <Box display="flex" flexDirection="column">
                <Container style={{marginBottom: 20}}>
                    <Button 
                        onClick={onNextClick}
                        variant="contained" 
                        color="primary" 
                        endIcon={<Icon>send</Icon>}>
                        Get Started
                    </Button>
                </Container>
                <Container>
                    <Button onClick={onNotClick}>
                        Not {name}?
                    </Button>
                </Container>
            </Box>
        </Fragment>
    )

}

export default withRouter(WelcomeContainer)