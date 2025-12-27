// route.ts [id]

import { NextResponse } from 'next/server';
import { deleteBookById } from '@/lib/actions';
import { updateBookStatus } from '@/lib/actions';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{id: string}>}
){
    const { id } = await params;
    if(!id){
        return NextResponse.json({success: false, message: 'Book ID is required'}, {status: 400});
    }
    const idNumber = parseInt(id, 10);
    const deleteBook = await deleteBookById(idNumber);
    console.log('Deleted Actions Triggered:', deleteBook);
    return NextResponse.json({success: true, book: deleteBook, message: 'Book deleted successfully'});
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{id: string}> },

)
{   
    const { id } = await params;
    if(!id){
        return NextResponse.json({success: false, message: 'Book ID is required'}, {status: 400});
    }

    const idNum = parseInt(id, 10);
    const body = await request.json();
    const { status } = body; // Extract status from the request body

    if(!status){
        return NextResponse.json({success: false, message: 'Status is required'}, {status: 400});
    }

    try{
        const updatedBook = await updateBookStatus(idNum, status);
        console.log('Updated book:', updatedBook);
        return NextResponse.json({success: true, book: updatedBook, message: 'Book status updated successfully'});
    }catch (error){
        console.error('Error updating book status:', error);
        return NextResponse.json({success: false, message: 'Error updating book status'}, {status: 500});
    }
}