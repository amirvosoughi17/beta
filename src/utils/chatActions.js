export async function sendMessage(content) {
    try {
      const response = await fetch('/api/dashboard/chats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      
      const responseData = await response.json();
      return responseData.chat;
    } catch (error) {
      throw new Error('Error sending message:', error.message);
    }
  }
  

  export async function getAllChats() {
    try {
      const response = await fetch('/api/dashboard/chats');
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      
      const responseData = await response.json();
      return responseData.myChats;
    } catch (error) {
      throw new Error('Error getting chats:', error.message);
    }
  }