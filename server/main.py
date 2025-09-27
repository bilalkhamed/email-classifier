from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
from time import sleep

classifier = joblib.load('classifier.pkl')
vectorizer = joblib.load('vectorizer.pkl')

class EmailText(BaseModel):
    text: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins='*',
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def main(): 
    return 'Hello'

@app.post('/')
def predict(data: EmailText): 
    sleep(1)
    text_list = []
    text_list.append(data.text)
    count = vectorizer.transform(text_list)
    prediction = classifier.predict(count)
    probability = classifier.predict_proba(count).max()

    return { 
        'prediction': prediction[0],
        'probability': probability
    }

