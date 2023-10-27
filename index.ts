import {
  showReviewTotal,
  populateUser,
  showDetails,
  getTopTwoReviews,
} from "./utils";

import { LoyaltyUser, Permissions } from "./enums";
import Review from "./interfaces";
import { Price, Country } from "./types";

// const propertyContainer = document.querySelector(".properties");
// const reviewContainer = document.querySelector(".reviews");
// const container = document.querySelector(".container");
// const button = document.querySelector(".button");
// const footer = document.querySelector(".footer");

let isLoggedIn: boolean;

// enum Permissions {
//   ADMIN = "ADMIN",
//   READ_ONLY = "READ_ONLY",
// }

// enum LoyaltyUser {
//   GOLD_USER = "GOLD_USER",
//   SILVER_USER = "SILVER_USER",
//   BROZNE_USER = "BROZNE_USER",
// }

// interface Review {
//   name: string;
//   stars: number;
//   loyaltyUser: LoyaltyUser;
//   date: string;
// }

const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];

const you = {
  fistName: "Bobby",
  lastName: "Brown",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-glat", "tokyo-bungalow"],
};

interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number | string;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}

// Array of properties

const properties: Property[] = [
  {
    image: "images/colombia-property.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+112343823978921, "marywinkle@gmail.com"],
    isAvailable: true,
  },
];

// Solution
//
