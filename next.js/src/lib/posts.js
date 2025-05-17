export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("資料取得失敗");
    const posts = await response.json();
    return posts.slice(0, 10);
  } catch (error) {
    console.error(error);
    throw new Error("發生錯誤");
  }
};

export const getPostById = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error("文章不存在");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("發生錯誤");
  }
};
