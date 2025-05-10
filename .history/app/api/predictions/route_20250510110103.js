import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  const { year, month } = await request.json();

  // Check if environment variable exists
  if (!process.env.NEXT_PUBLIC_API_URL) {
    console.error("Missing NEXT_PUBLIC_API_URL environment variable");
    return NextResponse.json(
      { error: "API configuration error" },
      { status: 500 }
    );
  }

  try {
    // Remove trailing slash if present before adding /predict
    const baseUrl = process.env.NEXT_PUBLIC_API_URL.endsWith("/")
      ? process.env.NEXT_PUBLIC_API_URL.slice(0, -1)
      : process.env.NEXT_PUBLIC_API_URL;

    const url = `${baseUrl}/predict`;
    console.log(`Sending request to: ${url}`);

    const response = await axios.post(url, {
      year,
      month,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("API request failed:", error.message);

    // More detailed error response
    return NextResponse.json(
      {
        error: "Failed to fetch predictions",
        details: error.response?.data || error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}
