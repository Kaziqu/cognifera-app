// api

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaconfig';
import { uploadBook } from '@/lib/actions';

export async function GET(){
   const getBook = await prisma.book.findMany({
    where: {isDeleted: false}
   });
   try{
    return NextResponse.json({success: true, books: getBook});
   }catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json({success: false, message: 'Error fetching books'}, {status: 500});
   }
}

export async function POST(request: Request){
    const req = await request.json();
    const { title, author, status } = req;

    try {
        if(!title || !author || !status){
            return NextResponse.json({success: false, message: 'Book title, author, and status are required'}, {status: 400});
        }
        
        const addBook = await uploadBook(title, author, status);
        console.log('Uploaded book:', addBook);
        return NextResponse.json({success: true, book: addBook, message: 'Book uploaded successfully'});
    }catch (error){
        console.error('Error uploading book:', error);
        return NextResponse.json({success: false, message: 'Error uploading book'}, {status: 500});
    }
}
