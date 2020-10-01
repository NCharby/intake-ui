import React, { useState } from 'react';

import {

    CircularProgress
} from '../components/index.js'


export default function LoaderWrapper(props) {
    const { ChildView, ...rest } = props 
    const [isLoading, setIsLoading] = useState(true)
    const [hasData, setHasData] = useState(false)

    if(!hasData){


        
    }
    
    return (
        <div>
            {isLoading ? (
                <CircularProgress size={100}/>
            ): (
                <ChildView {...rest}/>
            )}
        </div>
    )

}