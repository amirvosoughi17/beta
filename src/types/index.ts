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
  websiteName: string;
  description: string;
  websiteType: string;
  monthlyUsersCount: string;
  likedWebsiteUrls: string | string[];
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
  likedWebsiteUrls: string[];
  status: string;
  orderId: string;
}
