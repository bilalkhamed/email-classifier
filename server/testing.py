import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import seaborn as sns

data = pd.read_csv('spam.csv')

X_train, X_test, y_train, y_test = train_test_split(data['message'].values, data['class'].values, test_size=0.20)

results = {}

for name, vectorizer in (
    ('Count', CountVectorizer()),
   ('TF-IDF', TfidfVectorizer()),
    ('TF-IDF Stopwords', TfidfVectorizer(stop_words='english')),
    ('Tweaked TF-IDF', TfidfVectorizer(
    stop_words=None,
    ngram_range=(1, 2),
    sublinear_tf=True,
    min_df=1,
    max_df=0.95
))
):
    counts = vectorizer.fit_transform(X_train)
    classifier = MultinomialNB()
    targets = y_train
    classifier.fit(counts, targets)

    test_counts = vectorizer.transform(X_test)
    predictions = classifier.predict(test_counts)
    
    report = classification_report(y_test, predictions)
    results[name] = report

for result in results: 
    print(result, '\n')
    print(results[result])