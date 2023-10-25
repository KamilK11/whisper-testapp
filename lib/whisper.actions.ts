import axios from "axios";

export async function uploadFile(payload: object) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_WHISPER_API}/v1/upload`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response;
  } catch (error) {
    throw new Error(`Failed to upload file: ${error}`);
  }
}
