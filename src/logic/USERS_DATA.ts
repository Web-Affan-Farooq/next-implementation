export interface Iuser {
    id:number;
    username:string;
    email:string;
}
export interface Idatabase {
    data:Iuser[],
    response:{message:string}
}

const DataBase: Idatabase ={
    data :[
        { id: 1, username: "Muhammad Affan", email: "example@gmail.com" },
        { id: 2, username: "Alice Smith", email: "alice.smith@email.com" },
        { id: 3, username: "Bob Johnson", email: "bob.johnson@email.com" },
        { id: 4, username: "Charlie Brown", email: "charlie.brown@email.com" },
        { id: 5, username: "David Lee", email: "david.lee@email.com" },
        { id: 6, username: "Emily Jones", email: "emily.jones@email.com" },
        { id: 7, username: "Frank Garcia", email: "frank.garcia@email.com" },
        { id: 8, username: "Grace Miller", email: "grace.miller@email.com" },
        { id: 9, username: "Henry Williams", email: "henry.williams@email.com" },
        { id: 10, username: "Isabella Clark", email: "isabella.clark@email.com" },
        { id: 11, username: "Jacob Taylor", email: "jacob.taylor@email.com" },
        { id: 12, username: "Sophia Davis", email: "sophia.davis@email.com" },
        { id: 13, username: "William Brown", email: "william.brown@email.com" },
        { id: 14, username: "Olivia Baker", email: "olivia.baker@email.com" },
        { id: 15, username: "Benjamin Moore", email: "benjamin.moore@email.com" },
        { id: 16, username: "Ava Garcia", email: "ava.garcia@email.com" },
        { id: 17, username: "Noah Miller", email: "noah.miller@email.com" },
        { id: 18, username: "Mia Hernandez", email: "mia.hernandez@email.com" },
        { id: 19, username: "Lucas Lopez", email: "lucas.lopez@email.com" },
        { id: 20, username: "Evelyn Sanchez", email: "evelyn.sanchez@email.com" },
      ],
      response:{message:""}
};
export default DataBase;