import webapp2
from google.appengine.api import mail
import json

class SendMailHandler(webapp2.RequestHandler):
    def post(self):
        messageBody="message from YoannGarel.com:\n";
#        messageBody += self.request.body;
        dict=json.loads(self.request.body);
        messageBody+= "Name: " + dict.get("name") +"\n";
        messageBody+= "Email: " + dict["email"] +"\n";
        messageBody+= "Message:\n" + dict["message"];
        mail.send_mail(sender="<zipeng.wu@gmail.com>",
              to="<yoanng@hotmail.com>",
              subject="someone left you a message on www.yoanngarel.com",
              body=messageBody)
        

app = webapp2.WSGIApplication([('/contact', SendMailHandler)],
                                         debug=True)

