import React from 'react'
import { TBL_FIELDS } from '../api/config'
import {
    Container,
    TextField,
    Typography
} from '../components/index.js'

import { inputStyles } from '../styles/index'

export default function ContactForm(props) {
    const { data } = props
    const classes = inputStyles()
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1">
                Personal Information
            </Typography>
            <Typography>
                Please confrim that we have the correct personal and contact information for you.
            </Typography>
            <form style={{display: "flex", flexDirection: "column", width: "100%"}}>
                <TextField
                    className={classes.inputSpace}
                    required
                    fullWidth
                    defaultValue={data[TBL_FIELDS.FIRST_NAME] || ""}
                    id="contact-first-name"
                    label="Legal First Name"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className={classes.inputSpace}
                    required
                    fullWidth
                    defaultValue={data[TBL_FIELDS.LAST_NAME] || ""}
                    id="contact-last-name"
                    label="Legal Last Name"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className={classes.inputSpace}
                    required
                    fullWidth
                    defaultValue={data[TBL_FIELDS.EMAIL] || ""}
                    id="contact-email"
                    label="Email Address"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        </Container>
    )
}