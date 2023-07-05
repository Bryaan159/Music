const BASE_URL = 'http://localhost:8080';

const FetchServices = {};

FetchServices.Login = async (identifier, password) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            identifier: identifier,
            password: password
        })
    });

    if (response.ok) {
        const { token } = await response.json();
        return token;
    }

    return undefined;
}

FetchServices.Register = async (username, email, password) => {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    });

    if (response.ok) {
        const token = response;
        return token;
    }
    else if (response.status === 409) {
        throw new Error("An account already exists.");
    }
    else {
        throw new Error("Failed to register. Please try again.");
    }
}

FetchServices.verifyToken = async (token) => {
    const response = await fetch(`${BASE_URL}/auth/whoami`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }

    return undefined;
}

FetchServices.getAllSongs = async (token, queryParam) => {
    const response = await fetch(`${BASE_URL}/song/${queryParam}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }

    return undefined;
}

FetchServices.createPlaylist = async (token, title, description) => {
    const response = await fetch(`${BASE_URL}/playlist`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: description
        })
    });

    if (response.ok) {
        const data = response;
        return data;
    } else if (response.status === 409) {
        throw new Error("The playlist already exists.");
    } else {
        throw new Error("Failed to create playlist. Please try again.");
    }
}

FetchServices.getAllPlaylists = async (token, queryParam) => {
    console.log(`${BASE_URL}/user/playlist${queryParam}`);
    const response = await fetch(`${BASE_URL}/user/playlist${queryParam}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }

    throw new Error("Failed to fetch playlists");
};

FetchServices.newSong = async (token, codeSong, queryParam) => {
    const response = fetch(`${BASE_URL}/playlist/${queryParam}`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            codeSong: codeSong,
        })
    });

    if (response.ok) {
        const { data } = await response.json();
        return data;
    }

    return undefined;
}

FetchServices.viewPlayList = async (token, queryParam) => {
    const response = await fetch(`${BASE_URL}/playlist/${queryParam}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (response.ok) {
        const viewPlayList = await response.json();
        return viewPlayList;
    }

    return null;
}
