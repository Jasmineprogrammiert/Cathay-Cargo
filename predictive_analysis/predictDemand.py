import pandas as pd
import numpy as np
import seaborn as sns
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from matplotlib import pyplot as plt

# Load the Excel file
df = pd.read_excel('Searching_Data_TW.xlsx', parse_dates=['Departure Date'])

df['Departure Date'] = pd.to_datetime(df['Departure Date']).dt.date

df = df[['Departure Date','Booking window','Origin', 'Destination', 'Product','Weight',  'Total Piece']]

df.to_csv('dataConverted.csv', index=False) 
data = pd.read_csv('dataConverted.csv')

# use LabelEncoder to convert categorical data into numerical
label_encoder = LabelEncoder()

data['Departure Date'] = label_encoder.fit_transform(data['Departure Date'])
data['Origin'] = label_encoder.fit_transform(data['Origin'])
data['Destination'] = label_encoder.fit_transform(data['Destination'])
data['Product'] = label_encoder.fit_transform(data['Product'])

data['Total Piece'].fillna((data['Total Piece'].mean()), inplace=True)

X = data[['Departure Date', 'Booking window', 'Origin', 'Destination', 'Product']]
y = data['Total Piece']

# split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# create a linear regression model
model = LinearRegression()

# fit the model with the training data
model.fit(X_train, y_train)

# predict the target variable on the test data
preds = model.predict(X_test)

# create a new DataFrame for plotting
plot_data = pd.DataFrame({
    'Departure Date': X_test['Departure Date'],
    'Predicted Total Piece': preds
})

# plot the predicted values and the regression line
plt.figure(figsize=(10, 6))
sns.regplot(x='Departure Date', y='Predicted Total Piece', data=plot_data, color='blue', line_kws={"color": "green"})
plt.xlabel('Departure Date')
plt.ylabel('Predicted Total Piece')
plt.title('Regression Line for Predicted Total Piece')
plt.show()
