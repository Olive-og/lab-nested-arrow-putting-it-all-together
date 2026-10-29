
const createLoginTracker = (userInfo) => {
  let attemptCount = 0;

  const attemptLogin = (passwordAttempt) => {
    attemptCount++;

    if (attemptCount <= 3) {
      if (passwordAttempt === userInfo.password) {
        return "Login successful";
      }
      return `Attempt ${attemptCount}: Login failed`;
    }

    return "Account locked due to too many failed login attempts";
  };

  return attemptLogin;
};

module.exports = { createLoginTracker };


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};