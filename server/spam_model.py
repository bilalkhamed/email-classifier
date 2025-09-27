import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib

data = pd.read_csv('spam.csv')


results = {}

vectorizer = CountVectorizer()
counts = vectorizer.fit_transform(data['message'].values)
classifier = MultinomialNB()
targets = data['class'].values
classifier.fit(counts, targets)

joblib.dump(vectorizer, 'vectorizer.pkl')
joblib.dump(classifier, 'classifier.pkl')
