import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params
    const contact = await prisma.contactSubmission.findUnique({
      where: { id },
    })

    if (!contact) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 })
    }

    return NextResponse.json(contact)
  } catch (error) {
    console.error('Error fetching contact:', error)
    return NextResponse.json({ error: 'Failed to fetch contact' }, { status: 500 })
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params
    const body = await request.json()
    const { status } = body

    const contact = await prisma.contactSubmission.update({
      where: { id },
      data: { status },
    })

    return NextResponse.json(contact)
  } catch (error) {
    console.error('Error updating contact:', error)
    return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth(request);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params
    await prisma.contactSubmission.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting contact:', error)
    return NextResponse.json({ error: 'Failed to delete contact' }, { status: 500 })
  }
}
