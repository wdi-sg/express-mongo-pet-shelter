# Mongoose Pet Shelter

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Imagine you work for a pet shelter, and you've been asked to create an MVP for a web application that will allow you to keep track of adoptions, abandonments, and drop-offs.  Using Node, Express, MongoDB, and Mongoose, build a small app that will allow a user to manipulate pet records.

## Exercise

#### Requirements

- The application will represent an animal shelter and the user will have options to:

  - Adopt a pet
  - Abandon a pet
  - Leave a new pet in the shelter

- The root page, ‘/animals’, will show a list of animals

- For each animal on the index, a link will be displayed

  - If the animal is "orphaned", the link will be to "adopt" the animal
  - If the animal is "adopted", the link will be to "abandon" the animal

- You will also need to create a form on the index where a user can input a new animal with the following data points:

  - Breed
  - Family
  - Name
  - Gender
  - DOB


- Create a model Animal with these fields:

  - name(String)
  - breed(String)
  - DOB(Date)
  - gender(String)
  - family(String)
  - status(String)

***Note:***  The “status” should default to “abandoned” when a user creates the animal, so after the pet was “created” or dropped off at the shelter, a user could click the link to adopt the pet.


**Bonus:**

- Add some style
- Add a field image to link pictures from the web
- Add validations with Mongoose
- Add a `member_since` field to your model that is defined by a custom model method. A user should never have to update this field explicitly, but rather it should be defined automatically on the click of the "Add an animal" button
- Create a "success" view that shows all animals that have been adopted

#### Starter code

In the [starter code](starter-code) folder, you'll find a Node app containing all the packages you need to get started - run `npm install` to set the packages and create a Mongo database named `animalshelter`.

#### Deliverable


![Example Image](http://s30.postimg.org/uv04jcwox/Screen_Shot_2015_07_21_at_16_00_59.png)

## Additional Resources


- [Express JS documentation](http://expressjs.com/api.html)
- [MongooseJS documentation](http://mongoosejs.com/docs/api.html)
