const 
  sendVerifyMail = require("./mail/sendVerifyMail"),
  Router = require("@koa/router"),
  router = new Router();

router.get('/',(ctx)=>ctx.body = 'en ligne')
router.post("/sendVerifyMail", sendVerifyMail);

module.exports = router;