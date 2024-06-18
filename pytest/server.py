# importing Flask and other modules
from flask import Flask, request, render_template 
import requests
from dotenv import load_dotenv
import os


def configure():
    load_dotenv()

# Flask constructor
app = Flask(__name__, template_folder='./', ) 

# A decorator used to tell the application
# which URL is associated function
@app.route('/', methods =["GET", "POST"])
def gfg():
    configure()
    if request.method == "GET":
        return render_template('index.html')

    if request.method == "POST":
        # getting input with name = fname in HTML form
        name = request.form.get("name")
        # getting input with name = lname in HTML form 
        tel = request.form.get("tel") 

        message = f"Клієнт хоче записатися на урок:\nІм'я: {name}\nТелефон: {tel}"

        sendMessage(message)

        return render_template('index.html')

def sendMessage(userMessage):
    configure()
    telegramToken = os.getenv('telegramToken')  # Corrected variable name
    userID = os.getenv('userID')  # Corrected variable name
    url = f'https://api.telegram.org/bot{telegramToken}/sendMessage'
    params = {
        'chat_id': userID,
        'text': userMessage
    }
    response = requests.post(url, params)
    if response.status_code != 200:
        print(f"Помилка відправки повідомлення до Telegram: {response.status_code}, {response.text}")

if __name__=='__main__':
    app.run(debug=True)