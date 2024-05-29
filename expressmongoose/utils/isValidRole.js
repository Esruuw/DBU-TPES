
const isValidRole = (role) => {
    const roles = ['admin', 'student', 'teacher','hrm'];
    if (roles.includes(role)) {
        return true;
    }
    return false;
} 

module.exports  = { isValidRole }
