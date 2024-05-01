
const isValidRole = (role) => {
    const roles = ['admin', 'student', 'teacher'];
    if (roles.includes(role)) {
        return true;
    }
    return false;
} 

module.exports  = { isValidRole }
