#!C:\Users\HP\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\n\n")

import cgi
import smtplib
from email.message import EmailMessage

# Fetch data from HTML form
form = cgi.FieldStorage()

user_name = form.getvalue("name")
user_email = form.getvalue("email")
user_subject = form.getvalue("subject")
user_message = form.getvalue("message")

# Email Prep + Sending
sender_email = "moonfxcorp@gmail.com"
sender_password = "moonfx1moonfx1"
receiver_email = "mooncorpltd1@gmail.com"
email_subject = f"Contact Request: {user_subject}"
email_body =  f"Contact Name: {user_name}\nContact Email: {user_email}\nMessage:\n{user_message}"

msg = EmailMessage()
msg.set_content(email_body)
msg['Subject'] = email_subject
msg['From'] = sender_email
msg['To'] = receiver_email

server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
server.login(sender_email, sender_password)
server.send_message(msg)
server.quit()

# Redirect to page

print("<META HTTP-EQUIV=refresh CONTENT=\"0;URL=http://127.0.0.1/moonfx site/contacted.html?Email sent successfully\">\n")