import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = ({isLoading}) => {
    return (
        <div>
            {isLoading && 
                <div className="r-loading">
                <FontAwesomeIcon className="fa-spin fa-3x" icon={faSpinner} />
                </div>
            }
        </div>
    )
}

export default Loading;