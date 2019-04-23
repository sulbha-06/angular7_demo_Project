import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  public names:any;
  
  public myJSONObject = {"brandNames": [
    {"name": "Google",
     "URL": "https://www.google.com", 
     "votes": "0",
     "urlName":"www.google.com"
    },
    {"name": "facebook",
     "URL": "https://www.facebook.com", 
     "votes": "1",
     "urlName":"www.google.com"
    },
    {"name": "linkedIn",
    "URL": "https://www.linkedin.com", 
    "votes": "2",
    "urlName":"www.google.com"
   },
   {"name": "Amazon",
   "URL": "https://www.amazon.com", 
   "votes": "3",
   "urlName":"www.google.com"
  }
]
};
  constructor() {}

  getNames(){
    return this.myJSONObject;
  }
  
 
}
