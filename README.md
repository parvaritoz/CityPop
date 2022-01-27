# CityPop
CityPop is a simple application created in React Native. The application allows the user to search for how many inhabitants a certain city has. The user also has the opportunity to search for a country, and then get the population of the three largest cities for that country.

# Code Style
This application was made in React Native. It is made up of different components that together build the entire application. These components have different tasks, one component can be e.g. a search button used in various screens. The application contains several screens and by using components, the building is facilitated.

# Project Setup
Install Expo for the project and by using the following code, you can create a new expo project:
```
npm install -g expo-cli

expo init project-name
```

Make sure that you have the latest npm and node as well. Confirm by using: 
```
npm -v
node -v
```

# Installation
This application is built after Expo go. To be able to run the program, the following installations are required:
```
npm install --save react-navigation
npm install --save react-nagivation-stack
npm install --save react-native-reanimated 
npm install --save react-native-gesture-handler
```

# API Reference
The data used for the application is from the Geonames API. More about it can be read [here](
http://www.geonames.org/export/geonames-search.html).

# How to use
The application is tested and can run on both Android and iOS devices. You can run the project by writing:
```
expo start
```
### Run on device 
You can also run the project on your actual device. Start by first downloading the Expo Go app on your device. After you have run the project through 'expo start', a QR code will be visible in the terminal. You can scan the code through the Expo app to run the application on your device. You can also choose to run the app on the web, where you can also test and run the application on different devices and test responsiveness.

# Build Status
Right now, the application is working properly in addition to certain things. The user can search by city and get the number of inhabitants for the city. The user can also search for a country and get the three largest countries and their inhabitants. To be able to find a country's largest cities, the country's countryCode is used to later be able to retrieve the three largest cities. This implementation choice means that the program can sometimes not determine whether what you write is a country or not. This has to do with how the API is called, but the program can determine if what you write does not exist. If you write e.g. 'njkdansdj' or ':% # €%', the program knows that they do not exist and informs the user about it.
