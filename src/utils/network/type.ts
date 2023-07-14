
export interface GoodRequest {
    ID: string;
    Name: string;
    Kind: number;
    Description: string;
    Price: string;
    FromUser: string;
    IsSold: boolean;
}




export interface ProfileRequest {
    UserName: string;
    Gender: string;
    Phone: string;
    Email: string;
    Addr: string[];
    Order: string[];
}


