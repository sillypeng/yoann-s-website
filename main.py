#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
from google.appengine.api import mail
import json


        
class SendMailHandler(webapp.RequestHandler):
    def post(self):
        messageBody="message from YoannGarel.com:\n";
#        messageBody += self.request.body;
        dict=json.loads(self.request.body);
        messageBody+= "Name: " + dict["name"] +"\n";
        messageBody+= "Email: " + dict["email"] +"\n";
        messageBody+= "Message:\n" + dict["message"];
        mail.send_mail(sender="<zipeng.wu@yoanngarel.com>",
              to="<yoanng@hotmail.com>",
              subject="someone left you a message on www.yoanngarel.com",
              body=messageBody)
        

app = webapp2.WSGIApplication([('/contact', SendMailHandler)],
                                         debug=True)

