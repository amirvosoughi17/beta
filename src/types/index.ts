export interface LoginFormInput {
  phoneNumber: string;
  password: string;
}

export interface registerFormInput {
  username: string;
  phoneNumber: string;
  password: string;
}

export interface OrderFormData {
  companyName: string;
  description: string;
  typeOfWeb: string;
  monthlyUsersCount: string;
  likedWebsiteUrls: string | string[];
  name: string;
  phoneNumber: string;
}

export interface User {
  _id: string;
  username: string;
  phoneNumber: string;
  role: string;
}

export interface Order {
  user: any;
  websiteName: string;
  description: string;
  websiteType: string;
  monthlyUserCount: string;
  likedWebsiteUrls: string | string[];
  status: string;
  orderId: string;
}

export type FetchOrder = {
  id: number;
  name: string;
  phoneNumber: string;
  companyName: string;
  description: string;
  typeOfWeb: string;
  monthlyUsersCount: string;
  likedWebsiteUrls: string | string[];
};

export interface CreateShowcaseFormData {
  title: string;
  description: string;
  teches: string[];
  image: string;
  category: string;
  instagramHref: string;
  webHref: string;
}