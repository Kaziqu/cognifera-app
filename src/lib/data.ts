// cognifera-app/src/lib/data.ts
export interface Book {
    id: number;
    title: string;
    author: string;
    status: "Pending" | "Published" | "Rejected" ;
    createdAt: Date;
    isDeleted: boolean;
}
