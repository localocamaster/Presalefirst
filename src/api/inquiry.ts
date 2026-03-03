// 배포 후 Firebase Console에서 Function URL 확인 후 .env에 VITE_INQUIRY_API_URL 설정
const INQUIRY_API = import.meta.env.VITE_INQUIRY_API_URL || "";

export interface InquiryFormData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

export async function submitInquiry(data: InquiryFormData): Promise<{ success: boolean; message?: string; error?: string }> {
  if (!INQUIRY_API) {
    return {
      success: false,
      error: "문의 API가 설정되지 않았습니다. .env에 VITE_INQUIRY_API_URL을 설정해주세요.",
    };
  }
  const res = await fetch(INQUIRY_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    return { success: false, error: json.error || "문의 접수에 실패했습니다." };
  }

  return { success: true, message: json.message };
}
