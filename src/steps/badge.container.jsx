import React, { useState } from 'react'
import { TBL_FIELDS } from '../api/config'
import {
    Container,
    Button,
    TextField,
    Typography,
    InputAdornment,
    inputStyles
} from '../components/index.js'






export default function BadgeForm(props) {
    const { data } = props
    const classes = inputStyles()
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1">
                Badge Details
            </Typography>
            <Typography>
                What information would you like on your Badge?
            </Typography>
            <form style={{display: "flex", flexDirection: "column", width: "100%"}}>
                <TextField
                    className={classes.inputSpace}
                    required
                    fullWidth
                    defaultValue={data[TBL_FIELDS.DISPLAY_NAME] || ""}
                    id="badge-display-name"
                    label="Display Name"
                />
                <TextField
                    className={classes.inputSpace}
                    fullWidth
                    id="badge-recon"
                    label="Recon Handle"
                    helperText="optional"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className={classes.inputSpace}
                    fullWidth
                    id="badge-twitter"
                    label="Twitter Handle"
                    helperText="optional"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">@</InputAdornment>,
                    }}
                />
                <TextField
                    className={classes.inputSpace}
                    fullWidth
                    id="badge-telegram"
                    label="Telegram Handle"
                    helperText="optional"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">@</InputAdornment>,
                    }}
                />
            </form>
        </Container>
    )
}