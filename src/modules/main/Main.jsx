import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/button/Button";

export const Main = () => {

    return(
        <div>

            <Button text={<Link to='/films'>Go to films</Link>} />
        </div>
    )
}

