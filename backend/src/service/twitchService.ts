import axios from 'axios';

interface Stream {
  id: string;
  user_name: string;
  description: string;  // assuming 'description' is part of the stream object
  viewer_count: number;
  started_at: string;
}

interface TwitchStreamsResponse {
  data: Stream[];
}

export const fetchTwitchStreams = async (): Promise<Stream[]> => {
  try {
    // Specify the expected response type directly without separate import
    const response = await axios.get<TwitchStreamsResponse>('https://api.twitch.tv/helix/streams', {
      headers: {
        'Client-ID': process.env.TWITCH_CLIENT_ID!,
        'Authorization': `Bearer ${process.env.TWITCH_ACCESS_TOKEN!}`,
      },
      params: {
        first: 10, // number of streams to fetch
      },
    });

    // Return the actual data from the response
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Twitch streams:', error);
    throw new Error('Error fetching Twitch data');
  }
};
