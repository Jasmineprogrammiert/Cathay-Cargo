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

df = df[['Departure Date','Booking window','Origin', 'Destination', 'Product','Weight', 'Volume', 'Total Piece']]

df.to_csv('dataConverted.csv', index=False) 
data = pd.read_csv('dataConverted.csv')

# use LabelEncoder to convert categorical data into numerical
label_encoder = LabelEncoder()

data['Departure Date'] = label_encoder.fit_transform(data['Departure Date'])
data['Origin'] = label_encoder.fit_transform(data['Origin'])
data['Destination'] = label_encoder.fit_transform(data['Destination'])
data['Product'] = label_encoder.fit_transform(data['Product'])

data['Total Piece'].fillna((data['Total Piece'].mean()), inplace=True)

# Define a function to remove outliers
def remove_outliers(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower_limit = Q1 - 1.5 * IQR
    upper_limit = Q3 + 1.5 * IQR

    # Filter out the outliers
    df = df[(df[column] >= lower_limit) & (df[column] <= upper_limit)]
    return df

# Apply the function to the 'Weight' and 'Volume' columns
data = remove_outliers(data, 'Weight')
data = remove_outliers(data, 'Volume')

# Continue with the rest of your code...

X = data[['Departure Date', 'Booking window', 'Origin', 'Destination', 'Product', 'Weight', 'Volume']]
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
    
    'Weight': X_test['Weight'],
    'Volume': preds
})

# plot the predicted values and the regression line
plt.figure(figsize=(10, 6))
sns.regplot(x='Weight', y='Volume', data=plot_data, color='blue', line_kws={"color": "green"})
plt.xlabel('Weight')
plt.ylabel('Volume')
plt.title('Regression Line for Predicted Total Piece')
plt.show()
