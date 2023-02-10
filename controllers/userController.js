const path = require("path");

const login = async (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/micuenta");
  } else {
    res.sendFile(path.join(__dirname, ".././public/login.html"));
  }
};
const failedLogin = async (req, res) => {
  res.sendFile(path.join(__dirname, ".././public/faillogin.html"));
};

const signup = async (req, res) => {
  res.sendFile(path.join(__dirname, "../public/register.html"));
};
const failedSignup = async (req, res) => {
  res.sendFile(path.join(__dirname, "../public/failsignup.html"));
};
const logout = async (req, res, next) => {
  let user = req.user.username;
  req.logout(function (err) {
    if (err) return next(err);
    res.send(`<h1>Hasta luego ${user}</h1>
          <script type="text/javascript">
          setTimeout(function(){ location.href = '/login'},2000)
          </script>`);
  });
};
const formulario = async (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/formularioUser.html"));
};

module.exports = {
  formulario,
  login,
  failedLogin,
  signup,
  failedSignup,
  logout,
};
