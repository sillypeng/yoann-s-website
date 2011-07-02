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
import os
from google.appengine.ext.webapp import template
from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.api import mail
from django.utils import simplejson


class MainHandler(webapp.RequestHandler):
    def get(self):
		template_values = {}
		path = os.path.join(os.path.dirname(__file__), 'main.html')
		self.response.out.write(template.render(path, template_values))
        
class SendMailHandler(webapp.RequestHandler):
    def post(self):
        messageBody="message from YoannGarel.com:\n";
#        messageBody += self.request.body;
        dict=simplejson.loads(self.request.body);
        messageBody+= "Name: " + dict["name"] +"\n";
        messageBody+= "Email: " + dict["email"] +"\n";
        messageBody+= "Message:\n" + dict["message"];
        mail.send_mail(sender="<zipeng.wu@yoanngarel.com>",
              to="<yoanng@hotmail.com>",
              subject="someone left you a message on www.yoanngarel.com",
              body=messageBody)
        

def main():
    application = webapp.WSGIApplication([('/', MainHandler),
                                          ('/contact', SendMailHandler)],
                                         debug=True)
    util.run_wsgi_app(application)


if __name__ == '__main__':
    main()
