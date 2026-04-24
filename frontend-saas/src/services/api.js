const BASE_URL = "https://mini-saas-task-manager-2.onrender.com/api";

export const api = async (endpoint, method = "GET", body = null) => {
  const token = localStorage.getItem("token");

  const headers = {};

  if (body) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  let data;

  try {
    data = await res.json();
  } catch {
    throw new Error("Invalid server response");
  }

  if (!res.ok) {
    throw new Error(data.msg || "Something went wrong");
  }

  return data;
};
