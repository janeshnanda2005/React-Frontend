// Conditional rendering denoted whihc gets rendered at a particular state of time is known as conditional rendering (show,hide or change components)

import PropTypes from 'prop-types';


function UserGreeting({islogged = false, username = "guest" }){
    
    const welcomemessage = <h2 className ="greet-user">
                            Welcome {username}
                            </h2>
    
    const loginprompt = <h2 className = "login-prompt">
                        Please Login to continue
                        </h2>
    
    return (islogged ? welcomemessage:loginprompt)
}

UserGreeting.prototypes = {
    islogged: PropTypes.bool,
    username : PropTypes.string,
}

export default UserGreeting;