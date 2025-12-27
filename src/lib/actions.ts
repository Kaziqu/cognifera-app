'use server';
import { prisma } from "@/lib/prismaconfig";

export async function uploadBook(title: string, author: string, status: "Pending" | "Published" | "Rejected"){
    return prisma.book.create({
        data:{
            title,
            author,
            status,
        }
    });
} 

export async function deleteBookById(id: number){
    return prisma.book.update({ // update instead of delete
        where: { id: id }, 
        data: { isDeleted: true } // soft delete by setting isDeleted to true
    })
}

export async function updateBookStatus(id: number, status: "Published" | "Rejected"){
    return prisma.book.update({
        where: { id: id },
        data: { status: status }
    });
}
