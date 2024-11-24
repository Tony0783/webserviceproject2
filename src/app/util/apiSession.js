export const fetchApiKeyFromSession = async () => {
    try {
      const response = await fetch("/api/get-session-api-key", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 세션 기반 쿠키 사용
      });
  
      if (!response.ok) {
        throw new Error("API 키를 가져오는 데 실패했습니다.");
      }
  
      const data = await response.json();
      return data.apiKey;
    } catch (error) {
      console.error("API 키 가져오기 오류:", error);
      throw error;
    }
  };
  