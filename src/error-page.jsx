import { useRouteError } from "react-router-dom";

import React from 'react'

const errorPage = () => {

    const error = useRouteError();
    console.error(error)

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>This was not meant to occur.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default errorPage