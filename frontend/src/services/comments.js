const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getComments = async (token) => {
    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${BACKEND_URL}/comments`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to fetch comments");
    }

    const data = await response.json();
    return data;
};

export const getComment = async ({token, comment_id}) => {
    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${BACKEND_URL}/comments/${comment_id}`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to fetch comments");
    }

    const data = await response.json();
    return data;
};

export const createComment = async (token, postId, content) => {
    const requestOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ postId, content }),
    };

    const response = await fetch(`${BACKEND_URL}/comments`, requestOptions);

    if (response.status !== 201) {
        throw new Error("Unable to create comment");
    }

    const data = await response.json();
    return data;
};