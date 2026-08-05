//props are the elements which are used to pass from parent to the child which is present in this

//Default props are the elements whcih are passed directly to parent to child in the case of no elements which are present in the class

import PropTypes from 'prop-types'


function Student({ name = "Guest", age = 0, isStudent = false }){
    return (
        <div className="student">
            <p>{name}</p>
            <p>{age}</p>
            <p>{isStudent ? "Yes":"No"}</p>

        </div>
    )
}

Student.propTypes = {
    name : PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student;