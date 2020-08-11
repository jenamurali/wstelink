import React from 'react'

const EditTask = ({match}) => (
    <div>
        {match.params.id}
    </div>
)

export default EditTask;