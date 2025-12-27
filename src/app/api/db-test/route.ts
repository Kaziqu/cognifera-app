import { prisma } from "@/lib/prismaconfig"

export async function GET() {
  try {
    // TEST PALING MINIMAL
    await prisma.$queryRaw`SELECT 1`

    return Response.json({
      ok: true,
      message: "Database connected"
    })
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: err.message,
      }),
      { status: 500 }
    )
  }
}
